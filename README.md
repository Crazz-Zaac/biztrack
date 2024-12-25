# biztrack
![Dependabot Status](https://img.shields.io/badge/dependabot-active-brightgreen)
![GitHub License](https://img.shields.io/github/license/Crazz-Zaac/biztrack)
![Commit Activity](https://img.shields.io/github/commit-activity/w/Crazz-Zaac/biztrack)
![code size(bytes)](https://img.shields.io/github/languages/code-size/Crazz-Zaac/biztrack)
[![Coverage Status](https://coveralls.io/repos/github/Crazz-Zaac/biztrack/badge.svg?branch=main)](https://coveralls.io/github/Crazz-Zaac/biztrack?branch=main)
<!-- ![Tests](https://github.com/Crazz-Zaac/computer-vision-experiments/actions/workflows/py_test.yml/badge.svg) -->
[![Issues](https://img.shields.io/github/issues/Crazz-Zaac/biztrack)](https://github.com/Crazz-Zaac/biztrack/issues)
[![Contributors](https://img.shields.io/github/contributors/Crazz-Zaac/biztrack)](https://github.com/Crazz-Zaac/biztrack/graphs/contributors)
[![Node.js](https://img.shields.io/badge/node-%3E%3D14-green)](https://nodejs.org/)
[![MERN Stack](https://img.shields.io/badge/stack-MERN-blue)](#)
[![Build Status](https://img.shields.io/github/actions/workflow/status/Crazz-Zaac/biztrack/build.yml)](https://github.com/Crazz-Zaac/biztrack/actions)



### Project description

This is an internal web application tool to keep the records of accounting and documentation of day to day activities.


### Current issues
- [ ] LogIn Form
- [ ] Dashboard
- [ ] User creation and role assignment 
- [ ] Booking form
- [ ] Billing system
- [ ] Clients record
- [ ] Office expenditure record
- [ ] Official letter sent record
- [ ] Salary statement record 


### Packages 
- `nodemon` - for restarting server automatically
- `Express.js` - backend web app framework for building RESTFUL APIs with Node.js
- `dotenv` 
- `cors`
- `mongoose` - mongodb database for backend
- `Vite`
- `React` 

### Running the project
- `git clone --branch dev git@github.com:Crazz-Zaac/biztrack.git`
- Create a .env file inside the `backend/` directory
- Add the following variables
``` 
PORT= #portnumber that you would like to connect when working locally
DB_CONNECT=mongodb://0.0.0.0/biztrack-dev (replace 0.0.0.0 with your desired local ip or leave as it is while working locally)

```
- For backend
    - `cd backend` 
    - Then run: `npx nodemon`
    - And then visit: [localhost](https://localhost:4000)

- For frontend
    - `cd frontend/biztrack`
    - Then run: `npm run dev`
    - And then visit: [localhost](http://localhost:5173/)
