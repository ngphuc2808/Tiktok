import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './CheckLogin.module.scss';

const cx = classNames.bind(styles);
function CheckLogin() {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('description')}>Log in to follow creators, like videos, and view comments.</p>
      <Button className={cx('button')} outline large>
        Log in
      </Button>
    </div>
  );
}

export default CheckLogin;
