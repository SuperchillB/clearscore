# bud-assignment

---

## Project context

This is a take-home assignment for a Frontend Developer position at Bud.
The project consisted in creating a small app that filters through a list of transactions fetched from a provided API endpoint, and to show only the 10 smallest expenses.

Constraints summary:

1. We would prefer if you use React, but other packages are welcome if this doesn't match your experience
2. We’d like to see assets bundled with a tool like Webpack.
3. Consider the structure and style of your code; we want to see how you would code in a shared codebase that needs to be understood by all developers involved.
4. We don’t expect a fully designed application but we do want to see your CSS skills (we use StyledComponents).
5. Make sure that your code doesn’t cause needless re-renders and uses performance best practices.
6. At Bud we care about accessibility. Make sure your code follows semantic HTML conventions and adds good accessibility where possible.
7. Please don’t use Create React App or similar; we’d like to see your understanding of module bundlers and build tools.
8. Please don’t use libraries such as jQuery and Bootstrap; we’d like to see understanding of the Fetch API and your own creativity.

## How to start the app

_Quick note: This project uses `pnpm` as the dependency package management tool. To install this tool, make sure you follow the instructions [here](https://pnpm.io/installation)._

In the project directory, you can run:

### `pnpm start`

Runs the app in the development mode.\
Open [http://localhost:6003](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

### `pnpm test`

Launches the test runner in the interactive watch mode.

### `pnpm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode, optimizes the build for the best performance and launches an interactive treemap visualization of the contents of all the bundles in a separate page in your browser.

The build is minified and the filenames include the hashes.

## Project stack

| Type                            | Selected tool                   |
| ------------------------------- | ------------------------------- |
| Dep package management          | pnpm                            |
| Build/Bundling tool / Local env | Webpack 5                       |
| Main library/framework          | React 18 + TypeScript           |
| Data model                      | React Query                     |
| JS func utils                   | Fetch API                       |
| Styling                         | StyledComponents + StyledSystem |
| Testing                         | Jest + React Testing Library    |
| Load animation library          | React Loading Skeleton          |
| Styling                         | StyledComponents + StyledSystem |
| API Mocking                     | MSW                             |
| Linter                          | ESLint                          |
| Formatter                       | Prettier                        |
| Source control / Git hooks      | Husky                           |

## Comments

- This app was built with basic scalability in mind and with a small design system built from scratch using `styled-system`
- `react-query` was used for performance-related reasons (external data state management + caching management), even though the app itself is very basic
- Additional comments (with more details) can be found in the code
