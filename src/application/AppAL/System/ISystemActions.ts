import {ContainerWidth} from 'components'

export interface ISystemActions {
  getSystem: () => Promise<void>
  loadLang: (lang) => Promise<void>
  setLang: (lang) => Promise<void>
  goto: (location: any) => Promise<void>
  setDirty: (isDirty: boolean) => void
  setLayoutWidth: (layoutWidth: ContainerWidth) => void
}

export default ISystemActions