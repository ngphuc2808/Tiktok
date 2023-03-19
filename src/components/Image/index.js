import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';

const Image = ({ src, alt, className, fallBack: customFallback = images.noImage, ...props }) => {
  const [fallBack, setFallBack] = useState('');
  const handleError = () => {
    setFallBack(customFallback);
  };
  return (
    <img
      className={classNames(styles.wrapper, className)}
      src={fallBack || src}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
};

export default forwardRef(Image);
