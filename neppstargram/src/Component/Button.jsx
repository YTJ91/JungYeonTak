import styled from "styled-components";

function Button({ text, width, bgcolor, color, type }) {
  return (
    <STyledButton width={width} bgcolor={bgcolor} color={color} type={type}>
      {text}
    </STyledButton>
  );
}

const STyledButton = styled.button`
  display: block;
  width: ${({ width }) => width || 200}px;

  background-color: ${({ theme, bgcolor }) =>
    bgcolor || theme.colors.main_color};

  color: ${({ color }) => color || "#fff"};
  outline: none;
  border: none;
  font-size: 0.7rem;
  padding: 4px 0;

  border-radius: 4px;

  & + & {
    margin-top: 3px;
  }
`;

export default Button;
