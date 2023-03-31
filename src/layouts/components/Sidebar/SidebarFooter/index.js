import classNames from 'classnames/bind';
import styles from './SidebarFooter.module.scss';

const cx = classNames.bind(styles);
function SidebarFooter() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('list-content')}>
        <a href="https://www.tiktok.com/" className={cx('item-content')} target="_blank" rel="noopener noreferrer">
          About
        </a>
        <a href="https://www.tiktok.com/" className={cx('item-content')} target="_blank" rel="noopener noreferrer">
          Newsroom
        </a>{' '}
        <a href="https://www.tiktok.com/" className={cx('item-content')} target="_blank" rel="noopener noreferrer">
          Contact
        </a>{' '}
        <a href="https://www.tiktok.com/" className={cx('item-content')} target="_blank" rel="noopener noreferrer">
          Careers
        </a>
        <a href="https://www.tiktok.com/" className={cx('item-content')} target="_blank" rel="noopener noreferrer">
          ByteDance
        </a>
      </div>
      <div className={cx('list-content')}>
        <a href="https://www.tiktok.com/" className={cx('item-content')} target="_blank" rel="noopener noreferrer">
          TikTok for Good
        </a>
        <a href="https://www.tiktok.com/" className={cx('item-content')} target="_blank" rel="noopener noreferrer">
          Advertise
        </a>{' '}
        <a href="https://www.tiktok.com/" className={cx('item-content')} target="_blank" rel="noopener noreferrer">
          Developers
        </a>{' '}
        <a href="https://www.tiktok.com/" className={cx('item-content')} target="_blank" rel="noopener noreferrer">
          Transparency
        </a>
        <a href="https://www.tiktok.com/" className={cx('item-content')} target="_blank" rel="noopener noreferrer">
          TikTok Rewards
        </a>
        <a href="https://www.tiktok.com/" className={cx('item-content')} target="_blank" rel="noopener noreferrer">
          TikTok Browse
        </a>
        <a href="https://www.tiktok.com/" className={cx('item-content')} target="_blank" rel="noopener noreferrer">
          TikTok Embeds
        </a>
      </div>
      <div className={cx('list-content')}>
        <a href="https://www.tiktok.com/" className={cx('item-content')} target="_blank" rel="noopener noreferrer">
          Help
        </a>
        <a href="https://www.tiktok.com/" className={cx('item-content')} target="_blank" rel="noopener noreferrer">
          Safety
        </a>{' '}
        <a href="https://www.tiktok.com/" className={cx('item-content')} target="_blank" rel="noopener noreferrer">
          Terms
        </a>{' '}
        <a href="https://www.tiktok.com/" className={cx('item-content')} target="_blank" rel="noopener noreferrer">
          Privacy
        </a>
        <a href="https://www.tiktok.com/" className={cx('item-content')} target="_blank" rel="noopener noreferrer">
          Creator Portal
        </a>
        <a href="https://www.tiktok.com/" className={cx('item-content')} target="_blank" rel="noopener noreferrer">
          Community Guidelines
        </a>
      </div>
      <span className={cx('copy-right')}>2023 Clone Tiktok By Phucnh</span>
    </div>
  );
}

export default SidebarFooter;
