import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Menu({ children, items = [] }) {
  const [darkMode, setDarkMode] = useState(false);

  const handleSetMode = () => {
    setDarkMode(!darkMode);
    console.log(darkMode);
  };

  const renderItems = () => {
    return items.map((item, index) => (
      <MenuItem key={index} data={item}>
        {index === items.length - 1 && (
          <div className={cx('data-icon', { on: darkMode })} onClick={handleSetMode}>
            {darkMode === false && <div className={cx('dark-off')}></div>}
            {darkMode === true && <div className={cx('dark-on')}></div>}
          </div>
        )}
      </MenuItem>
    ));
  };
  return (
    <Tippy
      visible
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>{renderItems()}</PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
