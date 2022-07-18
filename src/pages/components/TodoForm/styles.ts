import styled, { css } from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

interface IStylesButton {
  colorButton: string
}

export const Button = styled.button<IStylesButton>`
  display: flex;
  flex-direction: row;
  align-items: center;

  background: ${(props) => (!props.colorButton ? 'red' : props.colorButton)};
  margin-left: 5px;

  border: none;
  border-radius: 4px;
  padding: 6px 12px 6px 12px;

  > svg {
    font-size: 20px;
    color: white;
  }

  &:hover {
    transition: background-color 0.3s;
    ${(props) =>
      props.colorButton && css`background ${shade(0.2, props.colorButton)}`};
  }
`
export const Input = styled.input`
  width: 90%;
  height: 40px;

  border-radius: 5px;
`

export const Table = styled.table`
  width: 100%;
`
