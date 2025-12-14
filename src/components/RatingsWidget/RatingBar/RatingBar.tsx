import { memo } from "react";
import { styled } from "styled-components";
import { myTheme } from "../../../theme";
import { ReactComponent as RatingIconWhite } from "../../../icons/feefo-star-white.svg";
import PropTypes from "prop-types";

/**
 * RatingBar
 * Visual representation of average rating using star icons.
 * @param averageRating - The average rating value
 * @param maxRating - The maximum possible rating value
 */
type RatingBarProps = {
  averageRating: number;
  maxRating: number;
};

type StarContainerProps = {
  fillpercent: number;
  size: number;
};

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RatingRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${myTheme.spacing.smallest}em;
`;

const StarContainer = styled.div<StarContainerProps>`
  width: ${(props) => props.size}em;
  height: ${(props) => props.size}em;
  border-radius: ${(props) => props.size / 5}em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    to right,
    ${myTheme.colors.orange} ${(props) => props.fillpercent}%,
    ${myTheme.colors.lighter} ${(props) => props.fillpercent}%
  );
  padding: ${myTheme.spacing.smaller}em;
`;

const RatingBarIcon = styled(RatingIconWhite)`
  width: 100%;
  height: 100%;
  color: ${myTheme.colors.lighter};
`;

const clamp = (v: number, a = 0, b = 100) => Math.max(a, Math.min(b, v));

const RatingBar = ({ averageRating, maxRating }: RatingBarProps) => {
  const MAX_STAR_SIZE_EM = 2;
  const STAR_SIZE_EM = Math.min(
    MAX_STAR_SIZE_EM,
    MAX_STAR_SIZE_EM * (5 / maxRating)
  );
  const stars = Math.max(0, Math.floor(maxRating));

  return (
    <RatingContainer
      role="img"
      aria-label={`Average rating ${averageRating} out of ${maxRating}`}
    >
      <RatingRow>
        {Array.from({ length: stars }, (_, index) => {
          const fillPercent = clamp((averageRating - index) * 100);

          return (
            <StarContainer
              key={index}
              size={STAR_SIZE_EM}
              fillpercent={fillPercent}
              data-testid={`rating-star-${index}-${fillPercent}`}
            >
              <RatingBarIcon />
            </StarContainer>
          );
        })}
      </RatingRow>
    </RatingContainer>
  );
};
RatingBar.propTypes = {
  averageRating: PropTypes.number.isRequired,
  maxRating: PropTypes.number.isRequired,
};
export default memo(RatingBar);
