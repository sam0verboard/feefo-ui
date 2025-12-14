import { useState } from "react";
import "./App.css";
import RatingsWidget from "./components/RatingsWidget/RatingsWidget";
import RatingCountsInput from "./components/RatingCountsInput/RatingCountsInput";

function App() {
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
    <div className="App">
      <h1>Feefo UI Ratings Widget</h1>
      <RatingCountsInput
        ratingCounts={ratingCounts}
        handleChangeRating={handleChangeRating}
        handleChangeStars={handleChangeStars}
      />
      <h2>Drag to resize</h2>
      <div className="resizable">
        <RatingsWidget ratingCounts={ratingCounts} />
      </div>
    </div>
  );
}

export default App;
