import { useEffect, useState, useRef } from 'react';
import { useDebounce } from '~/hooks';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import { SearchIcon } from '~/components/Icons';

import AccountItems from '~/components/AccountItems';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import * as searchApi from '~/services/searchApi';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const debounced = useDebounce(searchValue, 500);

  const { mode } = useSelector((state) => state.darkMode);

  const inputRef = useRef();

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }
    const fetchApi = async () => {
      setLoading(true);
      const result = await searchApi.search(debounced);
      setSearchResult(result);
      setLoading(false);
    };

    fetchApi();
  }, [debounced]);

  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleClickOutside = () => {
    setShowResult(false);
  };

  return (
    // Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context.
    <div>
      <HeadlessTippy
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <span className={cx('account-title')}>Accounts</span>
              {searchResult.map((result) => (
                <AccountItems key={result.id} data={result} />
              ))}
            </PopperWrapper>
          </div>
        )}
        onClickOutside={handleClickOutside}
      >
        <div
          className={cx('search', {
            'dark-mode': mode,
          })}
        >
          <input
            ref={inputRef}
            value={searchValue}
            placeholder="Search accounts and videos"
            spellCheck={false}
            onChange={(e) => {
              if (e.target.value.startsWith(' ')) {
                setSearchValue('');
              } else {
                setSearchValue(e.target.value);
              }
            }}
            onFocus={() => setShowResult(true)}
          />

          {!!searchValue && !loading && (
            <button
              className={cx('clear', {
                'light-icon': mode,
              })}
              onClick={handleClear}
            >
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {loading && (
            <FontAwesomeIcon
              className={cx('loading', {
                'light-icon': mode,
              })}
              icon={faSpinner}
            />
          )}

          <button
            className={cx('search-btn', {
              'search-btn-dark': mode,
            })}
            onMouseDown={(e) => e.preventDefault()}
          >
            <SearchIcon />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
