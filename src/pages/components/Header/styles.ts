import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;

  > nav {
    width: 100%;
    display: flex;

    > div {
      display: flex;
      flex-direction: row;
      > a {
        margin-right: 5px;
      }
    }

    justify-content: space-between;
    > a {
      margin-right: 5px;
    }
  }

  a {
    width: 100%;
    height: 3rem;

    > p {
      font-family: 'Roboto';
      font-size: 30px;
      margin-left: 5px;
    }

    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme['gray-400']};
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    text-decoration: none;

    &:hover {
      border-bottom: 3px solid ${(props) => props.theme.white};
    }

    &.active {
      color: ${(props) => props.theme.white};
    }
  }
`

export const LinkTokImage = styled.div`
  a {
    /* background: red; */
    margin-right: 15px;
    > p {
      font-family: 'Roboto', sans-serif;
      font-size: 1.4rem;
    }
  }
`
