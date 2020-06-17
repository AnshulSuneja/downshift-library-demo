import React from 'react'
import { Route, Switch } from 'react-router-dom'

import DownshiftComponents from '../../DownshiftComponents'
import DownshiftHooks from '../../DownshiftHooks'

import './Content.css'

const Content = () => {
  return (
    <div className='content'>
      <Switch>
        <Route path='/hooks' component={DownshiftHooks} />
        <Route path='/' component={DownshiftComponents} key={'main page'} />
      </Switch>
    </div>
  )
}

export default Content
