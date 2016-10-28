import {ISystem} from './ISystem'
import {ContainerWidth} from 'components'
import {I18n} from 'api/i18n/I18n'

export interface ISystemState {
  system: ISystem
  systemIsLoaded: boolean
  i18n: I18n
  layoutWidth: ContainerWidth
  isDirty: boolean
}

export default ISystemState