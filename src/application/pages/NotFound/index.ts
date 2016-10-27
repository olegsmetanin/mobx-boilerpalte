import {observer} from 'application/lib/Reactive'
import {withRouter} from 'application/lib/Router'
import {NotFoundPage as BaseNotFoundPage} from './NotFoundPage'

const NotFoundPage = withRouter(observer(BaseNotFoundPage))

export default NotFoundPage