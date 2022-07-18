import { CalendarCheck } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { HeaderContainer, LinkTokImage } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <LinkTokImage>
          <NavLink to="" title="Timer">
            <CalendarCheck size={24} />
            <p>TodoApp</p>
          </NavLink>
        </LinkTokImage>

        <div>
          <NavLink to="Trefas" title="Trefas">
            Trefas
          </NavLink>

          <NavLink to="Sobre" title="Sobre">
            Sobre
          </NavLink>
        </div>
      </nav>
    </HeaderContainer>
  )
}
