
import {loadI18n} from 'application/utils/i18n/loadI18n'
import {ISystemState} from './ISystemState'
import {ISystemService} from './ISystemService'
import {ISystemActions} from './ISystemActions'
import {ContainerWidth} from 'components'

export class SystemActions implements ISystemActions {

  constructor(state: ISystemState,
              service: ISystemService, history: any) {
    this.state = state
    this.service = service
    this.history = history
  }

  state: ISystemState
  service: ISystemService
  history: any

  getSystem = async () => {
    let system = await this.service.getSystem()
    this.state.system = system
    this.state.systemIsLoaded = true
  }

  loadLang = async (_lang: string) => {
    const lang = ['en', 'de'].indexOf(_lang) !== -1 ? _lang : 'en'
    this.state.i18n = await loadI18n(require(`bundle?lazy!./../../i18n/i18n.all.${lang}.ts`))
  }

  setLang = async (lang: string) => {
    this.state.system.lang = lang
  }

  goto = async (location: any) => {
    this.history.push(location)
  }

  setDirty = (isDirty: boolean) => {
    this.state.isDirty = isDirty
  }

  setLayoutWidth = (layoutWidth: ContainerWidth) => {
    this.state.layoutWidth = layoutWidth
  }

}

export default SystemActions