import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu from './Menu';
import MenuItem from './Menu/MenuItem';
import config from '~/config';
import {
  HomeActiveIcon,
  HomeIcon,
  LiveActiveIcon,
  LiveIcon,
  UserGroupActiveIcon,
  UserGroupIcon,
} from '~/components/Icons';
import Discover from './Discover';
import SidebarFooter from '~/layouts/components/Sidebar/SidebarFooter';
import CheckLogin from './CheckLogin';
import SidebarContent from './SidebarContent';

const cx = classNames.bind(styles);
function Sidebar() {
  const currentUser = false;
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupActiveIcon />}
        />
        <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
      </Menu>
      <CheckLogin />
      <SidebarContent label="Suggested accounts" />
      {currentUser ? <SidebarContent label="Following accounts" following={false} /> : null}
      <Discover label="Discover" />
      <SidebarFooter />
    </aside>
  );
}

export default Sidebar;
