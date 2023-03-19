import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/components/Button';
const cx = classNames.bind(styles);

function MenuItem({ data, children, onClick }) {
  const className = cx('menu-item', {
    separate: data.separate,
  });
  return (
    <Button className={className} leftIcon={data.icon} to={data.to} onClick={onClick}>
      {data.title}
      {children}
    </Button>
  );
}

export default MenuItem;
