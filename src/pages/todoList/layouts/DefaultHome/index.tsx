import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'

export function DefaultHome() {
  return (
    <LayoutContainer>
      <Outlet />
    </LayoutContainer>
  )
}
