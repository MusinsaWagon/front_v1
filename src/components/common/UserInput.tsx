import * as U from '@/styles/common/UserInput.styled';
import dropdown from '@/assets/images/dropdown.png';
import Dropdown from './Dropdown';
import { useState } from 'react';

interface UserInputProps {
  placeholder: string;
  label: string;
  type: string;
  list?: string[];
}

export default function UserInput({
  placeholder,
  label,
  type,
  list,
}: UserInputProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectContent, setSelectContent] = useState<string | undefined>('');
  const [firstClick, setFirstClick] = useState(false);

  const handleSelectClick = () => {
    setShowDropdown((state) => !state);
    setFirstClick(true);
  };

  return (
    <U.Container>
      <span>{label}</span>
      {type === 'input' ? (
        <input placeholder={placeholder}></input>
      ) : list ? (
        <U.SelectWrapper>
          <U.Select onClick={handleSelectClick}>
            <input placeholder={placeholder} value={selectContent} readOnly />
            <U.DropdownBtn
              src={dropdown}
              $rotate={showDropdown.toString()}
              $click={firstClick.toString()}
            />
          </U.Select>
          {showDropdown && (
            <Dropdown
              setSelected={setSelectContent}
              setShow={setShowDropdown}
              list={list}
            />
          )}
        </U.SelectWrapper>
      ) : (
        <U.CalendarWrapper></U.CalendarWrapper>
      )}
    </U.Container>
  );
}
