/**
 * Display "exclusive" content for users with web monetization
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useMonetizationState } from 'react-web-monetization';

const cssClassActive = 'rwmui-ec--monetized';
const cssClassInactive = 'rwmui-ec--not-monetized';

const ExclusiveContent = ({
  loading,
  inactive,
  inactiveTitle,
  inactiveSubtitle,
  inactiveBgColor,
  cta,
  children,
  ...props
}) => {
  const monetization = useMonetizationState();

  return (
    <React.Fragment>
      {monetization.state === 'pending' && loading}
      {monetization.state === 'started' && (
        <div
          aria-live='polite'
          className={`${cssClassActive} ${props.className || ''}`}
          {...props}
        >
          {children}
        </div>
      )}
      {(monetization.state === 'stopped' || !monetization.state) &&
      typeof inactive === 'undefined' ? (
        <React.Fragment>
          {(inactiveTitle || inactiveSubtitle || cta) && (
            <div
              className={`${cssClassInactive} ${props.className || ''}`}
              style={{ background: inactiveBgColor, padding: '1rem' }}
            >
              {inactiveTitle && <strong>{inactiveTitle}</strong>}
              {inactiveSubtitle && <p>{inactiveSubtitle}</p>}
              {cta || ''}
            </div>
          )}
        </React.Fragment>
      ) : (
        inactive
      )}
    </React.Fragment>
  );
};

export default ExclusiveContent;

// = = = =

const inactiveTitle = '⛔️ This content is for web monetized users only';
const inactiveSubtitle = (
  <React.Fragment>
    Support this site and get access to{' '}
    <em>all web monetized content everywhere on the internet</em> with strong
    privacy protection for USD 5 per month.
  </React.Fragment>
);
const cta = (
  <a href='https://coil.com/' rel='external'>
    Enable with Coil
  </a>
);

ExclusiveContent.defaultProps = {
  loading: 'Loading...',
  inactiveTitle: inactiveTitle,
  inactiveSubtitle: inactiveSubtitle,
  cta: cta,
  inactiveBgColor: 'hsla(0, 0%, 0%, 0.05)'
};

ExclusiveContent.propTypes = {
  /** What to display while loading monetization status. */
  loading: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** Display exclusive content to web monetized users. */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  /** Display to non web monetized users. If this prop exists, it will be rendered in place of `inactiveTitle`, `inactiveSubtitle`, and `cta`. */
  inactive: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** Heading title of message to non web monetized users. Will be ignored if `inactive` is supplied. */
  inactiveTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** Subtitle/body message to non web monetized users. Will be ignored if `inactive` is supplied. */
  inactiveSubtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** Background color of message to non web monetized users. Will be ignored if `inactive` is supplied. */
  inactiveBgColor: PropTypes.string,
  /** Call-to-action link to non web monetized users. Will be ignored if `inactive` is supplied. */
  cta: PropTypes.element
};
