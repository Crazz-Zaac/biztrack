# biztrack

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
- Create a .env file inside the `backend/` directory
- Add the following variables
``` 
PORT= #portnumber that you would like to connect when working locally
DB_CONNECT=mongodb://0.0.0.0/biztrack-dev (replace 0.0.0.0 with your desired local ip or leave as it is while working locally)

```
- For backend
    - `cd backend` 
    - Then run: `npx nodemon`
    - And then visit: [localhost](localhost:4000)

- For frontend
    - `cd frontend/biztrack`
    - Then run: `npm run dev`
    - And then visit: [localhost](http://localhost:5173/)
