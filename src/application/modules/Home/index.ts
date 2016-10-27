import {observer} from 'application/lib/Reactive'
import {withProps} from 'application/utils/withProps';
import {IAppState} from '../../AppAL/IAppState'
import {IUserActions} from '../../AppAL/User/IUserActions'
import {ISystemActions} from '../../AppAL/System/ISystemActions'

import {IHomeModule} from './IHomeModule'

import HomePage from './pages/HomePage'


// singleton )
let module: IHomeModule = null

const register = async ({
    appState,
    userActions,
    systemActions,
  }: {
    appState: IAppState,
    userActions: IUserActions,
    systemActions: ISystemActions,
  }) => {

  if (module) {
    return module
  }

  const ConnectedHomePage = observer(withProps(() => ({
      i18n: appState.i18n,
      layoutWidth: appState.layoutWidth,
      name: 'Home Page'
    })
  )(HomePage))

  const ConnectedRestrictedPage = observer(withProps(() => ({
      i18n: appState.i18n,
      layoutWidth: appState.layoutWidth,
      name: 'Restricted Page'
    })
  )(HomePage))


  module = {
    HomePage: ConnectedHomePage,
    RestrictedPage: ConnectedRestrictedPage
  }

  return module

}

export default register
