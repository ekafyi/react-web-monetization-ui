/**
 * Display whether monetization is active (ie. payment is being sent) or not
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useMonetizationState } from 'react-web-monetization';

const cssClass = 'rwmui-ms';
const cssClassActive = 'rwmui-ms--monetized';
const cssClassInactive = 'rwmui-ms--not-monetized';

const MonetizationStatus = ({
  loading,
  active,
  inactive,
  className,
  ...props
}) => {
  const monetization = useMonetizationState();

  const cssClassMerged = `${cssClass} ${className || ''} ${
    monetization.state === 'started' ? cssClassActive : ''
  } ${
    monetization.state === 'stopped' || !monetization.state
      ? cssClassInactive
      : ''
  }`;

  return (
    <div aria-live='polite' className={cssClassMerged} {...props}>
      {monetization.state === 'pending' && loading}
      {monetization.state === 'started' && active}
      {(monetization.state === 'stopped' || !monetization.state) && inactive}
    </div>
  );
};

export default MonetizationStatus;

// ====

const defaultActive = (
  <React.Fragment>
    <span role='img' aria-label='dollar sign'>💲</span>{' '}
    Web Monetization is active
  </React.Fragment>
);
const defaultInactive = 'Web Monetization is not active';

MonetizationStatus.defaultProps = {
  loading: 'Loading...',
  active: defaultActive,
  inactive: defaultInactive
};

MonetizationStatus.propTypes = {
  /** What to display while loading monetization status. */
  loading: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** What to display when monetization is active. */
  active: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** What to display when monetization is inactive (stopped or not supported). */
  inactive: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};
