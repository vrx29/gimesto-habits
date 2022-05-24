import styled from "styled-components";

export function Input({ name, placeholder, type, value, onChange }) {
  return (
    <InputWrapper>
      <InputLabel htmlFor={name}>{name}</InputLabel>
      <InputField
        id={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InputLabel = styled.label`
  color: var(--COLOR-GRAY-600);
`;

const InputField = styled.input`
  margin-bottom: 1rem;
  height: 36px;
  width: 100%;
  padding: 0 0.5em;
  outline: none;
  border-radius: 4px;
  border: 1px solid var(--COLOR-GRAY-300);
  &:focus {
    border: 1px solid var(--COLOR-PRIMARY);
  }
`;
