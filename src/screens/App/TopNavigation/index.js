import React from 'react'
import { Menu } from 'antd'

const TopNavigation = () => {
  return (
    <Menu mode='horizontal'>
      <Menu.SubMenu title='Downshift components'>
        <Menu.Item key='dropdown'>{'Dropdown'}</Menu.Item>
        <Menu.Item key='buttons'>{'Buttons'}</Menu.Item>
        <Menu.Item key='select'>{'Select'}</Menu.Item>
        <Menu.Item key='checkbox'> {'Checkbox'}</Menu.Item>
        <Menu.Item key='radio'>{'Radio'}</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu title='Downshift hooks'>
        <Menu.Item key='dropdown'>{'Dropdown'}</Menu.Item>
        <Menu.Item key='buttons'>{'Buttons'}</Menu.Item>
        <Menu.Item key='select'>{'Select'}</Menu.Item>
        <Menu.Item key='checkbox'>{'Checkbox'}</Menu.Item>
        <Menu.Item key='radio'>{'Radio'}</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  )
}

export default TopNavigation
