# Innoloft Dashboard

This project is a dashboard for displaying and editing product information, built with React, Redux, and TailwindCSS.

## Prerequisites
 - Node.js (LTS version recommended) installed on your system. You can download it from [here](https://nodejs.org/en/download/).

 ## Setup Instructions

 1. Clone the repository:
 ```bash
 git clone https://github.com/phillipug/innoloft-dashboard.git
 ```

 2. Change to the project directory:
 ```bash
 cd innoloft-dashboard
 ```

 3. Install the required dependencies:
 ```bash
 npm install
 ```

 4. Create a `.env` file from the `.env.example`
 ```bash
 cp .env.example .env
 ```
**NOTE:** you need to a google maps api key for the map on the product view page to work. Add the key to the `REACT_APP_GOOGLE_MAPS_API_KEY` env in the `.env` file.

 5. Start the development server:
 ```bash
 npm start
 ```
 This will open the application in your default web browser at `http://localhost:3000`.

 ## Linting
 To run the linters for JavaScript/TypeScript and CSS files, use the following commands:
 ```bash
 npm run lint:js   # To lint JavaScript/TypeScript files
npm run lint:css  # To lint CSS files
npm run lint      # To lint both JavaScript/TypeScript and CSS files
```
These linters help maintain consistent code style and catch potential issues in your code.

## Build for Production
To create an optimized production build, run:
```bash
npm run build
```
This will generate a build folder containing the production-ready files.

## Deploying the Application
To deploy the application, follow the hosting provider's instructions. Some popular options include [Netlify](https://www.netlify.com/), [Vercel](https://vercel.com/), and [Firebase Hosting](https://firebase.google.com/products/hosting).

