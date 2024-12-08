
import styled from "@emotion/styled";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100px;
  background-color: ${({ theme }) => theme.colors.bgBase};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

const CoverImage = styled.img`
  width: 100%;
  height: 130px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius};
  border-radius: 12px;
`;

const TitleRank = styled.div`
  margin-top: -8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.xs};
  gap: ${({ theme }) => theme.spacing.xs};
  width: 100%;
  box-sizing: border-box;
`;

const Rank = styled.div`
  font-size: 38px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-shadow: 1px 0 0 #fff, 0 1px 0 #fff, -1px 0 0 #fff, 0 -1px 0 #fff;
  line-height: 100%;
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 110%;
  white-space: nowrap; /* 텍스트 줄바꿈 방지 */
  overflow: hidden; /* 넘친 텍스트 숨김 */
  text-overflow: ellipsis; /* 말줄임표 추가 */
  width: 100%; /* 부모 컨테이너 너비에 맞게 설정 */
  text-align: left;
`;

function WebtoonCardRank({ rank, title, imageSrc }) {
  return (
    <Card>
      <CoverImage src={imageSrc} alt={title} />
      <TitleRank>
        <Rank>{rank}</Rank>
        <Title>{title}</Title>
      </TitleRank>
    </Card>
  );
}

export default WebtoonCardRank;
