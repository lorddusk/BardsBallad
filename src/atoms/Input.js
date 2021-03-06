import styled, { css } from 'styled-components';

const Input = styled.input`
  width: ${props => props.width || '250px'};
  height: ${props => props.height || '30px'};
  margin: ${props => props.margin || 0};
  padding: ${props => props.padding || 0};
  background: rgba(230, 230, 230, 0.8);
  border: none;
  outline: 1px solid ${props => props.theme.almostblack};
  ${props => !props.noAlign && css` text-align: ${props => props.align || 'left'}; `}
`

export default Input;