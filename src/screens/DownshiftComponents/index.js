import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Dropdown from './Dropdown'
import Button from './Buttons'
import Select from './Select'
import Checkbox from './Checkbox'
import Radio from './Radio'

const DownshiftComponents = ({ match: { path } }) => {
  return (
    <Switch>
      <Route exact path={path} component={Dropdown} />
      <Route path={'/components/buttons'} component={Button} />
      <Route path={'/components/select'} component={Select} />
      <Route path={'/components/checkbox'} component={Checkbox} />
      <Route path={'/components/radio'} component={Radio} />
    </Switch>
  )
}

export default DownshiftComponents
