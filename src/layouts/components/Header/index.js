import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleQuestion,
  faCoins,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faLanguage,
  faMoon,
  faPlus,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import Image from '~/components/Image';
import images from '~/assets/images';
import Menu from '~/layouts/components/Header/Menu';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { InboxIcon, MessageIcon } from '~/components/Icons';
import Search from './Search';
import config from '~/config';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faLanguage} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
  {
    icon: <FontAwesomeIcon icon={faMoon} />,
    title: 'Dark mode',
    target: 'dark-mode',
  },
];

const USER_MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: 'View profile',
    to: '/@Phuc',
  },
  {
    icon: <FontAwesomeIcon icon={faCoins} />,
    title: 'Get coins',
    to: '/coin',
  },
  {
    icon: <FontAwesomeIcon icon={faGear} />,
    title: 'Settings',
    to: '/settings',
  },
  ...MENU_ITEMS,
  {
    icon: <FontAwesomeIcon icon={faSignOut} />,
    title: 'Log out',
    to: '/logout',
    separate: true,
  },
];

function Header() {
  const currentUser = true;

  const handleMenuChange = () => {};

  const { mode } = useSelector((state) => state.darkMode);

  return (
    <header
      className={cx('wrapper', {
        'dark-mode': mode,
      })}
    >
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <Link className={cx('logo-icon')} to={config.routes.home}>
            <img src={!mode ? images.logo : images.logoLight} alt="TikTok"></img>
          </Link>
        </div>

        <Search />

        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Link to={'/Upload'}>
                <Button darkModeUpload={mode} upload leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                  <span>Upload</span>
                </Button>
              </Link>
              <Tippy content="Messages" placement="bottom">
                <button
                  className={cx('action-btn', {
                    'action-btn-light': mode,
                  })}
                >
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy content="Inbox" placement="bottom">
                <button
                  className={cx('action-btn', {
                    'action-btn-light': mode,
                  })}
                >
                  <InboxIcon />
                  <span className={cx('badge')}>12</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button darkModeUpload={mode} upload leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                <span>Upload</span>
              </Button>
              <Button darkModePrimary={mode} primary>
                <span>Log in</span>
              </Button>
            </>
          )}
          <Menu items={currentUser ? USER_MENU_ITEMS : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                className={cx('user-avatar')}
                alt="Nguyen Hoang Phuc"
                src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                fallBack="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
              />
            ) : (
              <button
                className={cx('more-btn', {
                  'action-btn-light': mode,
                })}
              >
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
