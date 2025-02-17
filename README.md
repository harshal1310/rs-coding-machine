
This project implements a REST API using Node.js and PostgreSQL for a "5-minute per day" activity tracking system as part of a month-long program. 
## Features

- **Dynamic Activity Range:** By default, the API serves activities for days 14-21 (as specified in the assignment), but you can customize the range using query parameters.
- **Create Activity:** Add new activities to the system.
- **Mark Complete:** Update an activity's status to completed.
- **PostgreSQL Database:** Uses PostgreSQL for data persistence with Sequelize ORM.
- **Express.js Server:** Built using Node.js and Express.js for handling API requests.

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL
- **ORM:** Sequelize
- **Environment Management:** dotenv

GET http://localhost:5000/api/activities
PATCH http://localhost:5000/api/activities/1
