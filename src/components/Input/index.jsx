import styled from "styled-components";

export function Input({ name, placeholder, type }) {
  return (
    <InputWrapper>
      <InputLabel htmlFor={name}>{name}</InputLabel>
      <InputField id={name} placeholder={placeholder} type={type} />
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InputLabel = styled.label`
  color: #495057;
`;

const InputField = styled.input`
  margin-bottom: 1rem;
  height: 36px;
  width: 100%;
  padding: 0 0.5em;
  outline: none;
  border-radius: 4px;
  border: 1px solid #ced4da;
  &:focus {
    border: 1px solid #3554d1;
  }
`;
