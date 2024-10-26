import styled from 'styled-components';

interface UserInputProps {
  placeholder: string;
  label: string;
  type: string;
}

export default function UserInput({
  placeholder,
  label,
  type,
}: UserInputProps) {
  return (
    <Container>
      <span>{label}</span>
      {type === 'input' ? (
        <input placeholder={placeholder}></input>
      ) : type === 'select' ? (
        <SelectWrapper></SelectWrapper>
      ) : (
        <CalendarWrapper></CalendarWrapper>
      )}
    </Container>
  );
}

const Container = styled.div`
  height: 9.73%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  span {
    font-size: 6px;
    line-height: 8px;
    letter-spacing: 0.24px;
    font-weight: bold;
    opacity: 0.5;
  }

  input {
    width: 100%;
    height: 69.44%;
  }
`;

const SelectWrapper = styled.div``;

const CalendarWrapper = styled.div``;
