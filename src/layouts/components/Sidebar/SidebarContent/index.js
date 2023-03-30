import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './SidebarContent.module.scss';
import AccountItem from './AccountItem';
import { useState } from 'react';

const cx = classNames.bind(styles);

function SidebarContent({ label, following = true }) {
  const checkFollow = false;
  const [openList, setOpenList] = useState(true);

  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>
      {following ? (
        <>
          <div
            className={cx('list-user', {
              open: !openList,
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
              <AccountItem />
              <button className={cx('show-account')}>See all</button>
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
};

export default SidebarContent;
