import styled from 'styled-components'

export const Container = styled.div`
  width: 932px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;

  td,
  th {
    border: 1px solid ${(props) => props.theme['gray-800']};
    font-family: roboto;
    font-size: 20px;
  }

  table {
    width: 100%;
    align-items: center;
    background: ${(props) => props.theme['gray-500']};
  }

  thead {
    height: 32px;
    th {
    }
  }

  tbody {
    width: 30px;
    td {
      font-size: 18px;
      background: ${(props) => props.theme['gray-300']};
      color: ${(props) => props.theme['gray-900']};
    }
  }

  .description {
    width: 600px;
  }
`
