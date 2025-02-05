import styled from 'styled-components';
import { TiHome } from 'react-icons/ti';
import { CiHeart } from 'react-icons/ci';
import { PiExportFill } from 'react-icons/pi';
import { CiBellOn } from 'react-icons/ci';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineLogout } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

interface HamburgerModalProps {
  setIsFold: React.Dispatch<React.SetStateAction<boolean>>;
}

type IconItem = {
  Icon: React.FC;
  label: string;
  url?: string;
  action?: () => void;
};

const HamburgerModal = ({ setIsFold }: HamburgerModalProps) => {
  const navigate = useNavigate();
  const moveToPage = (url: string) => {
    setIsFold(true);
    navigate(url);
  };
  const handleLogout = () => {
    localStorage.removeItem('accessToken'); // ✅ accessToken 삭제
    localStorage.removeItem('fcmToken'); // ✅ fcmToken 삭제
    setIsFold(true); // ✅ 모달 닫기
    navigate('/login'); // ✅ 로그인 페이지로 이동 (필요 시 변경)
  };

  const icons: IconItem[] = [
    { Icon: TiHome, label: '홈', url: '/' },
    { Icon: CiHeart, label: '찜', url: '/heartList' },
    { Icon: PiExportFill, label: '상품 등록', url: '/enroll' },
    { Icon: CiBellOn, label: '알림', url: '/enrollList' },
    { Icon: CgProfile, label: '마이페이지', url: '/myPage' },
    { Icon: MdOutlineLogout, label: '로그아웃', action: handleLogout },
  ];

  return (
    <Container>
      {icons.map(({ Icon, label, url, action }, index) => (
        <button
          key={index}
          onClick={() => (action ? action() : moveToPage(url!))}
        >
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
