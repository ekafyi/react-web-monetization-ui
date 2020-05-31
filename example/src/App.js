import React from 'react';

import {
  MonetizationStatus,
  WebMonetizedPaywall
} from 'react-web-monetization-ui';

const App = () => {
  return (
    <>
      <MonetizationStatus />

      <hr />

      <WebMonetizedPaywall />

      <hr />

      <WebMonetizedPaywall>
        With <a href='https://coil.com'>a flat rate subscription</a>, you can
        support this site, get exclusive content, and explore lots of other
        interesting Web Monetized content.
      </WebMonetizedPaywall>
    </>
  );
};

export default App;
