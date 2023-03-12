import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import { useState } from 'react';
import Header from './Header';

const cx = classNames.bind(styles);
function Menu({ children, items = [], onChange = () => {} }) {
  const [darkMode, setDarkMode] = useState(false);
  const [history, setHistory] = useState([{ data: items }]);
  const currentPage = history[history.length - 1];
  const handleSetMode = () => {
    setDarkMode(!darkMode);
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
          {index === items.length - 1 && (
            <div className={cx('data-icon', { on: darkMode })} onClick={handleSetMode}>
              {darkMode === false && <div className={cx('dark-off')}></div>}
              {darkMode === true && <div className={cx('dark-on')}></div>}
            </div>
          )}
        </MenuItem>
      );
    });
  };
  return (
    <Tippy
      visible
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>
            {history.length > 1 && (
              <Header
                title="Language"
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
