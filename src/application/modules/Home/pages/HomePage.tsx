/* tslint:disable:no-unused-variable */
import * as React from 'react'
/* tslint:disable:no-unused-variable */

import {IAppState} from 'application/AppAL/IAppState'
import {ISystemActions} from 'application/AppAL/System/ISystemActions'

/**
 * Home page for app
 */

const HomePage = ({
    appState,
    name
  }: {
    appState: IAppState,
    name: string
  }) => (
    <div>
      <h1>{name}</h1>
      <div>Page width: {appState.layoutWidth}</div>
      <div> i18n app: {appState.i18n('app:title', {title: 'Title', count: 2})}</div>
      <div> i18n mod: {appState.i18n('module:title', {title: 'Title', count: 2})}</div>
    </div>
)

export default HomePage
