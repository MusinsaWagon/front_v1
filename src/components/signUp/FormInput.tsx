import styled from 'styled-components';
import { UseFormRegister } from 'react-hook-form';
import Loading from '../common/Loading';

interface FormData {
  id: string;
  email: string;
  password: string;
  passwordCheck: string;
  authNumber: string;
}
interface FormInputProps {
  label: string;
  btnMsg?: string;
  placeholder: string;
  register: UseFormRegister<FormData>;
  name: keyof FormData;
  type: string;
  error: string | undefined;
  onClick?: () => void;
  errMsg?: string | undefined;
  checkMsg?: string | undefined;
  isValidated: boolean;
  sendLoading?: boolean;
}

export default function FormInput({
  label,
  btnMsg,
  placeholder,
  register,
  name,
  type,
  error,
  onClick,
  checkMsg,
  errMsg,
  isValidated,
  sendLoading,
}: FormInputProps) {
  return (
    <InputContainer>
      <InputLabel>
        <label>{label}</label>
        <CheckValid
          src={
            type !== 'password'
              ? checkMsg
                ? '/images/checked.png'
                : '/images/notCheck.png'
              : isValidated
              ? '/images/checked.png'
              : '/images/notCheck.png'
          }
          alt="Valid"
        />
      </InputLabel>
      <Input
        $error={!checkMsg ? !!error : !!errMsg}
        $disabled={!!checkMsg && !!btnMsg}
      >
        <input
          {...register(name)}
          type={type}
          placeholder={placeholder}
          disabled={!!checkMsg && type !== 'password'}
        />
        {btnMsg && (
          <button
            type="button"
            onClick={onClick}
            disabled={!isValidated || !!checkMsg}
          >
            {btnMsg}
          </button>
        )}
      </Input>
      <Message $error={!!error || !!errMsg}>
        {type !== 'password'
          ? error || checkMsg || errMsg
          : isValidated
          ? checkMsg
          : error}
      </Message>
      {sendLoading && <Loading />}
    </InputContainer>
  );
}

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const InputLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  label {
    font-size: 11px;
  }
`;

const CheckValid = styled.img``;

const Input = styled.div<{ $error?: boolean; $disabled: boolean }>`
  margin-top: 13px;
  width: 100%;
  height: 35px;
  display: flex;
  border-bottom: 1px solid
    ${({ theme, $error }) => ($error ? theme.colors.red : 'rgba(0, 0, 0, 0.5)')};
  border: ${({ $disabled }) => $disabled && 'none'};
  background-color: ${({ $disabled }) => ($disabled ? '#E9E9E9' : 'white')};

  input {
    padding-left: 3.94%;
    font-size: 12px;
    width: 80%;
    border: none;
    outline: none;

    &::placeholder {
      color: #dcdcdc;
    }

    &:disabled {
      box-shadow: 0 0 0px 1000px #e9e9e9 inset !important;
      cursor: not-allowed;
    }

    &:-webkit-autofill {
      box-shadow: 0 0 0px 1000px white inset;
    }
  }

  button {
    margin: 6px 4px;
    font-size: 8px;
    color: #8f8f8f;
    background-color: ${({ theme }) => theme.colors.yellow};
    width: 19.09%;
    aspect-ratio: 63/23;
    border-radius: 14px;

    &:disabled {
      background-color: #f5f5f5;
      cursor: not-allowed;
    }
  }
`;

const Message = styled.div<{ $error?: boolean }>`
  margin-top: 10px;
  font-size: 9px;
  color: ${({ theme, $error }) =>
    $error ? theme.colors.red : theme.colors.green};
  padding-left: 3.94%;
  text-align: left;
  height: 13px;
`;
