<<<<<<< HEAD
import React from 'react';

const SettingsDashboard = () => {
  return (
    <div>
      <h1>SettingsDashboard</h1>
    </div>
  )
}

export default SettingsDashboard;
=======
import React from 'react'
import { Grid } from 'semantic-ui-react'
import { Switch, Route, Redirect } from 'react-router-dom'
import SettingsNav from './SettingsNav'
import AboutPage from './AboutPage'
import PhotosPage from './PhotosPage'
import AccountPage from './AccountPage'
import BasicPage from './BasicPage'

const SettingsDashboard = () => {
  return (
    <Grid>
      <Grid.Column width={12}>
        <Switch>
          <Redirect exact from='/settings' to='/settings/basic'/>
          <Route path='/settings/basic' component={BasicPage}/>
          <Route path='/settings/about' component={AboutPage}/>
          <Route path='/settings/photos' component={PhotosPage}/>
          <Route path='/settings/account' component={AccountPage}/>
        </Switch>
      </Grid.Column>
      <Grid.Column width={4}>
        <SettingsNav/>
      </Grid.Column>
    </Grid>
  )
}

export default SettingsDashboard
>>>>>>> 9c48282a432cf718555711c11c267dfa1f4eba63
