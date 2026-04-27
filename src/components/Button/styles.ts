import styled from "@emotion/styled";

interface MyButtonProps {
  $isDanger?: boolean;
}

export const MyButton = styled.button<MyButtonProps>`
  width: 100%;
  /* Потом можно удалить */
  height: 100px;
  padding: 20px;
  background-color: ${({ $isDanger }) =>
    $isDanger ? "rgb(116, 29, 32)" : "rgb(116, 29, 80)"};
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #270c20;
  }
`;
