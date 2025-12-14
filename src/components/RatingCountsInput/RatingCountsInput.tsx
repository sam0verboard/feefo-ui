import PropTypes from "prop-types";
import { styled } from "styled-components";
import { myTheme } from "../../theme";

/**
 * RatingCountsInput
 * Input component for editing rating counts.
 * @param ratingCounts - Map of rating values to their counts
 * @param handleChange - Function to handle changes to rating counts
 */

type RatingCountsInputProps = {
  ratingCounts: Map<number, number>;
  handleChangeRating: (rating: number, value: string) => void;
  handleChangeStars: (add: boolean) => void;
};

const RatingCountsInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const RatingCountsInputRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${myTheme.spacing.medium}em;
`;

const RatingCountsInput = ({
  ratingCounts,
  handleChangeRating,
  handleChangeStars,
}: RatingCountsInputProps) => {
  return (
    <RatingCountsInputContainer aria-label="Rating Counts Input">
      <button type="button" onClick={() => handleChangeStars(true)}>
        Add star
      </button>
      <button type="button" onClick={() => handleChangeStars(false)}>
        Remove star
      </button>
      {Array.from(ratingCounts.keys())
        .sort((a, b) => a - b)
        .map((rating) => (
          <RatingCountsInputRow key={rating}>
            <label>{rating} Star</label>
            <input
              type="number"
              min={0}
              value={ratingCounts.get(rating) || 0}
              onChange={(e) => handleChangeRating(rating, e.target.value)}
            />
          </RatingCountsInputRow>
        ))}
    </RatingCountsInputContainer>
  );
};

RatingCountsInput.propTypes = {
  ratingCounts: PropTypes.instanceOf(Map).isRequired,
} as Record<string, any>;
export default RatingCountsInput;
