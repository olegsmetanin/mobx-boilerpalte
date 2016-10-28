import {HTTPClient} from 'lib/http/HTTPClient'
import {AppState} from './AppAL/AppState'
import {UserMockService} from './AppAL/User/UserMockService'
import {UserActions} from './AppAL/User/UserActions'
import {SystemMockService} from './AppAL/System/SystemMockService'
import {SystemActions} from './AppAL/System/SystemActions'
import {hashHistory} from 'lib/router'
import {EventBus} from 'lib/eventBus/EventBus';

export function initAppContext(initState: any) {
  const eventBus = new EventBus()

  const httpClient = new HTTPClient()
  const history = hashHistory

  const appState = new AppState(initState)
  const userActions = new UserActions(appState, new UserMockService(httpClient))
  const systemActions = new SystemActions(appState, new SystemMockService(httpClient), history)

  return {
    eventBus,
    history,
    httpClient,
    appState,
    userActions,
    systemActions
  }
}



