import { useReducer } from 'react';
import { getFormInputs } from '../../constant/formInputs';
import FormInput from './FormInput';
import { AppDispatch, RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { setCode } from '../../store/signup/signupSlice';
import {
  UseFormWatch,
  UseFormRegister,
  FieldErrorsImpl,
} from 'react-hook-form';
import { FormData, InputAction } from '../../constant/signUpSchema';

interface UserInputProps {
  watch: UseFormWatch<FormData>;
  errors: FieldErrorsImpl<FormData>;
  register: UseFormRegister<FormData>;
}

interface InputState {
  checkId: {
    errMsg: string;
    checkMsg: string;
  };
  checkEmail: {
    errMsg: string;
    checkMsg: string;
    sendLoading: boolean;
  };
  checkCode: {
    errMsg: string;
    checkMsg: string;
  };
}

const inputReducer = (state: InputState, action: InputAction): InputState => {
  switch (action.type) {
    case 'SET_CHECK_ID':
      return { ...state, checkId: action.payload };
    case 'SET_CHECK_EMAIL':
      return { ...state, checkEmail: action.payload };
    case 'SET_CHECK_CODE':
      return { ...state, checkCode: action.payload };
    default:
      return state;
  }
};

export default function UserInputContainer({
  watch,
  errors,
  register,
}: UserInputProps) {
  const dispatch = useDispatch<AppDispatch>();
  const validateCode = useSelector(
    (state: RootState) => state.signup.validateCode
  );

  const dispatchCode = (code: number) => {
    dispatch(setCode(code));
  };

  const [state, localDispatch] = useReducer(inputReducer, {
    checkId: { errMsg: '', checkMsg: '' },
    checkEmail: { errMsg: '', checkMsg: '', sendLoading: false },
    checkCode: { errMsg: '', checkMsg: '' },
  });

  const formInputs = getFormInputs(
    watch,
    errors,
    state.checkId,
    localDispatch, // dispatch 함수 전달
    state.checkEmail,
    state.checkCode,
    dispatchCode,
    validateCode
  );

  return formInputs.map((inputProps, index) => (
    <FormInput key={index} register={register} {...inputProps} />
  ));
}
