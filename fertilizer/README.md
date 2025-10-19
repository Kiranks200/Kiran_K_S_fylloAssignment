# Fyllo Task - Fertilizer Application

This project is a modified version of the [Fertilizer repository](https://bitbucket.org/ankitsingh_16/fertilizer/src/master/) with updated dependencies and features.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- **Node.js** (v14.x or higher recommended)
- **npm** (v6.x or higher) or **yarn** (v1.22.x or higher)

## Installation

Since the `node_modules` folder is not included in the repository, you'll need to install all dependencies before running the application.

### Step 1: Clone the Repository
```bash
git clone https://github.com/Kiranks200/Kiran_K_S_fylloAssignment.git
cd fertilizer
```

### Step 2: Install Dependencies
Run one of the following commands to install all required packages:

```bash
npm install
```

or if you're using yarn:

```bash
yarn install
```

This command will read the `package.json` file and automatically install all the dependencies listed there.

## Dependencies

Yes, the `package.json` file contains **all** the Node.js dependencies used in this application. When you run `npm install` or `yarn install`, it will automatically download and install all required packages.

### Core Dependencies:
- **React** (v17.0.2) - JavaScript library for building user interfaces
- **React DOM** (v17.0.2) - React package for working with the DOM
- **React Router DOM** (v5.3.0) - Routing library for React applications
- **Material-UI** (@mui/material v5.18.0, @mui/icons-material v5.4.1) - React component library for Material Design
- **AG Grid** (v27.3.0) - Advanced data grid component
- **Recharts** (v2.15.4) - Charting library built on React components
- **React Scripts** (v5.0.0) - Configuration and scripts for Create React App

### Development Dependencies:
- **ESLint Config React App** (v7.0.1) - ESLint configuration used by Create React App

## Running the Application

Once all dependencies are installed, you can start the development server:

```bash
npm start
```

or with yarn:

```bash
yarn start
```

The application will open in your default browser at [http://localhost:3000](http://localhost:3000).

## Available Scripts

- **`npm start`** - Runs the app in development mode
- **`npm build`** - Builds the app for production to the `build` folder
- **`npm test`** - Launches the test runner in interactive watch mode
- **`npm eject`** - Ejects from Create React App (one-way operation, use with caution)

## Building for Production

To create an optimized production build:

```bash
npm run build
```

The production-ready files will be generated in the `build` folder.

## Support

For issues or questions related to the original repository, please refer to the [original Fertilizer repository](https://bitbucket.org/ankitsingh_16/fertilizer/src/master/).

For issues specific to this modified version, please create an issue in this repository.