import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import { useState } from 'react';
import Header from './Header';

const cx = classNames.bind(styles);
function Menu({ children, items = [], onChange = () => {}, currentUser = false }) {
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
          {currentUser
            ? index === items.length - 2 && (
                <div className={cx('data-icon', { on: darkMode })} onClick={handleSetMode}>
                  {darkMode === false && <div className={cx('dark-off')}></div>}
                  {darkMode === true && <div className={cx('dark-on')}></div>}
                </div>
              )
            : index === items.length - 1 && (
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
      interactive
      offset={[12, 8]}
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
      onHide={() => {
        setHistory((prev) => prev.slice(0, 1));
      }}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
