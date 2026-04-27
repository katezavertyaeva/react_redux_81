import styled from "@emotion/styled";

export const LoginFormComponent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 500px;
  padding: 30px;
  background: rgb(247, 247, 248);
  border: 2px solid rgb(29, 19, 53);
  border-radius: 12px;
`;

export const Title = styled.h2`
  font-size: 30px;
  color: rgb(29, 19, 53);
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Checkbox = styled.input``;

export const CheckboxLabel = styled.label`
  font-size: 18px;
`;

export const Error = styled.div`
  height: 18px;
  color: red;
`;