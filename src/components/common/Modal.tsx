import * as M from '@/styles/modal/Modal.styled';
import CloseBtn from '@/components/common/CloseBtn.tsx';
import Header from '@/components/common/Header.tsx';
import StepCard from './StepCard';
import {
  getHeaderInfo,
  steps,
  getInputInfos,
} from '../../hooks/modal/getModalInfo';
import UserInput from './UserInput';

interface ModalProps {
  type: string;
}

export default function Modal({ type }: ModalProps) {
  const headerInfo = getHeaderInfo(type);
  const inputInfo = getInputInfos(type);

  return (
    <M.Wrapper>
      <M.Content>
        <M.CloseBtnWrapper>
          <CloseBtn width="5.3%" ratio="1/1" />
        </M.CloseBtnWrapper>
        <Header
          src={headerInfo.imgSrc}
          title={headerInfo.title}
          description={headerInfo.description}
          bottom="9.5px"
        />
        <M.Steps>
          {steps(type).map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </M.Steps>
        <UserInput
          placeholder={inputInfo.placeholder}
          label={inputInfo.label}
          type={inputInfo.type}
        />
        <UserInput
          placeholder={inputInfo.placeholder2}
          label={inputInfo.label2}
          type={inputInfo.type2}
        />
      </M.Content>
    </M.Wrapper>
  );
}
