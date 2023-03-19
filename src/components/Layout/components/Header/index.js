import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleQuestion,
  faCircleXmark,
  faCoins,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faLanguage,
  faMoon,
  faPlus,
  faSignOut,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import Image from '~/components/Image';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItems from '../AccountItems';
import Menu from '~/components/Popper/Menu';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { InboxIcon, MessageIcon, SearchIcon, UploadIcon } from '~/components/Icons';
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
  const [searchResult, setSearchResult] = useState([]);

  const currentUser = true;

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 3000);
  }, []);

  const handleMenuChange = (value) => {
    console.log(value);
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="TikTok"></img>
        </div>
        <HeadlessTippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <span className={cx('account-title')}>Accounts</span>
                <AccountItems />
                <AccountItems />
                <AccountItems />
                <AccountItems />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input placeholder="Search accounts and videos" spellCheck={false} />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

            <button className={cx('search-btn')}>
              <SearchIcon />
            </button>
          </div>
        </HeadlessTippy>
        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Tippy content="Upload Video" placement="bottom">
                <button className={cx('action-btn')}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy content="Messages" placement="bottom">
                <button className={cx('action-btn')}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy content="Inbox" placement="bottom">
                <button className={cx('action-btn')}>
                  <InboxIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button upload leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                <span>Upload</span>
              </Button>
              <Button primary>
                <span>Log in</span>
              </Button>
            </>
          )}
          <Menu
            items={currentUser ? USER_MENU_ITEMS : MENU_ITEMS}
            onChange={handleMenuChange}
            currentUser={currentUser}
          >
            {currentUser ? (
              <Image
                className={cx('user-avatar')}
                alt="Nguyen Hoang Phuc"
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-gio/c0e5acb353efad347ae0ba5a87574f1d~c5_100x100.jpeg?x-expires=1679389200&x-signature=VNlDU%2BM1hSfgdnb3kWt%2FST14R%2FQ%3D"
                // fallBack="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
              />
            ) : (
              <button className={cx('more-btn')}>
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
