import { useState } from 'react';
import styled from 'styled-components';
import { requestNotificationPermission } from '../../firebase';

export default function AlarmToggle() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    requestNotificationPermission();
    setIsOn(!isOn);
  };

  return (
    <Container>
      <img src="/images/alarm.png" />
      <Label>가격 변동 알림 </Label>
      <ToggleSwitch $isOn={isOn} onClick={handleToggle}>
        <ToggleCircle $isOn={isOn} />
      </ToggleSwitch>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  color: #333;
`;

const Label = styled.span`
  font-size: 10px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
`;

const ToggleSwitch = styled.div<{ $isOn: boolean }>`
  width: 50px;
  height: 24px;
  border-radius: 12px;
  position: relative;
  cursor: pointer;
  background-color: ${(props) => (props.$isOn ? '#FFD700' : '#ccc')};
  transition: background-color 0.3s ease;
`;

const ToggleCircle = styled.div<{ $isOn: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  top: 2px;
  left: 2px;
  transform: ${(props) => (props.$isOn ? 'translateX(24px)' : 'translateX(0)')};
  transition: transform 0.3s ease;
`;
