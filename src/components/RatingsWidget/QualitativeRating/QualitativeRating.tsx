import { memo } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { myTheme } from "../../../theme";
/**
 * QualitativeRating
 * Displays a short piece of qualitative description of a numeric rating.
 * @param rating - The numeric rating value
 * Examples:
 *  <QualitativeRating rating={5} />           // "Excellent"
 *  <QualitativeRating rating={4} />           // "Great"
 *  <QualitativeRating rating={3} />           // "Good"
 *  <QualitativeRating rating={2} />           // "Okay"
 *  <QualitativeRating rating={1} />           // "Poor"
 */

type QualitativeRatingProps = {
  averageRating: number;
  maxRating?: number;
  labels?: string[];
};

const QualitativeRatingContainer = styled.div`
  color: ${myTheme.colors.dark};
  text-transform: uppercase;
  letter-spacing: ${myTheme.fonts.spacing.wide}em;
  font-weight: ${myTheme.fonts.weights.regular};
  font-family: ${myTheme.fonts.family.primary};
  font-size: ${myTheme.fonts.size.large}em;
`;

const defaultLabels = ["Poor", "Okay", "Average", "Good", "Excellent"];

const getLabel = (
  averageRating: number,
  max: number,
  labels: string[]
): string => {
  if (labels.length === 0 || max <= 0) return "";

  const percentage = Math.min(Math.max(averageRating / max, 0), 1);

  const index = Math.min(
    labels.length - 1,
    Math.floor(percentage * labels.length)
  );

  return labels[index];
};

const QualitativeRating = ({
  averageRating,
  labels = defaultLabels,
  maxRating = defaultLabels.length,
}: QualitativeRatingProps) => {
  if (!isFinite(averageRating) || averageRating < 0 || labels.length <= 0) {
    return <span aria-label="No rating">-</span>;
  }

  const label = getLabel(averageRating, maxRating, labels);

  return (
    <QualitativeRatingContainer>
      <span
        aria-label={`Rating: ${averageRating} out of ${labels.length} (${label})`}
      >
        {label}
      </span>
    </QualitativeRatingContainer>
  );
};

QualitativeRating.propTypes = {
  averageRating: PropTypes.number.isRequired,
  maxRating: PropTypes.number,
  labels: PropTypes.arrayOf(PropTypes.string),
};

export default memo(QualitativeRating);
