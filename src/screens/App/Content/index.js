import React from 'react'
import { Route, Switch } from 'react-router-dom'

import DropdownComponent from '../../DownshiftComponents/Dropdown'
import ButtonComponent from '../../DownshiftComponents/Buttons'
import SelectComponent from '../../DownshiftComponents/Select'
import CheckboxComponent from '../../DownshiftComponents/Checkbox'
import RadioComponent from '../../DownshiftComponents/Radio'
import DropdownHook from '../../DownshiftHooks/Dropdown'
import ButtonHook from '../../DownshiftHooks/Buttons'
import SelectHook from '../../DownshiftHooks/Select'
import CheckboxHook from '../../DownshiftHooks/Checkbox'
import RadioHook from '../../DownshiftHooks/Radio'

import './Content.css'

const Content = () => {
  return (
    <div className='content'>
      <Switch>
        <Route exact path='/' component={DropdownComponent} key={'main page'} />
        <Route path='/components-buttons' component={ButtonComponent} />
        <Route path='/components-select' component={SelectComponent} />
        <Route path='/components-checkbox' component={CheckboxComponent} />
        <Route path='/components-radio' component={RadioComponent} />
        <Route path='/hooks-dropdown' component={DropdownHook} />
        <Route path='/hooks-buttons' component={ButtonHook} />
        <Route path='/hooks-select' component={SelectHook} />
        <Route path='/hooks-checkbox' component={CheckboxHook} />
        <Route path='/hooks-radio' component={RadioHook} />
      </Switch>
    </div>
  )
}

export default Content
