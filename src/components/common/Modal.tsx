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
}

export default function Modal({
  msg,
  setShowModal,
  showModal,
  src,
  url,
}: ModalProps) {
  const navigate = useNavigate();

  const customModalStyles: ReactModal.Styles = {
    overlay: {
      position: 'absolute',
      top: '0',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    content: {
      width: '360px',
      marginTop: '297px',
      height: '67.62%',
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
      animation: 'slideDown 0.3s ease-out', // 애니메이션 추가
    },
  };

  return (
    <ModalWrapper>
      <ReactModal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        style={customModalStyles}
        ariaHideApp={false}
        contentLabel="Example Modal"
        shouldCloseOnOverlayClick={false}
      >
        <ModalImg src={src} alt="logo" />
        <ModalMsg>{msg}</ModalMsg>
        <Button
          msg="로그인하기"
          width="80.6%"
          borderRadius="100px"
          onClick={() => navigate(url)}
          aspectRatio="324/40"
        />
      </ReactModal>

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
        `}
      </style>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div``;
const ModalImg = styled.img`
  margin-top: 72px;
`;
const ModalMsg = styled.h2`
  color: #575757;
  font-size: 20px;
  font-weight: bold;
  margin-top: 55.59px;
  margin-bottom: 95px;
`;
