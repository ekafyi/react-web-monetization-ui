/**
 * Display whether monetization is active (ie. payment is being sent) or not
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useMonetizationState } from 'react-web-monetization';

const cssClass = 'rwmui-status';

const WebMonetizedStatus = ({
  loading,
  active,
  inactive,
  className,
  ...props
}) => {
  const monetization = useMonetizationState();

  return (
    <div
      aria-live='polite'
      className={`${cssClass} ${className || ''}`}
      data-web-monetization-status={monetization.state === 'started' ? 1 : 0}
      {...props}
    >
      {monetization.state === 'pending' && loading}
      {monetization.state === 'started' && active}
      {(monetization.state === 'stopped' || !monetization.state) && inactive}
    </div>
  );
};

export default WebMonetizedStatus;

// ====

const defaultActive = (
  <React.Fragment>
    <span role='img' aria-label='dollar sign'>
      💲
    </span>{' '}
    Web Monetization is active
  </React.Fragment>
);
const defaultInactive = 'Web Monetization is not active';

WebMonetizedStatus.defaultProps = {
  loading: 'Loading...',
  active: defaultActive,
  inactive: defaultInactive
};

WebMonetizedStatus.propTypes = {
  /** What to display while loading monetization status. */
  loading: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** What to display when monetization is active. */
  active: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** What to display when monetization is inactive (stopped or not supported). */
  inactive: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};
