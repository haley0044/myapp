import styled from "@emotion/styled";
import WebtoonCardRank from "./WebtoonCardRank";
import ChevronRightIcon from "./ChevronRightIcon";

const ListContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bgBase};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const TitleBar = styled.div`
  padding: ${({ theme }) => theme.spacing.sm};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const CardWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  overflow-x: auto;
  padding: ${({ theme }) => theme.spacing.sm};
`;

function RankList() {
  const webtoons = [
    { rank: 1, title: "화산귀환", imageSrc: "/img/ReturnoftheBlossomingBlade.jpg" },
    { rank: 2, title: "똑 닮은 딸", imageSrc: "/img/Daughter.jpg" },
    { rank: 3, title: "서울 자가에 대기업 다니는 김 부장 이야기", imageSrc: "/img/Kim.jpg" },
    { rank: 4, title: "마음의소리2", imageSrc: "/img/mind.jpg" },
    { rank: 5, title: "개같은 아빠", imageSrc: "/img/DogFather.jpg" },
  ];

  return (
    <ListContainer>
      <TitleBar>
        지금! 추천 웹툰 TOP 30
        <ChevronRightIcon />
      </TitleBar>
      <CardWrapper>
        {webtoons.map((webtoon) => (
          <WebtoonCardRank
            key={webtoon.rank}
            rank={webtoon.rank}
            title={webtoon.title}
            imageSrc={webtoon.imageSrc}
          />
        ))}
      </CardWrapper>
    </ListContainer>
  );
}

export default RankList;
