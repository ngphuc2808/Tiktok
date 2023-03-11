import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItems.module.scss';

const cx = classNames.bind(styles);
function AccountItems() {
  return (
    <div className={cx('wrapper')}>
      <img
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/33085550b42ae24b1f0f85554eb4efdd~c5_300x300.webp?x-expires=1678644000&x-signature=4yCX8JrlyRsqMBI9Ya455NftjdM%3D"
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
