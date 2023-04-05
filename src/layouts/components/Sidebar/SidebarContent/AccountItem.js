import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './SidebarContent.module.scss';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function AccountItem({ data, checkFollow = false }) {
  const { mode } = useSelector((state) => state.darkMode);

  return (
    <>
      {checkFollow === false ? (
        <div>
          <HeadlessTippy
            interactive
            delay={[700, 0]}
            placement="bottom"
            offset={[-20, -5]}
            render={(attrs) => (
              <div
                className={cx('info-user', {
                  'dark-mode-popper': mode,
                })}
                tabIndex="-1"
                {...attrs}
              >
                <PopperWrapper>
                  <div className={cx('preview-user')}>
                    <div className={cx('header')}>
                      <Image src={data.avatar} className={cx('preview-avatar')} alt={data.nickname} />
                      <Button className={cx('follow-btn')} darkModePrimary={mode} primary small>
                        Follow
                      </Button>
                    </div>
                    <Link to={`/@${data.nickname}`} className={cx('nickname')}>
                      <span className={cx('nickname-title-preview')}>{data.nickname}</span>
                      {data.tick && (
                        <FontAwesomeIcon
                          className={cx('check', {
                            'check-light': mode,
                          })}
                          icon={faCircleCheck}
                        />
                      )}
                    </Link>
                    <Link to={`/@${data.nickname}`} className={cx('username-preview')}>
                      {data.first_name} {data.last_name}
                    </Link>
                    <p className={cx('info-desc')}>
                      <span className={cx('number-preview')}>{data.followers_count}</span>
                      <span className={cx('text-preview')}>Followers</span>
                      <span className={cx('number-preview')}>{data.likes_count}</span>
                      <span className={cx('text-preview')}>Likes</span>
                    </p>
                  </div>
                </PopperWrapper>
              </div>
            )}
          >
            <Link to={`/@${data.nickname}`} className={cx('wrapper-item')}>
              <Image src={data.avatar} className={cx('avatar')} alt={data.nickname} />
              <div className={cx('info')}>
                <h4 className={cx('nickname')}>
                  <span className={cx('nickname-title')}>{data.nickname}</span>
                  {data.tick && (
                    <FontAwesomeIcon
                      className={cx('check', {
                        'check-light': mode,
                      })}
                      icon={faCircleCheck}
                    />
                  )}
                </h4>
                <span className={cx('username')}>
                  {data.first_name} {data.last_name}
                </span>
              </div>
            </Link>
          </HeadlessTippy>
        </div>
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
    </>
  );
}

export default AccountItem;
