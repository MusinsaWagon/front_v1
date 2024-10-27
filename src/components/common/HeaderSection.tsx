import styled from 'styled-components';
import Header from './Header';
import { getHeaderInfo, steps } from '../../hooks/modal/getModalInfo';
import StepCard from './StepCard';

interface HS_Props {
  type: string;
}

export default function HeaderSection({ type }: HS_Props) {
  const headerInfo = getHeaderInfo(type);

  return (
    <>
      <Header
        src={headerInfo.imgSrc}
        title={headerInfo.title}
        description={headerInfo.description}
        bottom={type === 'notification' ? '9.5px' : undefined}
      />
      <Steps>
        {steps(type).map((step, index) => (
          <StepCard key={index} step={step} index={index} />
        ))}
      </Steps>
    </>
  );
}

const Steps = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 7.56%;
`;
