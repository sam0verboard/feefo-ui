import { useState } from "react";
import RatingsWidget from "./components/RatingsWidget/RatingsWidget";
import RatingCountsInput from "./components/RatingCountsInput/RatingCountsInput";
import { styled } from "styled-components";
import { myTheme } from "./theme";

function App() {
  const AppContainer = styled.div`
    background-color: ${myTheme.colors.dark};
    min-height: 100vh;
    display: flex;
  `;

  const InputPanel = styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    width: 25vw;
    height: 100vh;
    padding: 1.5rem;
    background-color: ${myTheme.colors.medium};
    overflow-y: auto;
    text-align: center;
  `;

  const WidgetPanel = styled.main`
    margin-left: 25vw;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const Resizable = styled.div`
    resize: both;
    overflow: auto;
    border: 2px dashed ${myTheme.colors.lighter};
    padding: ${myTheme.spacing.medium}em;
    width: 20vw;
    height: 30vw;
  `;

  /* Typography */
  const Heading = styled.h1`
    color: ${myTheme.colors.lighter};
  `;

  const SubHeading = styled.h2`
    color: ${myTheme.colors.lighter};
    margin-bottom: ${myTheme.spacing.small}em;
  `;

  const [ratingCounts, setRatingCounts] = useState<Map<number, number>>(
    new Map([
      [5, 952],
      [4, 171],
      [3, 55],
      [2, 14],
      [1, 40],
    ])
  );
  const handleChangeRating = (rating: number, value: string) => {
    const num = parseInt(value, 10) || 0;
    setRatingCounts(new Map(ratingCounts.set(rating, num)));
  };

  const handleChangeStars = (add: boolean) => {
    if (add) {
      const maxRating = Math.max(...Array.from(ratingCounts.keys()));
      if (maxRating >= 10) return; // limit max stars to 10
      setRatingCounts(new Map(ratingCounts.set(maxRating + 1, 0)));
    } else {
      const maxRating = Math.max(...Array.from(ratingCounts.keys()));
      if (maxRating === 1) return; // limit min stars to 1
      ratingCounts.delete(maxRating);
      setRatingCounts(new Map(ratingCounts));
    }
  };

  return (
    <AppContainer>
      <InputPanel>
        <SubHeading>Edit ratings here</SubHeading>
        <RatingCountsInput
          ratingCounts={ratingCounts}
          handleChangeRating={handleChangeRating}
          handleChangeStars={handleChangeStars}
        />
      </InputPanel>

      <WidgetPanel>
        <Heading>Feefo UI Ratings Widget</Heading>
        <SubHeading>Drag to resize</SubHeading>
        <Resizable>
          <RatingsWidget ratingCounts={ratingCounts} />
        </Resizable>
      </WidgetPanel>
    </AppContainer>
  );
}

export default App;
