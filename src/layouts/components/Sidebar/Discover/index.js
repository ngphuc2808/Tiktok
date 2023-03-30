import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './Discover.module.scss';
import { TagIcon } from '~/components/Icons';

const cx = classNames.bind(styles);
function Discover({ label }) {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>
      <ul className={cx('list-tag')}>
        <li className={cx('tag')}>
          <TagIcon className={cx('tag-icon')} />
          <span className={cx('tag-title')}>suthatla</span>
        </li>{' '}
        <li className={cx('tag')}>
          <TagIcon className={cx('tag-icon')} />
          <span className={cx('tag-title')}>suthatla</span>
        </li>{' '}
        <li className={cx('tag')}>
          <TagIcon className={cx('tag-icon')} />
          <span className={cx('tag-title')}>suthatla</span>
        </li>{' '}
        <li className={cx('tag')}>
          <TagIcon className={cx('tag-icon')} />
          <span className={cx('tag-title')}>suthatla</span>
        </li>
      </ul>
    </div>
  );
}

Discover.propTypes = {
  label: PropTypes.string.isRequired,
};
export default Discover;
