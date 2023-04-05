import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/components/Button';
import { useSelector } from 'react-redux';
const cx = classNames.bind(styles);

function MenuItem({ data, children, onClick }) {
  const { mode } = useSelector((state) => state.darkMode);

  const className = cx('menu-item', {
    'dark-mode-item': mode,
    separate: data.separate,
  });
  return (
    <Button className={className} leftIcon={data.icon} to={data.to} onClick={onClick}>
      {data.title}
      {children}
    </Button>
  );
}

MenuItem.propTypes = {
  data: PropTypes.object.isRequired,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default MenuItem;
