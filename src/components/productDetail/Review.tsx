import styled from 'styled-components';
import minibell from '../../assets/images/minibell.png';
import miniheart from '../../assets/images/miniheart.png';
import ministar from '../../assets/images/ministar.png';

interface ReviewProps {
  review: number[];
}

export default function Review({ review }: ReviewProps) {
  const icon = [ministar, miniheart, minibell];

  return (
    <ReviewContainer>
      {review.length > 1 &&
        review.map((_, index) => (
          <div key={index}>
            <img src={icon[index]} />
            <span>{review[index]}</span>
          </div>
        ))}
    </ReviewContainer>
  );
}

const ReviewContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;

  & > div {
    display: flex;
    align-items: center;
    gap: 4px;

    span {
      font-size: 8px;
      font-weight: 800;
      color: rgba(12, 12, 12, 0.8);
    }
  }
`;
