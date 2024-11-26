import styled from 'styled-components';
import { UseFormRegister } from 'react-hook-form';

interface FormData {
  id: string;
  email: string;
  password: string;
  passwordCheck: string;
  authNumber: string;
}
interface InputWrapperProps {
  label: string;
  btnMsg?: string;
  placeholder: string;
  register: UseFormRegister<FormData>;
  name: keyof FormData;
  type: string;
  error: string | undefined;
  onClick?: () => void;
}

export default function InputWrapper({
  label,
  btnMsg,
  placeholder,
  register,
  name,
  type,
  error,
  onClick,
}: InputWrapperProps) {
  return (
    <InputContainer>
      <InputLabel>
        <label>{label}</label>
        <CheckValid src="/images/notCheck.png" />
      </InputLabel>
      <Input>
        <input {...register(name)} type={type} placeholder={placeholder} />
        {btnMsg && (
          <button type="button" onClick={onClick}>
            {btnMsg}
          </button>
        )}
      </Input>
      <Message>{error}</Message>
    </InputContainer>
  );
}

const InputContainer = styled.div`
  width: 100%;
  gap: 13px 0;
  display: flex;
  flex-direction: column;
`;

const InputLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const CheckValid = styled.img``;

const Input = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  padding-bottom: 6px;

  input {
    padding-left: 3.94%;
    font-size: 2.74vw;
    width: 80%;
    border: none;
    outline: none;

    &::placeholder {
      color: #dcdcdc;
    }
  }

  button {
    font-size: 1.99vw;
    color: #8f8f8f;
    background-color: ${({ theme }) => theme.colors.yellow};
    width: 19.09%;
    aspect-ratio: 63/23;
    border-radius: 14px;
  }
`;

const Message = styled.div`
  font-size: 2.24vw;
  color: ${({ theme }) => theme.colors.red};
  padding-left: 3.94%;
  text-align: left;
`;
