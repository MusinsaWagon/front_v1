import styled from 'styled-components';
import icon from '../../assets/images/inquiryIcon.png';
import { COLORS } from '../../constant/theme';
const Inquiry = () => {
  return (
    <Btn>
      <Img src={icon} />
    </Btn>
  );
};

const Btn = styled.button`
  height: 34.44px;
  width: 34.44px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.5);
  position: sticky;
  bottom: 80px;
  left: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.white};
`;
const Img = styled.img`
  height: 18.29px;
  width: 21.97px;
  background-color: transparent;
`;
export default Inquiry;
