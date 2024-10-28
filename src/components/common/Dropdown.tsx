import styled, { keyframes } from 'styled-components';

interface DropdownProps {
  list: string[];
  setSelected: (item: string) => void;
  setShow: (boolean: boolean) => void;
}

export default function Dropdown({
  list,
  setSelected,
  setShow,
}: DropdownProps) {
  return (
    <DropDownWrapper>
      {list.length > 0 &&
        list.map((item, index) => (
          <Menu
            key={index}
            onMouseDown={() => {
              setSelected(item);
              setShow(false);
            }}
          >
            <span>{item}</span>
          </Menu>
        ))}
    </DropDownWrapper>
  );
}

const drop = keyframes`
  from {
    max-height: 0;
    transform: translateY(-25px);
  }
  to {
    max-height: 500px;
    transform: translateY(0);
  }
`;

const DropDownWrapper = styled.div`
  position: absolute;
  top: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #cfcfcf;
  width: 100%;
  background-color: white;
  border-radius: 2px;
  z-index: 5;
  padding: 5px 0;
  animation: ${drop} ease-in-out 0.3s;
`;

const Menu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0;

  span {
    font-size: 8px;
  }
`;
