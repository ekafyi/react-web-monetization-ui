/**
 * Display content to users with NO web monetization
 */

import React from 'react';
import PropTypes from 'prop-types';
import { IfNotWebMonetized } from 'react-web-monetization';

const cssClass = 'rwmui-paywall';

const WebMonetizedPaywall = ({
  className,
  children,
  bgColor,
  title,
  body,
  cta,
  ...props
}) => {
  const defaultStyle = { background: bgColor, padding: '1rem' };
  return (
    <IfNotWebMonetized>
      {children || (
        <div
          aria-live='polite'
          className={`${cssClass} ${className || ''}`}
          style={
            typeof className === 'undefined'
              ? defaultStyle
              : props.style || undefined
          }
          {...props}
        >
          {title && <strong>{title}</strong>}
          {body && <p>{body}</p>}
          {cta || ''}
        </div>
      )}
    </IfNotWebMonetized>
  );
};

export default WebMonetizedPaywall;

// = = = =

const defaultTitle = (
  <React.Fragment>
    <span role='img' aria-label='no entry' style={{ marginRight: 4 }}>
      ⛔️
    </span>{' '}
    This content is available for web monetized users
  </React.Fragment>
);
const defaultBody = (
  <React.Fragment>
    Support this site to get access to this content and{' '}
    <em>all web monetized content everywhere on the internet</em> with strong
    privacy protection for USD 5 per month.
  </React.Fragment>
);
const defaultCta = (
  <a href='https://coil.com/' rel='external'>
    Enable with Coil
  </a>
);

WebMonetizedPaywall.defaultProps = {
  bgColor: 'hsla(0, 0%, 0%, 0.05)',
  title: defaultTitle,
  body: defaultBody,
  cta: defaultCta
};

WebMonetizedPaywall.propTypes = {
  /** Display content to non web monetized users. If this prop exists, it will be rendered instead of other props. */
  children: PropTypes.node,
  /** Background color of message to non web monetized users. Will be ignored if `children` is supplied. */
  bgColor: PropTypes.string,
  /** Heading title of message to non web monetized users. Will be ignored if `children` is supplied. */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** Subtitle/body message to non web monetized users. Will be ignored if `children` is supplied. */
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** Call-to-action link to non web monetized users. Will be ignored if `children` is supplied. */
  cta: PropTypes.element
};
