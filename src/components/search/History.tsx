import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
interface Keyword {
  id: number;
  text: string;
}

interface HistoryProps {
  beforeKeywords: Keyword[];
  onRemoveKeyword: (id: number) => void;
  onClearKeywords: () => void;
  setIsSearchVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const History: React.FC<HistoryProps> = ({
  beforeKeywords,
  onRemoveKeyword,
  onClearKeywords,
  setIsSearchVisible,
}) => {
  const navigate = useNavigate();
  const moveToKeyword = (text: string) => {
    setIsSearchVisible(false);
    navigate(`/search/detail?keyword=${text}`);
  };

  return (
    <Container>
      <Top>
        <h1>최근검색어</h1> <button onClick={onClearKeywords}>모두 삭제</button>
      </Top>
      <KeywordList>
        {beforeKeywords.map(({ id, text }: Keyword) => (
          <Item key={id} onClick={() => moveToKeyword(text)}>
            {text}{' '}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onRemoveKeyword(id);
              }}
            >
              {'x'}
            </button>
          </Item>
        ))}
      </KeywordList>
    </Container>
  );
};

export default History;

const Container = styled.div`
  color: rgba(255, 255, 255, 0.4);
  padding: 10px 22px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
`;

const Top = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  * {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.4);
  }
  button {
    text-decoration: underline;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

const KeywordList = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  height: 25px;
  gap: 8px;
  padding: 10px 0;
`;

const Item = styled.span`
  font-size: 0.7rem;
  color: white;
  border-radius: 22px;
  background-color: #3c3c3c;
  padding: 5px 11px;
  margin: 2px;
  flex-shrink: 0;
  display: inline-flex;
  gap: 7px;
  align-items: center;
  justify-content: center;

  button {
    background-color: transparent;
    color: white;
  }
`;
