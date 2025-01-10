import styled, { css, keyframes } from 'styled-components';
import dropdown from '@/assets/images/dropdown.png';
import Dropdown from './Dropdown';
import { useState } from 'react';

export default function UserInput({
  placeholder,
  label,
  type,
  list,
  refer,
  selectContent,
  setSelectContent,
}: UserInputProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [firstClick, setFirstClick] = useState(false);

  const handleSelectClick = () => {
    setShowDropdown((state) => !state);
    setFirstClick(true);
  };

  return (
    <Container>
      <span>{label}</span>
      {type === 'input' ? (
        <input
          ref={refer}
          type={label === '원하는 최소 가격' ? 'number' : undefined}
          inputMode={label === '원하는 최소 가격' ? 'numeric' : undefined}
          placeholder={placeholder}
        ></input>
      ) : list ? (
        <SelectWrapper>
          <Select onClick={handleSelectClick}>
            <input placeholder={placeholder} value={selectContent} readOnly />
            <DropdownBtn
              src={dropdown}
              $rotate={showDropdown.toString()}
              $click={firstClick.toString()}
            />
          </Select>
          {showDropdown && setSelectContent && (
            <Dropdown
              setSelected={setSelectContent}
              setShow={setShowDropdown}
              list={list}
            />
          )}
        </SelectWrapper>
      ) : (
        <CalendarWrapper></CalendarWrapper>
      )}
    </Container>
  );
}

const Container = styled.div`
  height: 44px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  gap: 14.64% 0;

  span {
    font-size: 6px;
    line-height: 8px;
    letter-spacing: 0.24px;
    font-weight: bold;
    opacity: 0.5;
  }

  input {
    width: 100%;
    height: 68.18%;
    font-size: 8px;
    text-align: center;
    font-weight: bold;
    box-sizing: border-box;
    border: 1px solid #cfcfcf;
    border-radius: 2px;
  }
`;

const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 68.18%;
  box-sizing: border-box;
  width: 100%;
  align-items: center;
  border: 1px solid #cfcfcf;
  border-radius: 2px;

  input {
    height: 100%;
    border: none;
    outline: none;
    text-indent: 3%;
  }

  &:focus-within {
    border-color: #3498db;
  }
`;

const Select = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const rotateAnm = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(180deg);
  }
`;

const reverseRotate = keyframes`
  0% {
    transform: rotate(180deg);
  }
  50% {
    transform: rotate(-90deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const DropdownBtn = styled.img<{ $rotate: string; $click: string }>`
  position: relative;
  right: 3.05%;
  width: 3.25%;
  height: 22.33%;
  box-sizing: border-box;
  pointer-events: none;
  transform: ${({ $rotate }) =>
    $rotate === 'true' ? 'rotate(180deg)' : 'rotate(0deg)'};

  ${({ $rotate, $click }) =>
    $rotate === 'true'
      ? css`
          animation: ${rotateAnm} ease-in 0.8s;
        `
      : $click === 'true' &&
        css`
          animation: ${reverseRotate} ease-in 0.8s;
        `}
`;

const CalendarWrapper = styled.div``;

interface UserInputProps {
  placeholder: string;
  label: string;
  type: string;
  list?: string[];
  refer?: React.RefObject<HTMLInputElement>;
  selectContent?: string;
  setSelectContent?: (content: string) => void;
}
