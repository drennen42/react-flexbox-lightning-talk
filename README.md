# Reusable React Components and Flex-box

## Setup:
- [ ] `> npm install -g create-react-app`
- [ ] `> create-react-app [app-name]`

 _The next 3 steps can be found in the README.md that is generated from running create-react-app_
- [ ] `> npm install -S node-sass-chokidar npm-run-all`
- [ ] Optional - To watch for changes in stylesheets: In package.json update 'scripts' block to look like:
```
"scripts": {
  "build-css": "node-sass-chokidar src/ -o src/",
  "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive",
  "start-js": "react-scripts start",
  "start": "npm-run-all -p watch-css start-js",
  "build-js": "react-scripts build",
  "build": "npm-run-all build-css build-js",
  "test": "react-scripts test --env=jsdom",
  "eject": "react-scripts eject"
}
```
- [ ] `> npm install`

## Let's Get _**Started**_
___
- [ ] Open in favorite editor, mine is Atom so: `> atom .`
- [ ] `> cd src`
- [ ] `> touch sampleHotels.js`
- [ ] `> mkdir components && cd components`
- [ ] `> mkdir HotelCard && cd HotelCard`
- [ ] `> touch HotelCard.jsx && touch HotelCard.scss`
- [ ] `> npm start`

_This will open your default browser and go to localhost:3000. You will see the generic React header with some instructions_

>  For this example, I want to make a collection of 'Hotel Cards' and display them nicely using flexbox.  (Think DLPs and/or promo pages)

#### What we need:
- [ ] A HotelCard JSX component
- [ ] A page with a container to hold the HotelCards
- [ ] Some sample data to be held in the `state` object
- [ ] Some small functions to:
 - [ ] Load the data into `state`
 - [ ] Use the state to render the HotelCards
- [ ] Display all the HotelCards nicely using _**Flex-box**_

## Do Coding
___
#### Make a HotelCard component:

- [ ] Open `src/HotelCard/HotelCard.jsx`
- [ ] Import React and React Component with `import React, { Component } from react;`
- [ ] While we're there, also import our stylesheet with `import './HotelCard.css';`
  _Yes, I realize that it doesn't exist yet! Patience!_
- [ ] Every react component needs to extend from react's Component like:

``` javascript
class HotelCard extends Component {

}

export default HotelCard;
```

- [ ] Inside that, add a render function that returns HTML like:

``` javascript
class HotelCard extends Component {
  render() {
      return (
        // The HotelCard JSX will go here
      );
  }
}

export default HotelCard;
```

> In order to determine what the HTML will look like, we need to know what _props_ each HotelCard will have.  So, lets build the sample data file next.

Our Hotels are going to have:
1. spiritCode
2. name
3. address
4. city
5. state
6. zip
7. image (url)
8. url (property website)


#### Make a sample Hotel data file:
A sample data file is simply a javascript object that gets exported.
- [ ] Open `src/sampleHotels.js`
- [ ] Add a made-up hotel and export it:

``` javascript
module.exports = {
  'hyatt1': {
    address: "151 N Riverside Plaza",
    city: "Chicago",
    image: "http://150northriverside.com/wp-content/uploads/slide-home-2-2.jpg",
    name: "Alex's 1st Hotel",
    spiritCode: "adren",
    state: "Illinois",
    url: "https://www.hyatt.com",
    zip: "60606"
  }
}
```

> Now we know what props the Hotels will have so lets go back to `HotelCard.jsx` and build out that component.

#### Building the JSX of the HotelCard:

_Back inside HotelCards.jsx render() function:_
- [ ] Save all props in a `const` and do any existence checks.
  - For this example we will use `const details = {...this.props},`
  - And we want to check to ensure the image url exists, if it doesn't, use a default image: `image = (!!details.image) ? details.image : "default-img.jpg";`

It's standard to give the JSX element the same className as the name of the component.
This helps to keep stylesheets clean and very easy to read.
- [ ] Finally build the JSX inside the `return()` function:

``` javascript
  return (
    <div className="HotelCard">
      <a href={details.url}><img className="Hotel-image" src={image} alt={details.name} /></a>
      <div className="Hotel-title">{details.name}</div>
      <div className="Hotel-address">{details.address}, {details.city}
        <br/>
        {details.state} {details.zip}
      </div>
    </div>
  )
```

That's all there is to it!  Your whole `HotelCard.jsx` file should look like this:

``` javascript
import React, { Component } from 'react';
import './hotelCard.css';

class HotelCard extends Component {

  render() {
    const details = {...this.props},
      image = (!!details.image) ? details.image : "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2017/02/13/1236/Hyatt-Regency-Green-Bay-P046-Standard-Two-Queens-Bedroom.jpg/Hyatt-Regency-Green-Bay-P046-Standard-Two-Queens-Bedroom.4x3.jpg";

    return (
      <div className="HotelCard">
        <a href={details.url}><img className="Hotel-image" src={image} alt={details.name} /></a>
        <div className="Hotel-title">{details.name}</div>
        <div className="Hotel-address">{details.address}, {details.city}
          <br/>
          {details.state} {details.zip}
        </div>
        <div className="Home-footer">
        </div>
      </div>
    );
  }
}

export default HotelCard;
```

**But wait! I don't see it anywhere on the page!**

Now we need to build those functions to render the cards

#### Render My Component!:

- [ ] Open `App.js` - You'll notice how assets, components, libraries, and stylesheets are imported in the auto-generated example as well as the `render()` function down there at the bottom
- import our new HotelCard component and the sampleHotels data:
``` javascript
import HotelCard from './components/hotelCard/hotelCard';
import sampleHotels from './sampleHotels.js';
```
- [ ] In the render function, remove everything except for:

``` javascript
render() {
  return (
    <div className="App">
    </div>
  );
}
```

This is going to be our _(I'm making bunny ears with 2 fingers)_ "page".
- [ ] Add a simple h1 tag for a title - `<h1>Sweet Hotels</h1>`
- [ ] We still need a container for the HotelCards - `<div className="HotelCards"></div>`
- [ ] Now we need to get the data from the sampleHotels file into the _state_ with a function called `componentWillMount()`.
  - The `componentWillMount()` function relates to the react component lifecycle and executes before the component is rendered (before the render function)
  - In the `componentWillMount()` function we'll just be setting the _state_ to the sample data using React's `setState()`:

``` javascript
  componentWillMount() {
    this.setState({
      hotels: sampleHotels
    });
  }
```

  - We need that `this` to be the correct _this_, and in order to do that, just below the class declaration, we need to add a constructor to the component as well as call `super()` in it:

``` javascript
class App extends Component {
  constructor() {
    super();
  }
}
```

- Now we need to initialize our state object:

``` javascript
constructor() {
  super();
  this.state = {
		hotels: {}
	};
}
```

  - Note: all new functions for this component will have to be declared in the constructor and bound to `this`.
    - For example, we will be writing a function to render each HotelCard appropriately named `renderHotel()`. Lets declare and bind that now with `this.renderHotels = this.renderHotels.bind(this);`
    - The whole constructor function should now look like this:

``` javascript
constructor() {
  super();
  this.state = {
		hotels: {}
	};
  this.renderHotel = this.renderHotel.bind(this);
}
```

- [ ] Lets write that `renderHotel()` function now.
  - This function will take an argument, _key_, that we can use to find a specific key/value pair in the state (_remember that once the component is mounted, our state will hold the sampleHotel object_).
  - Each time this function is executed we want it to create a new `HotelCard` component and return it's JSX/HTML value. We do that like this:

``` javascript
renderHotel(key) {
  const hotel = this.state.hotels[key];
  return (
    <HotelCard

    />
  )
}
```

- [ ] Now we just pass the props like html attributes and so they can be used in the HotelCard render function:

``` javascript
renderHotel(key) {
  const hotel = this.state.hotels[key];
  return (
    <HotelCard
      address={hotel.address}
      city={hotel.city}
      image={hotel.image}
      name={hotel.name}
      spiritCode={hotel.spiritCode}
      state={hotel.state}
      zip={hotel.zip}
    />
  )
}
```

- [ ] Last piece of the puzzle is to call the renderHotel function.
  - Since this has to be done after `componentWillMount()` is executed so the state is populated, this should happen inside the App's render function.
  - We'll use javascript's `Object.keys()`, the Object is _state_, and map the keys to `renderHotel`.
  - The final render function will look like this:

``` javascript
render() {
  return (
    <div className="App">
      <h1>Sweet Hotels</h1>
      <div className="HotelCards">
          {Object.keys(this.state.hotels).map(this.renderHotel)}
      </div>
    </div>
  );
}
```

- [ ] Add some css to hotelCard.scss
- [ ] Save the files and checkout your page.
