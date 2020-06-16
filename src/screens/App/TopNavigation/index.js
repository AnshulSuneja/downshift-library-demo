import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'

const TopNavigation = () => {
  return (
    <Menu mode='horizontal'>
      <Menu.SubMenu title='Downshift Components'>
        <Menu.Item key='components-dropdown'>
          <Link to={'/'}>{'Dropdown'}</Link>
        </Menu.Item>
        <Menu.Item key='components-buttons'>
          <Link to={'/components-buttons'}>{'Buttons'}</Link>
        </Menu.Item>
        <Menu.Item key='components-select'>
          <Link to={'/components-select'}>{'Select'}</Link>
        </Menu.Item>
        <Menu.Item key='components-checkbox'>
          <Link to={'/components-checkbox'}>{'Checkbox'}</Link>
        </Menu.Item>
        <Menu.Item key='components-radio'>
          <Link to={'/components-radio'}>{'Radio'}</Link>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu title='Downshift Hooks'>
        <Menu.Item key='hooks-dropdown'>
          <Link to={'/hooks-dropdown'}>{'Dropdown'}</Link>
        </Menu.Item>
        <Menu.Item key='hooks-buttons'>
          <Link to={'/hooks-buttons'}>{'Buttons'}</Link>
        </Menu.Item>
        <Menu.Item key='hooks-select'>
          <Link to={'/hooks-select'}>{'Select'}</Link>
        </Menu.Item>
        <Menu.Item key='hooks-checkbox'>
          <Link to={'/hooks-checkbox'}>{'Checkbox'}</Link>
        </Menu.Item>
        <Menu.Item key='hooks-radio'>
          <Link to={'/hooks-radio'}>{'Radio'}</Link>
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  )
}

export default TopNavigation
