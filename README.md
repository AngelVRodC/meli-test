 # Meli Frontend Test

## Tools 🛠️

   [React](https://reactjs.org/)  JavaScript library created for building fast and interactive user interfaces for web and mobile applications.

   [Styled Components](https://styled-components.com/)  A tool to write CSS that's scoped to a single component.

   [NextJS](https://nextjs.org/) React framework for developing single page Javascript applications with server side rendering.

   [Redux](https://redux.js.org/) Predictable state container for JavaScript apps.

   [Jest](https://jestjs.io/) Javascript Testing Library.

   [Enzyme](https://enzymejs.github.io/enzyme/)  JavaScript Testing utility for React that makes it easier to test your React Components' output.

   [Yarn](https://yarnpkg.com/) Javascript Package Manager.

 
## Folder Structure 
    .
    ├── src                    # Source files
        ├── __mocks__          # Data Mock for unit testing
        ├── __test__           # Unit testing functions
        ├── api                # Functions to fetch the data / serializers
        ├── pages              # React components Pages associated with a route based on its file name.
        ├── redux              # Redux store, actions and reducers
        ├── styles             # Global css and styled component themes
        ├── components         # React components without business logic
        ├── containers         # React components with business logic        
        ├── styles             # Global css and styled component themes          
    .env                       # Environment variables
    package.json               # Dependencies management
    tsconfig.json              # Typescript Configurations
    jest.config.js             # Testing Configurations

### Running the project

You must create a `.env` file in the root of the project to add the environment variables

```
# Meli api
NEXT_PUBLIC_MELI_API=https://api.mercadolibre.com
```

then run:

```sh
yarn dev
```
### Running the tests

```sh
yarn test
```

