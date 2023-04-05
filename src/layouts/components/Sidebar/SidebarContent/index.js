import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './SidebarContent.module.scss';
import AccountItem from './AccountItem';
import { useState, useEffect } from 'react';

import * as suggestedApi from '~/services/suggestedApi';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function SidebarContent({ label, following = false }) {
  const checkFollow = false;
  const [openList, setOpenList] = useState(true);

  const [listSuggested, setListSuggested] = useState([]);

  const [perPage, setPerPage] = useState(5);

  const { mode } = useSelector((state) => state.darkMode);

  useEffect(() => {
    if (!following) {
      const fetchApi = async () => {
        const result = await suggestedApi.suggested(perPage);
        setListSuggested(result);
      };

      fetchApi();
    }
    // eslint-disable-next-line
  }, [perPage]);

  const handleOpenList = () => {
    setPerPage(20);
    setOpenList(!openList);
  };

  return (
    <div
      className={cx('wrapper', {
        'dark-mode': mode,
      })}
    >
      <p className={cx('label')}>{label}</p>
      {following === false ? (
        <>
          <div
            className={cx('list-user', {
              'open-user': !openList,
            })}
          >
            {listSuggested.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}
          </div>
          <button className={cx('show-account')} onClick={handleOpenList}>
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
            <span
              className={cx('description', {
                'dark-mode-text': mode,
              })}
            >
              Accounts you follow will appear here{' '}
            </span>
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
