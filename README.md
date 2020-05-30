# react-web-monetization-ui

[![NPM](https://img.shields.io/npm/v/react-web-monetization-ui.svg)](https://www.npmjs.com/package/react-web-monetization-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This package provides _quick, simple UI components_ based on existing functionalities in [react-web-monetization](https://github.com/sharafian/react-web-monetization).

If you are already using react-web-monetization and/or needing more advanced functionalities, this package may not be suitable for you.

## Install

```bash
# with npm
npm install --save react-web-monetization-ui

# ...or with yarn
yarn add react-web-monetization-ui
```

Run example with create-react-app:

```bash
git clone https://github.com/ekafyi/react-web-monetization-ui
cd react-web-monetization-ui/example
npm install # or yarn
npm start # or yarn start

# The web app will run at http://localhost:3000
```

## Usage

⚠️ __Important:__ To enable Web Monetization, you have to add meta tag containing your payment pointer to your React app yourself. Basic example from [Web Monetization Quick Start Guide](https://webmonetization.org/docs/getting-started):

```html
<meta
  name="monetization"
  content="$wallet.example.com/alice">
```

Currently this package consists of two components: `MonetizationStatus` and `ExclusiveContent`.

### 1. MonetizationStatus

Display UI based on user's Web Monetization status.

#### Usage

```jsx
import React from 'react';
import { MonetizationStatus } from 'react-web-monetization-ui';

const MyComponent = () => (
  <>
    <div>Some other content...</div>
    
    {/* Example 1 - use default props */}
    <MonetizationStatus />
    
    {/* Example 2 - string props */}
    <MonetizationStatus
      active='Web Monetization is active'
      inactive='Web Monetization is inactive'
    />
    
    {/* Example 3 - element props */}
    <MonetizationStatus
      active={<strong>Web Monetization is active</strong>}
      inactive={<spam>Web Monetization is not active</spam>}
    />
  </>
);
```

- Comes with CSS class names for quick styling: `rwmui-ms`, `rwmui-ms--monetized`, and `rwmui-ms--not-monetized`.
- By default, this component has `aria-live="polite"` attribute for accessibility, which you can override in the props.

#### Props

- **loading** (optional)
  - `string | element`
  - What to show while checking for Web Monetization status.
  - Default: `Loading...`
- **active** (optional)
  - `string | element`
  - What to show if Web Monetization is active (running).
- **inactive** (optional)
  - `string | element`
  - What to show if Web Monetization is inactive (stopped, pending, not available).

Default value of `active`:

```jsx
<React.Fragment>
  <span role='img' aria-label='money mouth face'>🤑</span>{' '}
  Monetization is active
</React.Fragment>
```

Default value of `inactive`:

```jsx
<React.Fragment>
  <span role='img' aria-label='sad pensive face'>😔</span>{' '}
  Monetization is not active
</React.Fragment>
```

### 2. ExclusiveContent

Render content only to users with Web Monetization enabled/active with optional customizable call-to-action for users without Web Monetization in one single component.

#### Usage

```jsx
import React from 'react';
import { ExclusiveContent } from 'react-web-monetization-ui';

const MyComponent = () => (
  <>
    <div>Some other content...</div>
    
    {/* Example 1 - use default props */}
    <ExclusiveContent>
      The answer to the ultimate question of life, the universe, and everything is <strong>42</strong>.
    </ExclusiveContent>
    
    {/* Example 2 - custom call to action */}
    <ExclusiveContent
      inactive={
        <>
          With <a href='https://coil.com'>a flat rate subscription</a>, you can
          support this site; get the answer to the ultimate question of life,
          the universe, and everything; and explore lots of other interesting
          Web Monetized content.
        </>
      }
    >
      The answer to the ultimate question of life, the universe, and everything is <strong>42</strong>.
    </ExclusiveContent>
  </>
);
```

- Comes with CSS class names for quick styling: `rwmui-ec--monetized` and `rwmui-ec--not-monetized`.
- By default, this component has `aria-live="polite"` attribute for accessibility, which you can override in the props.

#### Props

- **children**
  - `element`
  - The "exclusive" content shown only to users with Web Monetization
- **loading** (optional)
  - `string | element`
  - What to show while checking for Web Monetization status.
  - Default: `Loading...`
- **active** (optional)
  - `string | element`
  - What to show if Web Monetization is active (running).
- **inactive** (optional)
  - `string | element`
  - What to show to non web monetized users. If this prop exists, it will be rendered in place of `inactiveTitle`, `inactiveSubtitle`, and `cta`.
- **inactiveTitle** (optional)
  - `element`
  - Heading title of message to non web monetized users. Will be ignored if `inactive` is supplied.
  - Default: `⛔️ This content is for web monetized users only`
- **inactiveSubtitle** (optional)
  - `element`
  - Subtitle/body message to non web monetized users. Will be ignored if `inactive` is supplied.
  - Default: `<>Support this site and get access to <em>all web monetized content everywhere on the internet</em> with strong privacy protection for USD 5 per month.</>`
- **inactiveBgColor** (optional)
  - `string`
  - Background color of message to non web monetized users. Will be ignored if `inactive` is supplied.
  - Default: `hsla(0, 0%, 0%, 0.05)`
- **cta** (optional)
  - `element`
  - Call-to-action link to non web monetized users. Will be ignored if `inactive` is supplied.
  - Default: `<a href='https://coil.com/' rel='external'>Enable with Coil</a>`

## License

MIT © [ekafyi](https://github.com/ekafyi)
