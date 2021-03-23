# Code Challenge

Provide a user interface to search for and display points of interest.
Written answers to questions: [Questions](./QUESTIONS.md)

### Acceptance criteria
* Users can type queries into the search box
* Users are shown relevant results dynamically below the input as they type
* Clicking on a result, navigates the User to the point of interest index page
* User can see details about the specific point of interest

## The application:

A modified [create-react-app](https://facebook.github.io/create-react-app/) to support Typescript, styled-components and  react-testing-library.

### Running the project locally and testing

The project can be run locally:

```sh
yarn
yarn start
navigate to 'localhost:3000/'
```

_Both_ unit and integration tests run with one command - integration tests live within `__tests__`

 
```sh
yarn test
```
