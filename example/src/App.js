import React from 'react';

import {
  MonetizationStatus,
  ExclusiveContent
} from 'react-web-monetization-ui';

const textContent = (
  <>
    The answer to the ultimate question of life, the universe, and everything is{' '}
    <strong>42</strong>.
  </>
);

const App = () => {
  return (
    <>
      <MonetizationStatus />

      <hr />

      <ExclusiveContent>{textContent}</ExclusiveContent>

      <hr />

      <ExclusiveContent
        inactive={
          <>
            With <a href='https://coil.com'>a flat rate subscription</a>, you
            can support this site; get the answer to the ultimate question of
            life, the universe, and everything; and explore lots of other
            interesting Web Monetized content.
          </>
        }
      >
        {textContent}
      </ExclusiveContent>
    </>
  );
};

export default App;
