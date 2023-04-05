import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import { useState } from 'react';
import Header from './Header';

import { useDispatch, useSelector } from 'react-redux';
import { setDarkMode } from '~/features/redux/slices/darkModeSlice';

const cx = classNames.bind(styles);
function Menu({ children, items = [], onChange = () => {}, hideOnClick = false }) {
  const currentUser = true;

  const [history, setHistory] = useState([{ data: items }]);
  const currentPage = history[history.length - 1];

  const { mode } = useSelector((state) => state.darkMode);

  const dispatch = useDispatch();
  const handleSetMode = () => {
    dispatch(setDarkMode());
  };

  const renderItems = () => {
    return currentPage.data.map((item, index) => {
      const isParent = !!item.children;

      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        >
          {item.target && (
            <div className={cx('data-icon', { on: mode })} onClick={handleSetMode}>
              {!mode && <div className={cx('dark-off')}></div>}
              {mode && <div className={cx('dark-on')}></div>}
            </div>
          )}
        </MenuItem>
      );
    });
  };
  return (
    <Tippy
      hideOnClick={hideOnClick}
      interactive
      offset={currentUser ? [19, 3] : [12, 3]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper
            className={cx('menu-popper', {
              auth: currentUser,
              'menu-popper-dark': mode,
            })}
          >
            {history.length > 1 && (
              <Header
                title={currentPage.title}
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            <div className={cx('menu-body')}>{renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
      onHide={() => {
        setHistory((prev) => prev.slice(0, 1));
      }}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
};
export default Menu;
