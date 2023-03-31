import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './SidebarContent.module.scss';
import AccountItem from './AccountItem';
import { useState } from 'react';

const cx = classNames.bind(styles);

function SidebarContent({ label, following = false }) {
  const checkFollow = true;
  const [openList, setOpenList] = useState(true);
  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>
      {following === false ? (
        <>
          <div
            className={cx('list-user', {
              'open-user': !openList,
            })}
          >
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
          </div>
          <button className={cx('show-account')} onClick={() => setOpenList(!openList)}>
            {openList ? 'See all' : 'See less'}
          </button>
        </>
      ) : (
        <>
          {checkFollow ? (
            <>
              <div
                className={cx('list-unfollow-user', {
                  'open-unfollow-user': !openList,
                })}
              >
                <AccountItem checkFollow />
                <AccountItem checkFollow />
                <AccountItem checkFollow />
                <AccountItem checkFollow />
                <AccountItem checkFollow />
                <AccountItem checkFollow />
                <AccountItem checkFollow />
                <AccountItem checkFollow />
                <AccountItem checkFollow />
                <AccountItem checkFollow />
                <AccountItem checkFollow />
              </div>
              <button className={cx('show-account')} onClick={() => setOpenList(!openList)}>
                {openList ? 'See all' : 'See less'}
              </button>
            </>
          ) : (
            <span className={cx('description')}>Accounts you follow will appear here </span>
          )}
        </>
      )}
    </div>
  );
}

SidebarContent.propTypes = {
  label: PropTypes.string.isRequired,
  following: PropTypes.bool,
};

export default SidebarContent;
