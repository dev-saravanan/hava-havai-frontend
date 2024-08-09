# Hava Havai Frontend Project

This project is a frontend application created using `create-react-app` and Adobe React Spectrum. Follow the steps below to set up and run the application locally.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [Yarn](https://yarnpkg.com/) (optional)

## Installation

1. **Clone the Repository**

   First, clone the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/dev-saravanan/hava-havai-frontend.git
   ```

2. **Navigate to the Project Directory**

   Change into the project directory:

   ```bash
   cd hava-havai-frontend
   ```

3. **Install Dependencies**

   Install the project dependencies using npm or Yarn:

   Using npm:

   ```bash
   npm install
   ```

   Or, using Yarn:

   ```bash
   yarn install
   ```

4. **Run the Application**

   To start the development server and run the application locally, use:

   Using npm:

   ```bash
   npm start
   ```

   Or, using Yarn:

   ```bash
   yarn start
   ```

   The application should now be running at `http://localhost:3000` in your browser.

## Project Structure

Here's a brief overview of the project structure:

- `src/`: Contains the source code of the application.

  - `components/`: Reusable components used in the application.
  - `assets/images/`: Image files.
  - `App.js`: The main application component.
  - `index.js`: The entry point of the application.

- `public/`: Contains static assets like `index.html`.

- `package.json`: Lists the project's dependencies and scripts.

## Using Adobe React Spectrum

Adobe React Spectrum is used for UI components in this project. For more information on how to use React Spectrum components, refer to the [Adobe React Spectrum documentation](https://react-spectrum.adobe.com/react-spectrum/getting-started.html).

## Building for Production

To create a production build of the application, use:

Using npm:

```bash
npm run build
```

Or, using Yarn:

```bash
yarn build
```

The production build will be placed in the `build/` directory.
