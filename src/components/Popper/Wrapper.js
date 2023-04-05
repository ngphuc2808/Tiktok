import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Popper.module.scss';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function Wrapper({ children, className }) {
  const { mode } = useSelector((state) => state.darkMode);
  return (
    <div
      className={cx('wrapper', className, {
        'dark-mode': mode,
      })}
    >
      {children}
    </div>
  );
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
export default Wrapper;
