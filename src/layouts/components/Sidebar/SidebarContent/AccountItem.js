import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './SidebarContent.module.scss';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountItem({ checkFollow = false }) {
  return (
    <div>
      {checkFollow === false ? (
        <HeadlessTippy
          interactive
          delay={[700, 0]}
          placement="bottom"
          offset={[-20, -5]}
          render={(attrs) => (
            <div className={cx('info-user')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <div className={cx('preview-user')}>
                  <div className={cx('header')}>
                    <Image
                      src={'https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png'}
                      className={cx('preview-avatar')}
                      alt={'Phuc'}
                    />
                    <Button className={cx('follow-btn')} primary small>
                      Follow
                    </Button>
                  </div>
                  <a
                    href="https://www.tiktok.com/"
                    target="_blank"
                    className={cx('nickname')}
                    rel="noopener noreferrer"
                  >
                    <span className={cx('nickname-title-preview')}>theanh28entertainment</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                  </a>
                  <a
                    href="https://www.tiktok.com/"
                    target="_blank"
                    className={cx('username-preview')}
                    rel="noopener noreferrer"
                  >
                    Theanh28 Entertainment
                  </a>
                  <p className={cx('info-desc')}>
                    <span className={cx('number-preview')}>8.8M</span>
                    <span className={cx('text-preview')}>Followers</span>
                    <span className={cx('number-preview')}>718.7M</span>
                    <span className={cx('text-preview')}>Likes</span>
                  </p>
                </div>
              </PopperWrapper>
            </div>
          )}
        >
          <Link to={`/@Phuc`} className={cx('wrapper-item')}>
            <Image
              src={'https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png'}
              className={cx('avatar')}
              alt={'Phuc'}
            />
            <div className={cx('info')}>
              <h4 className={cx('nickname')}>
                <span className={cx('nickname-title')}>theanh28entertainment</span>
                <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
              </h4>
              <span className={cx('username')}>Theanh28 Entertainment</span>
            </div>
          </Link>
        </HeadlessTippy>
      ) : (
        <Link to={`/@Phuc`} className={cx('wrapper-item')}>
          <Image
            src={'https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png'}
            className={cx('avatar')}
            alt={'Phuc'}
          />
          <div className={cx('info')}>
            <h4 className={cx('nickname')}>
              <span className={cx('nickname-title')}>theanh28entertainment</span>
              <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
            </h4>
            <span className={cx('username')}>Theanh28 Entertainment</span>
          </div>
        </Link>
      )}
    </div>
  );
}

export default AccountItem;
