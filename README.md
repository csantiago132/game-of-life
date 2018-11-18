# Conway's Game of Life

This is a simple simulation of [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) built with Typescript with Create-React-App

[See the application on Netlify](https://csantiago132-game-of-life.netlify.com/)

## Getting Started
 
To install, run  `yarn run install` on the terminal.

### Prerequisites

> - Yarn >= 1.5.x
> - Node >=8.x

If you do not have yarn installed, [here are the instructions on how to install yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable).


### Installing

To install, run  `yarn run install` on the terminal.


## Running the tests

To run the automated tests for this app, run `yarn run test` on the terminal.

### Break down into end to end tests

The test focuses on the behavior of the application, not the implementation of it.

```js
it('should have a default state defined', () => {
  expect(renderedComponent.state('cell_size')).toBe(20);
  expect(renderedComponent.state('game_height')).toBe(600);
  expect(renderedComponent.state('game_width')).toBe(800);
  expect(renderedComponent.state('isGameRunning')).toBe(false);
});
```

## Deployment

To deploy, run `yarn run build` and place the `./build` folder on the root of the project and place it in the server of your choice. ZThese are static files so no special configuration is needed. 

## Built With

* [React](https://github.com/facebook/react) - A declarative, efficient, and flexible JavaScript library for building user interfaces. 
* [Typescript](https://github.com/Microsoft/TypeScript) - A superset of JavaScript


## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/csantiago132/game-of-life/releases). 

## Authors

* **Carlos Santiago** - *Initial work* - [Github](https://github.com/csantiago132)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* **freecodecamp** - *tutorial* - [YouTube tutorial](https://www.youtube.com/watch?v=PM0_Er3SvFQ)
* **Richard Hayes** - *tutorial* - [YouTube tutorial](https://www.youtube.com/watch?v=GB7Oh226mjM)
* **Niels Van den Broeck** - *notes on perfomance*- [Stack Exchange](https://codereview.stackexchange.com/questions/179206/conways-game-of-life-in-react)
* **Google** - *testing and everything else* - [Google](https://www.google.com)
* **Stack Overflow** - *to get unstuck* - [StackOverflow](https://stackoverflow.com/)
