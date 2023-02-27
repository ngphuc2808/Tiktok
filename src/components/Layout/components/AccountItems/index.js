import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItems.module.scss';

const cx = classNames.bind(styles);
function AccountItems() {
  return (
    <div className={cx('wrapper')}>
      <img
        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/9e2869aa94c3f1819d1d49bfaa0c486a~c5_300x300.webp?x-expires=1677672000&x-signature=3hNxZJ8YZHknUQhe955A0YdXA48%3D"
        className={cx('avatar')}
        alt="avatar"
      />
      <div className={cx('info')}>
        <h4 className={cx('nickname')}>
          <span>Donald</span>
          <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
        </h4>
        <span className={cx('username')}>Donald Duck</span>
      </div>
    </div>
  );
}

export default AccountItems;
