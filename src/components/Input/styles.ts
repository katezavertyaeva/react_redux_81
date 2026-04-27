import styled from "@emotion/styled";

export const InputComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 18px;
  color: rgb(48, 21, 109);
`;

export const InputElement = styled.input`
  width: 100%;
  padding: 12px;
  border: 2px solid rgb(48, 21, 109);
  border-radius: 8px;
  font-size: 18px;
  outline: none;

  &::placeholder {
    color: rgb(121, 84, 206);
  }
`;

export const Error = styled.div`
  height: 18px;
  color: red;
`;
