import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { useState, useEffect } from 'react';
import { getListVideo } from '~/services/getVideoApi';
import VideoItem from './VideoItem';

const cx = classNames.bind(styles);

function Home() {
  const [listVideo, setListVideo] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await getListVideo('for-you', 1);
      setListVideo(result);
    };

    fetchApi();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={cx('wrapper')}>
      {listVideo.map((result) => (
        <VideoItem key={result.id} data={result} />
      ))}
    </div>
  );
}

export default Home;
