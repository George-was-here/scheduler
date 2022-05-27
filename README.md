# Interview Scheduler

## Project Overview

Interview Scheduler is a single-page web application for booking interview appointments between students and interviewers. React app makes use of React's full-stack capabilities with API calls. Interview Scheduler was developed with testing based development with Jest testing unit test and Cypress end-to-end testing. 

## Project Features

* Development focuses on a single page application (SPA) called Interview Scheduler, built using React.
* Data is persisted by the API server using a PostgreSQL database.
* The client application communicates with an API server over HTTP, using the JSON format.
* Jest tests are used through the development of the project.
* Interviews can be booked between Monday and Friday.
* A user can switch between weekdays.
* A user can book an interview in an empty appointment slot.
* Interviews are booked by typing in a student name and clicking on an interviewer from a list of available interviewers.
* A user can cancel an existing interview.
* A user can edit the details of an existing interview.
* The list of days informs the user how many slots are available for each day.
* The expected day updates the number of spots available when an interview is booked or canceled.
* A user is presented with a confirmation when they attempt to cancel an interview.
* A user is shown an error if an interview cannot be saved or deleted.
* A user is shown a status indicator while asynchronous operations are in progress.
* When the user presses the close button of the error they are returned to the Form or Show view (skipping Status and Confirm).
* The application makes API requests to load and persist data. We do not lose data after a browser refresh.

## Setup

* Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Screenshots

* Some samples of Interview Schedule functionality below.

!["View of interview appointment selection before submission."](https://github.com/George-was-here/scheduler/blob/main/docs/adding-interview.png?raw=true)

!["Confirmation window to delete an appointment."](https://github.com/George-was-here/scheduler/blob/main/docs/confirming-deletion-of-interview.png?raw=true)

!["A view of selectable days and available appointments"](https://github.com/George-was-here/scheduler/blob/main/docs/view-of-open-spots.png?raw=true)

## Dependencies

```sh
  - Node 5.10.x or above
  - Axios 0.24.0 or above
  - Classnames 2.2.6 or above
  - Normalize.css 8.0.1
  - React 16.9.0 or above
  - Babel/core 7.4.3
  - Storybook/addon-actions 5.0.10
  - Storybook/addon-backgrounds 5.0.10
  - Storybook/addon-links 5.0.10 
  - Storybook/addons 5.0.10
  - Storybook/react 5.0.10
  - Testing-library/jest-dom 4.0.0
  - Testing-library/react 8.0.7
  - Testing-library/react-hooks 8.0.0
  - Babel-loader 8.0.5
  - Node-sass 4.14.0
  - Prop-types 15.8.1
  - React-test-renderer 16.9.0
  - Body-parser 1.18.3
  - Cors 2.8.5
  - dotenv7.0.0
  - Express 4.16.4,
  - Helmet 3.18.0,
  - PostgreSQL 8.5.0
  - socket.io 2.2.0
  - ws 7.0.0
```


