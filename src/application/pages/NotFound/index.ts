import {observer} from 'lib/reactive'
import {withRouter} from 'lib/router'
import {NotFoundPage as BaseNotFoundPage} from './NotFoundPage'

const NotFoundPage = withRouter(observer(BaseNotFoundPage))

export default NotFoundPage