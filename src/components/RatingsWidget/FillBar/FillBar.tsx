import { styled } from "styled-components";
import { myTheme } from "../../../theme";
import PropTypes from "prop-types";
import { memo } from "react";

/**
 * FillBarComponent
 * Displays a filled bar representing a percentage.
 * @param percent - The percentage to fill the bar.
 */
const FillBar = styled.div<FillBarProps>`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: ${(props) => props.percent}%;
  background: ${myTheme.colors.orange};
`;
export const BarWrap = styled.div`
  flex: 1;
  height: ${myTheme.spacing.medium}em;
  border-radius: 0.2em;
  background: ${myTheme.colors.lighter};
  position: relative;
`;
type FillBarProps = {
  percent: number;
};
const FillBarComponent = ({ percent }: FillBarProps) => {
  return (
    <BarWrap aria-hidden>
      <FillBar aria-label={`${percent}%`} percent={percent} />
    </BarWrap>
  );
};
FillBarComponent.propTypes = {
  percent: PropTypes.number.isRequired,
};
export default memo(FillBarComponent);
