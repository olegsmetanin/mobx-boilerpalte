import {inject, observer} from 'application/lib/Reactive'
import {withRouter} from 'application/lib/Router'

import {Layout as BaseLayout} from './Layout'
import {Nav as BaseNav} from './Nav'
import {ConfirmDialog as BaseConfirmDialog} from './ConfirmDialog'
import {Dialog as BaseDialog} from './Dialog'
import {withProps} from 'application/utils/withProps'
export * from './PageLoader'

const injectAll = inject((allStatesAndActions) => allStatesAndActions)

const Dialog = BaseDialog

const ConfirmDialog = injectAll(
  observer(
    withProps((allStatesAndActions) => ({
        i18n: allStatesAndActions.appState.i18n,
        hideDialog: allStatesAndActions.systemActions.hideDialog,
        Dialog: Dialog
    }))(
      BaseConfirmDialog
    )
  )
)

const Layout = injectAll(
  withRouter(
    observer(
      withProps((allStatesAndActions) => {
        return ({
          layoutWidth: allStatesAndActions.appState.layoutWidth,
          onLayoutWidthChange: allStatesAndActions.systemActions.setLayoutWidth,
          dialog: allStatesAndActions.appState.dialog
        })
      })(
        BaseLayout
      )
    )
  )
)

const Nav = inject((allStatesAndActions) => ({
  systemActions: allStatesAndActions.systemActions,
  user: allStatesAndActions.appState.user,
  userActions: allStatesAndActions.userActions
}))(withRouter(observer(BaseNav)))

export {
  Layout,
  Nav,
  ConfirmDialog,
  Dialog,
}
