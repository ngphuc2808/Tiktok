import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';
import { MusicIcon } from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function VideoItem({ data }) {
  const [playing, setPlaying] = useState(true);
  const videoRef = useRef(null);
  const iconRef = useRef(null);

  const handleVideo = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className={cx('item-user')}>
      <Link to={`/@${data.user.nickname}`} className={cx('')}>
        <Image className={cx('user-avatar')} alt={`/@${data.user.nickname}`} src={data.user.avatar} />
      </Link>
      <div className={cx('content-user')}>
        <div className={cx('content-user-left')}>
          <div className={cx('name')}>
            <Link to={`/@${data.user.nickname}`}>
              <span className={cx('nickname')}>{data.user.nickname}</span>
              <span className={cx('fullname')}>
                {data.user.first_name} {data.user.last_name}
              </span>
            </Link>
          </div>
          <div className={cx('description')}>{data.description}</div>
          <h4 className={cx('music')}>
            <MusicIcon className={cx('music-icon')} />
            <span>{data.music}</span>
          </h4>
          <div className={cx('video')}>
            <div className={cx('video-left')}>
              <video ref={videoRef} className={cx('video-file')} src={data.file_url} loop />
              {!playing && (
                <div ref={iconRef} className={cx('play-icon')} onClick={handleVideo}>
                  <FontAwesomeIcon className={cx('icon')} icon={faPlay} />
                </div>
              )}
              {playing && (
                <div ref={iconRef} className={cx('pause-icon')} onClick={handleVideo}>
                  <FontAwesomeIcon className={cx('icon')} icon={faPause} />
                </div>
              )}
              <div className={cx('progress-area')}>
                <div className={cx('progress-bar')}>
                  <div className={cx('progress')}></div>
                </div>
                <div className={cx('progress-time')}>00:00/{data.meta.playtime_string}</div>
              </div>
            </div>
          </div>
        </div>
        <Button outline={!data.user.is_followed} upload={data.user.is_followed} small>
          {data.user.is_followed ? 'Following' : 'Follow'}
        </Button>
      </div>
    </div>
  );
}

export default VideoItem;
