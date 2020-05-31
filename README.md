# react-web-monetization-ui

[![NPM](https://img.shields.io/npm/v/react-web-monetization-ui.svg)](https://www.npmjs.com/package/react-web-monetization-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This package provides _quick customizable UI components_ for common Web Monetization needs based on existing functionalities in [react-web-monetization](https://github.com/sharafian/react-web-monetization). As such, make sure you install it as well.

- [Introductory post on DEV](https://dev.to/ekafyi/published-my-first-react-component-library-react-web-monetization-ui-55ba)
- [CodeSandbox Demo](https://codesandbox.io/s/react-web-monetization-ui-examples-5r1ck)

If you already created UI components using the react-web-monetization hook or need specific functionalities (for example passing further props with the Web Monetization state boolean value), this package may not be of use to you.

## Install

```bash
# with npm
npm install --save react-web-monetization-ui react-web-monetization

# ...or with yarn
yarn add react-web-monetization-ui react-web-monetization
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

To enable Web Monetization, you have to add meta tag containing your payment pointer to the HTML `head` of your app template. Example from [Web Monetization Quick Start Guide](https://webmonetization.org/docs/getting-started):

```html
<head>
  <!-- title, other metadata, other content... -->
  <meta name="monetization" content="$wallet.example.com/your-uuid-here">
</head>
```

You can add the metadata in `public/index.html` in most React projects, or you can use libraries like [react-helmet](https://github.com/nfl/react-helmet). If you use libraries like Gatsby or Next, check their documentation to find the best place to add your metadata.

Currently this package consists of two components: `WebMonetizedStatus` and `WebMonetizedPaywall`.

### 1. WebMonetizedStatus

Display different content depending on whether user has Web Monetization enabled and running (= active) or not.

#### Usage

```js
import React from 'react';
import { WebMonetizedStatus } from 'react-web-monetization-ui';

const MyComponent = () => (
  <>    
    {/* Basic usage */}
    <WebMonetizedStatus />
    
    {/* Custom props */}
    <WebMonetizedStatus
      active='Web Monetization is active'
      inactive='Web Monetization is inactive'
    />
    <WebMonetizedStatus
      active={<strong>Web Monetization is active</strong>}
      inactive={<span>Web Monetization is not active</span>}
    />
  </>
);
```

- The outer element comes with CSS class name `rwmui-status` for quick styling as well as data attributes `data-web-monetization-status` (`0` if inactive, `1` if active) for styling or interacting with non-React JavaScript.
- By default, this component has `aria-live="polite"` attribute for accessibility, which you can override in the props.

#### Props

- **loading** (optional)
  - `string | element`
  - What to show while checking for Web Monetization status.
  - Default: `Loading...`
- **active** (optional)
  - `string | element`
  - What to show if Web Monetization is active (running).
  - Default: `💲 Web Monetization is active`
- **inactive** (optional)
  - `string | element`
  - What to show if Web Monetization is inactive (stopped, pending, not available).
  - Default: `Web Monetization is not active`

### 2. WebMonetizedPaywall

Display “paywall” content (eg. description and call-to-action)  users _without_ active Web Monetization. 

You most likely want to pair this with react-web-monetization’s `IfWebMonetized` component (which does the opposite: render exclusive content for web monetized users). Note that you don’t need to wrap the paywall component in `IfNotWebMonetized`.

#### Usage

```js
// This example uses WebMonetizedPaywall together with react-web-monetization's `IfWebMonetized` component
import React from 'react';
import { IfWebMonetized } from 'react-web-monetization';
import { WebMonetizedPaywall } from 'react-web-monetization-ui';

const MyComponent = () => (
  <>
    {/* Example 1 - basic */}
    <WebMonetizedPaywall />

    {/* Example 2 - custom props */}
    <WebMonetizedPaywall 
      title="Sorry, you cannot see this content"
      body="Want to know the answer to the ultimate question of life, the universe, and everything? Enable Web Monetization now."
    />
    
    {/* Example 3 - custom content as children */}
    <WebMonetizedPaywall>
      With <a href='https://coil.com'>a flat rate subscription</a>, you can support this site, get exclusive content, and explore lots of other interesting Web Monetized content.
    </WebMonetizedPaywall>

    {/* This is the content displayed to web monetized users */}
    <IfWebMonetized>
      The answer to the ultimate question of life, the universe, and everything is <strong>42</strong>.
    </IfWebMonetized>
  </>
);
```

- Comes with CSS class name `rwmui-paywall` for quick styling.
- By default, this component has `aria-live="polite"` attribute for accessibility, which you can override in the props.

#### Props

- **children**
  - `node`
  - Display content to non web monetized users. If this prop exists, it will be rendered instead of other props.
- **bgColor** (optional)
  - `string`
  - Background color of message to non web monetized users. Will be ignored if `children` is supplied.
  - Default: `hsla(0, 0%, 0%, 0.05)`
- **title** (optional)
  - `element`
  - Heading title of message to non web monetized users. Will be ignored if `children` is supplied.
  - Default: `⛔️ This content is available for web monetized users`
- **body** (optional)
  - `element`
  - Subtitle/body message to non web monetized users. Will be ignored if `children` is supplied.
  - Default: `<>Support this site to get access to this content and <em>all web monetized content everywhere on the internet</em> with strong privacy protection for USD 5 per month.</>`
- **cta** (optional)
  - `element`
  - Call-to-action link to non web monetized users. Will be ignored if `children` is supplied.
  - Default: `<a href='https://coil.com/' rel='external'>Enable with Coil</a>`

## License

MIT © [ekafyi](https://github.com/ekafyi)
