
import React, { memo } from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('', 'g1', null, [getItem(<Link to="/turnplate">抽奖</Link>, '1'), getItem('Option 2', '2')], 'group'),
    getItem('', 'g2', null, [getItem(<Link to="/welcome">欢迎</Link>, '3'), getItem('Option 4', '4')], 'group'),
  ]),

  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),

  { type: 'divider' },

  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),

  getItem('Group', 'grp', null, [getItem(<Link to='/grid'>Grid布局</Link>, '13'), getItem('Option 14', '14')], 'group'),
];
const leftMenu = memo(() => {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };
  return (
    <Menu
      onClick={onClick}
      style={{
        width: 200, height: '100vh', overflowY: 'auto'
      }}
      defaultSelectedKeys={['3']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  )
})
export default leftMenu
