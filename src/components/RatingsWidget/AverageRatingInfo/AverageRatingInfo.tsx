import { memo } from "react";
import QualitativeRating from "../QualitativeRating/QualitativeRating";
import RatingBar from "../RatingBar/RatingBar";
import RatingsWidgetTitle from "../RatingsWidgetTitle/RatingsWidgetTitle";
import RatingText from "../RatingText/RatingText";
import { styled } from "styled-components";
import { myTheme } from "../../../theme";
import PropTypes from "prop-types";

/**
 * AverageRatingInfo
 * Wrapper for average rating related components.
 * @param averageRating - The average rating value
 * @param maxRating - The maximum possible rating value
 */
type AverageRatingInfoProps = {
  averageRating: number;
  maxRating: number;
};

const AverageRatingInfoContainer = styled.div`
  padding: ${myTheme.spacing.medium}em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${myTheme.spacing.medium}em;
`;

const AverageRatingInfo = ({
  averageRating,
  maxRating,
}: AverageRatingInfoProps) => {
  return (
    <AverageRatingInfoContainer>
      <QualitativeRating averageRating={averageRating} maxRating={maxRating} />
      <RatingBar averageRating={averageRating} maxRating={maxRating} />
      <RatingText averageRating={averageRating} maxRating={maxRating} />
      <RatingsWidgetTitle />
    </AverageRatingInfoContainer>
  );
};

AverageRatingInfo.propTypes = {
  averageRating: PropTypes.number.isRequired,
  maxRating: PropTypes.number.isRequired,
};
export default memo(AverageRatingInfo);
