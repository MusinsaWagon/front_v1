import { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface ModalProps {
  msg: string;
  setShowModal: (isShow: boolean) => void;
  showModal: boolean;
  src: string;
  url: string;
  btnMsg: string;
  closeBtn?: boolean;
}

export default function Modal({
  msg,
  setShowModal,
  showModal,
  src,
  url,
  btnMsg,
  closeBtn,
}: ModalProps) {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (showModal) {
      setIsAnimating(true); // 모달이 열릴 때 애니메이션 시작
      document.body.style.overflow = 'hidden'; // 스크롤 방지
    } else {
      document.body.style.overflow = 'auto'; // 모달 닫힐 때 스크롤 복구
    }

    return () => {
      document.body.style.overflow = 'auto'; // 컴포넌트 언마운트 시 복구
    };
  }, [showModal]);

  const handleClose = () => {
    setIsAnimating(false); // 닫힐 때 애니메이션 실행
    setTimeout(() => setShowModal(false), 300); // 애니메이션 시간(0.3s) 후 모달 닫기
  };

  const customModalStyles: ReactModal.Styles = {
    overlay: {
      position: 'fixed',
      zIndex: 100,
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'none', // 배경 클릭 방지
    },
    content: {
      width: '360px',
      position: 'fixed',
      top: 0, // 화면 맨 위에 위치
      left: '50%',
      transform: 'translateX(-50%)',
      borderRadius: '0 0 20px 20px',
      boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.25)',
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      pointerEvents: 'auto', // 모달 내부는 클릭 가능
      height: isAnimating ? '400px' : '0px', // 애니메이션을 통해 height가 점점 늘어나도록 설정
      animation: isAnimating
        ? 'expandHeight 0.3s ease-out forwards'
        : 'shrinkHeight 0.3s ease-in forwards',
    },
  };

  return (
    <ModalWrapper>
      {showModal && (
        <ReactModal
          isOpen={showModal}
          onRequestClose={handleClose}
          style={customModalStyles}
          ariaHideApp={false}
          contentLabel="Example Modal"
          shouldCloseOnOverlayClick={false} // 배경 터치 방지
        >
          <ModalImg src={src} alt="logo" />
          <ModalMsg>{msg}</ModalMsg>
          <Button
            msg={btnMsg}
            width="80.6%"
            borderRadius="100px"
            onClick={() => {
              if (url === '') window.location.reload();
              navigate(url);
            }}
            aspectRatio="324/40"
          />
          {closeBtn && (
            <Button
              msg="닫기"
              width="80.6%"
              borderRadius="100px"
              onClick={handleClose}
              aspectRatio="324/40"
              marginTop="20px"
              color="#e5e5e5"
            />
          )}
        </ReactModal>
      )}

      <style>
        {`
          @keyframes expandHeight {
            from {
              height: 0;
            }
            to {
              height: 400px;
            }
          }

          @keyframes shrinkHeight {
            from {
              height: 400px;
            }
            to {
              height: 0;
            }
          }
        `}
      </style>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div``;
const ModalImg = styled.img``;
const ModalMsg = styled.h2`
  color: #575757;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 35px;
`;
