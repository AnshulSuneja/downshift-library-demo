import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Dropdown from './Dropdown'
import Button from './Buttons'
import Select from './Select'
import Checkbox from './Checkbox'
import Radio from './Radio'

const DownshiftHooks = ({ match: { path } }) => {
  return (
    <Switch>
      <Route path={`${path}/dropdown`} component={Dropdown} />
      <Route path={`${path}/buttons`} component={Button} />
      <Route path={`${path}/select`} component={Select} />
      <Route path={`${path}/checkbox`} component={Checkbox} />
      <Route path={`${path}/radio`} component={Radio} />
    </Switch>
  )
}

export default DownshiftHooks
