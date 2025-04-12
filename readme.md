Job Portal Project

This repository contains a full-stack Job Portal application built with Node.js, Express, and MongoDB.
The application supports user registration, login, profile updates, and job posting/applications.
It uses the following modules:
  - express
  - mongoose
  - dotenv
  - cors
  - multer
  - path (native module)
  - { fileURLToPath } from 'url' (native module)

Table of Contents:
-----------------
1. Prerequisites
2. Installation Steps
   a. Clone the Repository
   b. Initialize npm
   c. Install Dependencies
3. Running the Application
4. MongoDB Connection Setup
5. Using nodemon for Development
6. Project Structure
7. License

1. Prerequisites:
-----------------
- Node.js: Download and install from https://nodejs.org/
- MongoDB: Either install MongoDB locally or use a cloud instance (MongoDB Atlas)
- Git: For cloning the repository

2. Installation Steps:
----------------------

a. Clone the Repository:
   Open your terminal (or command prompt) and run:
   
   git clone https://github.com/your-username/your-job-portal-project.git
   cd your-job-portal-project

b. Initialize npm:
   If the repository does not have a package.json, initialize a new one:
   
   npm init -y

c. Install Dependencies:
   Run the following command to install required modules:
   
   npm install express mongoose dotenv cors multer

   Note:
   - The modules 'path' and '{ fileURLToPath }' come with Node.js.
   - To install nodemon (for development), run:
   
   npm install --save-dev nodemon
    
   Then, update your package.json "scripts" section to include:
   
   "scripts": {
       "start": "node server.js",
       "dev": "nodemon server.js"
   }

3. Running the Application:
---------------------------
For development mode (using nodemon):
   
   npm run dev

For production mode:
   
   npm start

The server will run on the port specified in your environment variables or default to port 5000.

4. MongoDB Connection Setup:
----------------------------
a. Create a MongoDB Database:
   - Install and run MongoDB locally or use MongoDB Atlas (https://www.mongodb.com/cloud/atlas).
   - If using MongoDB Atlas, create a new database cluster and obtain the connection URI in this format:
   
     mongodb+srv://<username>:<password>@cluster0.mongodb.net/your-database-name?retryWrites=true&w=majority

b. Configure Environment Variables:
   Create a .env file in your project's root directory with the following content:
   
   MONGO_URI=mongodb://localhost:27017/jobPortalDB
   PORT=5000

   (If using Atlas, replace the local URI with your Atlas connection string. Replace <username>, <password>, and your-database-name with the actual values.)

c. MongoDB Connection in Code:
   In server.js, the connection is set up as follows:
   
   mongoose.connect(process.env.MONGO_URI, {
       useNewUrlParser: true,
       useUnifiedTopology: true,
   })
   .then(() => console.log('MongoDB connected'))
   .catch(err => console.error('MongoDB connection error:', err));

5. Using nodemon for Development:
-----------------------------------
nodemon watches for file changes and restarts your server automatically.
To start your server in development mode with nodemon, run:
   
   npm run dev

6. Project Structure:
---------------------
A suggested folder structure:

your-job-portal-project/
│   
│
└───backend
│   |───models
│   |   userModel.js
│   |   jobModel.js
|   └---.env
│   └ package.json
│   └server.js
│
└───public
    └───css
         styles.css
         jobs.css
└───views
     login.html
     register.html
     index.html
     jobs.html
     profile.html

7. License:
-----------
This project is licensed under the MIT License.

------------------------------------------------
Additional Information:
------------------------------------------------
This project includes a Job model that defines the job structure and supports fields such as title, category, location, description, postedDate, postedBy (optional), and appliedBy.

Example Job Model (jobModel.js):
---------------------------------
import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  category: { type: String, required: true, enum: ['tech', 'marketing', 'hr', 'sales', 'finance'] },
  location: { type: String, required: true, enum: ['remote', 'onsite'] },
  description: { type: String, required: true, trim: true },
  postedDate: { type: Date, default: Date.now },
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  appliedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

export default mongoose.model('Job', JobSchema);

------------------------------------------------
Usage Note:
------------------------------------------------
Ensure that your .env file is properly set up and that MongoDB is running (or accessible via MongoDB Atlas).
After seeding your database with job documents (either manually via an endpoint or using a seed script), your application’s /apply-job endpoint can update job applications,
and the front-end (jobs.html) will display and persist the application state.

------------------------------------------------
Happy Coding!
