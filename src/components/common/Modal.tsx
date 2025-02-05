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
    }
  }, [showModal]);

  const handleClose = () => {
    setIsAnimating(false); // 닫힐 때 slideUp 애니메이션 실행
    setTimeout(() => setShowModal(false), 300); // 애니메이션 시간(0.3s) 후 모달 닫기
  };

  const customModalStyles: ReactModal.Styles = {
    overlay: {
      position: 'absolute',
      top: '0',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    content: {
      width: '360px',
      marginTop: '257px',
      height: '400px',
      position: 'relative',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '10px',
      boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.25)',
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      animation: isAnimating
        ? 'slideDown 0.3s ease-out'
        : 'slideUp 0.3s ease-out',
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
          shouldCloseOnOverlayClick={false}
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

      {/* 애니메이션 정의 */}
      <style>
        {`
          @keyframes slideDown {
            from {
              transform: translate(-50%, -100%);
            }
            to {
              transform: translate(-50%, -50%);
            }
          }

          @keyframes slideUp {
            from {
              transform: translate(-50%, -50%);
            }
            to {
              transform: translate(-50%, -150%);
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
