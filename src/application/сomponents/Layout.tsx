import * as React from 'react'

import {Container, ContainerWidth} from 'components'
import {Nav} from './index'

export interface ILayoutProps {
  onLayoutWidthChange: (layoutWidth: ContainerWidth) => void
  layoutWidth: ContainerWidth
  dialog: any
  route: any
  router: any
}

export class Layout extends React.Component<ILayoutProps, void> {

  render() {
    let {route, layoutWidth, onLayoutWidthChange, dialog, children} = this.props
    return (
      <Container
        width={layoutWidth}
        onChangeWidth={(newLayoutWidth) => {onLayoutWidthChange(newLayoutWidth)}}
        className={'layout'}
      >
        <Nav route={route}/>
        {children}

        {dialog}

      </Container>
    )
  }
}

export default Layout
