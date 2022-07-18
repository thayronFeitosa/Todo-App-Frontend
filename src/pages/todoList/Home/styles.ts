import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme['gray-900']};
`

export const ContainerHome = styled.div`
  display: flex;
`
export const LayoutContainer = styled.div`
  height: calc(100vh -10rem);
  width: 900px;
  margin: 1rem auto;
  padding: 1rem;

  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;
`

export const ContainerForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 932px;
`
