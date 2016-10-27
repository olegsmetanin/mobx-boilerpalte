import {observable} from 'application/lib/reactive'
import {ContainerWidth} from 'components'
import {I18n} from 'application/api/i18n/I18n'
import {IAppState} from './IAppState'
import {IUser} from './User/IUser'
import {ISystem} from './System/ISystem'

export class AppState implements IAppState {

  constructor(state?: any) {
    if (state && state.layoutWidth) {
      this.layoutWidth = state.layoutWidth
    }
    if (state && state.user) {
      this.user = state.user
      this.userIsLoaded = true
    }
    if (state && state.system) {
      this.system = state.system
      this.systemIsLoaded = true
    }

  }

  @observable
  layoutWidth: ContainerWidth = ContainerWidth.lg

  @observable
  user: IUser

  @observable
  userIsLoaded: boolean = false

  @observable
  userError: any

  @observable
  system: ISystem

  @observable
  systemIsLoaded: boolean = false

  @observable
  i18n: I18n

  isDirty: boolean = false

}

export default AppState
