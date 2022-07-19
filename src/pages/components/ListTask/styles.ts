import { shade } from 'polished'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 932px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;

  #complete {
    text-decoration: line-through;
    color: #777;
  }

  button {
    margin: 2px 3px 2px 3px;
  }

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

    border-radius: 5px;
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
      padding-left: 8px;
    }
  }

  .description {
    width: 765px;
  }
`

const STATUS_COLORS_BUTTON = {
  success: 'green-500',
  warning: 'yellow-500',
  danger: 'red-500',
  disabled: 'gray-300',
} as const

interface StatusPropsButton {
  statusColor: keyof typeof STATUS_COLORS_BUTTON
}

export const Button = styled.button<StatusPropsButton>`
  width: 40px;
  height: 40px;
  color: ${(props) => props.theme['gray-100']};
  border-radius: 5px;

  background: ${(props) =>
    props.theme[STATUS_COLORS_BUTTON[props.statusColor]]};

  &:hover {
    transition: background-color 0.5s;
    ${(props) =>
      css`background ${shade(
        0.2,
        props.theme[STATUS_COLORS_BUTTON[props.statusColor]],
      )}
    `};
  }
  svg {
    &:hover {
      transition: background-color 0.5s;
      ${(props) =>
        css`background ${shade(
          0.2,
          props.theme[STATUS_COLORS_BUTTON[props.statusColor]],
        )}
    `};
    }
    background: ${(props) =>
      props.theme[STATUS_COLORS_BUTTON[props.statusColor]]};
  }
`
