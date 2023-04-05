import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, activeIcon }) {
  const { mode } = useSelector((state) => state.darkMode);

  return (
    <NavLink className={(nav) => cx('menu-item', { active: nav.isActive, 'dark-mode-item': mode })} to={to}>
      <span className={cx('icon')}>{icon}</span>
      <span className={cx('active-icon')}>{activeIcon}</span>
      <span className={cx('title')}>{title}</span>
    </NavLink>
  );
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  activeIcon: PropTypes.node.isRequired,
};

export default MenuItem;
