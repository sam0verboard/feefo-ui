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
  postion: absolute;
  display: flex;
  flex-direction: row;
`;
const RatingCountsInputRows = styled.div`
  display: flex;
  flex-direction: column;
`;
const RatingCountsInputRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${myTheme.spacing.medium}em;
  input {
    width: 15em;
    padding: ${myTheme.spacing.smaller}em;
  }
  label {
    width: 4em;
    color: ${myTheme.colors.lighter};
    font-weight: ${myTheme.fonts.weights.bold};
  }
`;
const RatingCountsInputButtons = styled.div`
  display: flex;
  flex-direction: column;
`;
const RatingCountsInputButton = styled.button`
  margin-top: ${myTheme.spacing.smaller}em;
  color: ${myTheme.colors.lighter};
  font-weight: ${myTheme.fonts.weights.bold};
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover,
  &:focus {
    text-decoration: underline;
    outline: none;
  }
`;

const MAX_STARS = 10;
const MIN_STARS = 1;

const RatingCountsInput = ({
  ratingCounts,
  handleChangeRating,
  handleChangeStars,
}: RatingCountsInputProps) => {
  const maxRating = Math.max(...Array.from(ratingCounts.keys()));
  return (
    <RatingCountsInputContainer aria-label="Rating Counts Input">
      <RatingCountsInputRows>
        {Array.from(ratingCounts.keys())
          .sort((a, b) => a - b)
          .map((rating) => (
            <RatingCountsInputRow key={rating}>
              <label>{rating} star</label>
              <input
                type="number"
                min={0}
                value={ratingCounts.get(rating) || 0}
                onChange={(e) => handleChangeRating(rating, e.target.value)}
              />
            </RatingCountsInputRow>
          ))}
      </RatingCountsInputRows>
      <RatingCountsInputButtons>
        {maxRating < MAX_STARS && (
          <RatingCountsInputButton onClick={() => handleChangeStars(true)}>
            Add star
          </RatingCountsInputButton>
        )}
        {maxRating > MIN_STARS && (
          <RatingCountsInputButton onClick={() => handleChangeStars(false)}>
            Remove star
          </RatingCountsInputButton>
        )}
      </RatingCountsInputButtons>
    </RatingCountsInputContainer>
  );
};

RatingCountsInput.propTypes = {
  ratingCounts: PropTypes.instanceOf(Map).isRequired,
} as Record<string, any>;
export default RatingCountsInput;
