import * as M from '@/styles/modal/Modal.styled';
import CloseBtn from '@/components/common/CloseBtn.tsx';
import { getInputInfos } from '../../hooks/modal/getModalInfo';
import UserInput from './UserInput';
import HeaderSection from './HeaderSection';

interface ModalProps {
  type: string;
}

export default function Modal({ type }: ModalProps) {
  const inputInfo = getInputInfos(type);

  return (
    <M.Wrapper>
      <M.Content>
        <M.CloseBtnWrapper>
          <CloseBtn width="5.3%" ratio="1/1" />
        </M.CloseBtnWrapper>
        <HeaderSection type={type} />
        <UserInput
          placeholder={inputInfo.placeholder2}
          label={inputInfo.label2}
          type={inputInfo.type2}
        />
      </M.Content>
    </M.Wrapper>
  );
}
