import styled from 'styled-components';
import { TiHome } from 'react-icons/ti';
import { CiHeart } from 'react-icons/ci';
import { PiExportFill } from 'react-icons/pi';
import { CiBellOn } from 'react-icons/ci';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineLogout } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

interface HamburgerModalProps {
  setIsFold: React.Dispatch<React.SetStateAction<boolean>>; // ✅ 상태 변경을 위한 타입
}

type IconItem = {
  Icon: React.FC;
  label: string;
  url: string;
};
const icons: IconItem[] = [
  { Icon: TiHome, label: '홈', url: '/' },
  { Icon: CiHeart, label: '찜', url: '/heartList' },
  { Icon: PiExportFill, label: '상품 등록', url: '/enroll' },
  { Icon: CiBellOn, label: '알림', url: '/enrollList' },
  { Icon: CgProfile, label: '마이페이지', url: '/myPage' },
];

const HamburgerModal = ({ setIsFold }: HamburgerModalProps) => {
  const navigate = useNavigate();

  const moveToPage = (url: string) => {
    setIsFold(true);
    navigate(url);
  };

  return (
    <Container>
      {icons.map(({ Icon, label, url }) => (
        <button onClick={() => moveToPage(url)}>
          <span>
            <Icon />
          </span>
          {label}
        </button>
      ))}
    </Container>
  );
};

export default HamburgerModal;

const Container = styled.div`
  width: 80px;
  background-color: aliceblue;
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translateY(100%);
  background-color: ${({ theme }) => theme.colors.black};
  span {
    font-size: 0.8rem;
    display: flex;
    align-items: center;
  }
  button {
    width: 100%;
    background-color: transparent;
    color: white;
    display: inline-block;
    display: flex;
    align-items: center;
    padding: 8px;
    font-size: 0.6rem;
    gap: 5px;
  }
`;
