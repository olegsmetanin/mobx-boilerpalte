/* tslint:disable:no-unused-variable */
import * as React from 'react'
/* tslint:disable:no-unused-variable */

import {IAppState} from 'application/AppAL/IAppState'
import {ISystemActions} from 'application/AppAL/System/ISystemActions'
import {I18n} from 'generic'
/**
 * Home page for app
 */

const HomePage = ({
    i18n,
    layoutWidth,
    name
  }: {
    i18n: I18n,
    layoutWidth: any,
    name: string
  }) => (
    <div>
      <h1>{name}</h1>
      <div>Page width: {layoutWidth}</div>
      <div> i18n app: {i18n('app:title', {title: 'Title', count: 2})}</div>
      <div> i18n mod: {i18n('module:title', {title: 'Title', count: 2})}</div>
    </div>
)

export default HomePage
