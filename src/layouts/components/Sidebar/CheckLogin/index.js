import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './CheckLogin.module.scss';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);
function CheckLogin() {
  const { mode } = useSelector((state) => state.darkMode);
  return (
    <div
      className={cx('wrapper', {
        'dark-mode': mode,
      })}
    >
      <p className={cx('description')}>Log in to follow creators, like videos, and view comments.</p>
      <Button className={cx('button')} outline large darkModeOutlinePrimary={mode}>
        Log in
      </Button>
    </div>
  );
}

export default CheckLogin;
