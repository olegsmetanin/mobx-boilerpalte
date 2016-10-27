import {observer} from 'application/lib/reactive'
import {withRouter} from 'application/lib/router'
import {NotFoundPage as BaseNotFoundPage} from './NotFoundPage'

const NotFoundPage = withRouter(observer(BaseNotFoundPage))

export default NotFoundPage