import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './AccountItems.module.scss';

const cx = classNames.bind(styles);
function AccountItems({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
      <Image src={data.avatar} className={cx('avatar')} alt={data.full_name} />
      <div className={cx('info')}>
        <h4 className={cx('nickname')}>
          <span>{data.nickname}</span>
          {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />}
        </h4>
        <span className={cx('username')}>{data.full_name}</span>
      </div>
    </Link>
  );
}

AccountItems.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AccountItems;
