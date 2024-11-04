import styled from 'styled-components';

interface StepProps {
  index: number;
  step: {
    title: string;
    description: string;
    src: string;
  };
}

export default function StepCard({ index, step }: StepProps) {
  return (
    <StepCardContainer key={index}>
      <img src={step.src} />
      <span>STEP {index + 1}</span>
      <span>{step.title}</span>
      <span>{step.description}</span>
    </StepCardContainer>
  );
}

const StepCardContainer = styled.div`
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
  border-radius: 9.14px;
  width: 30.16%;
  aspect-ratio: 108/91;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 10.99%;
    width: 12.96%;
    aspect-ratio: 1/1;
  }

  span {
    font-weight: bold;
  }

  span:nth-child(2) {
    margin-top: 7.69%;
    font-size: 8px;
    opacity: 0.8;
  }

  span:nth-child(3) {
    margin-top: 5.49%;
    font-size: 8px;
  }

  span:last-child {
    width: 70.37%;
    font-size: 6px;
    opacity: 0.5;
    margin-top: 7.69%;
  }
`;
