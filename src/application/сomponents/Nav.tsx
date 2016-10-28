import * as React from 'react'

import {observable} from 'lib/reactive'
import {Link, IRouter} from 'lib/router'
import {ISystemActions} from 'application/AppAL/System/ISystemActions'
import {IUser} from 'application/AppAL/User/IUser'
import {IUserActions} from 'application/AppAL/User/IUserActions'

export interface INavProps {
  router: IRouter
  route: any
  systemActions: ISystemActions
  user: IUser,
  userActions: IUserActions
}

export class Nav extends React.Component<INavProps, void> {

  sub1: HTMLElement

  @observable
  submenuOpened: number | any = null

  openSubMenu = (index) => {
    if (this.submenuOpened === index) {
      this.submenuOpened = null
    } else {
      this.submenuOpened = index
    }
  }

  closeSubMenu = () => {
    this.submenuOpened = null
  }

  componentDidMount() {
    // Not working ?
    // (this.props.router as any).setRouteLeaveHook(
    //   this.props.route,
    //   this.routerWillLeave
    // )
    (this.props.router as any).listenBefore(() => {
      this.closeSubMenu()
    })
  }

  render() {
    const {router, systemActions, user, userActions} = this.props
    return (
      <header className="header">
        <div className="navbar">
          <div className="navbar__item">
            <Link className={ 'logo ' + (router.isActive('/', true) ? 'active' : '')} to={'/'}>
            </Link>
          </div>
          <div className="navbar__item">
            <ul className={'main-menu'}>
              <li className={router.isActive('/', true) ? 'active' : ''}>
                <Link to={'/'}>Home</Link>
              </li>
              <li className={router.isActive('/restricted', true) ? 'active' : ''}>
                <Link to={'/restricted'}>Restricted</Link>
              </li>
              <li>
                Language:
                <button onClick={() => systemActions.setLang('de')}>de</button>
                <button onClick={() => systemActions.setLang('en')}>en</button>
              </li>
              <li>
                <div>
                  User: {JSON.stringify(user)}
                </div>
                <button onClick={() => userActions.setPermissions({v: 2})}>Change permissions</button>
              </li>
            </ul>
          </div>

          <div className="navbar__item pull-right">
            <div className="navbar-icons">
              <Link className="navbar-icons__item" to="">
                <span className="navbar-icons__icon">
                  <i className="icon icon-user"></i>
                </span>
              </Link>
              <Link className="navbar-icons__item" to="">
                <span className="navbar-icons__icon">
                  <i className="icon icon-notifications"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>

    )
  }
}

export default Nav