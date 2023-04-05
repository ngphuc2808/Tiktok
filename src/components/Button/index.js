import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  outline = false,
  upload = false,
  disabled = false,
  rounded = false,
  children,
  small = false,
  large = false,
  darkModeUpload = false,
  darkModePrimary = false,
  darkModeOutlinePrimary = false,
  className,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}) {
  let Comp = 'button';

  const props = {
    onClick,
    ...passProps,
  };

  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  } else {
    Comp = 'button';
  }

  const classes = cx('wrapper', {
    [className]: className,
    primary,
    outline,
    upload,
    disabled,
    rounded,
    small,
    large,
    darkModeUpload,
    darkModePrimary,
    darkModeOutlinePrimary,
  });
  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  upload: PropTypes.bool,
  disabled: PropTypes.bool,
  rounded: PropTypes.bool,
  children: PropTypes.node.isRequired,
  small: PropTypes.bool,
  large: PropTypes.bool,
  darkModeUpload: PropTypes.bool,
  darkModePrimary: PropTypes.bool,
  darkModeOutlinePrimary: PropTypes.bool,
  className: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
