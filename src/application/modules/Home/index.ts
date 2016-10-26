import {observer} from 'lib/Reactive'
import {withProps} from 'generic/utils/withProps';
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

  const ConnectedHomePage = withProps(() => ({
      appState,
      name: 'Home Page'
    })
  )(observer(HomePage))

  const ConnectedRestrictedPage = withProps(() => ({
      appState,
      name: 'Restricted Page'
    })
  )(observer(HomePage))


  module = {
    HomePage: ConnectedHomePage,
    RestrictedPage: ConnectedRestrictedPage
  }

  return module

}

export default register
