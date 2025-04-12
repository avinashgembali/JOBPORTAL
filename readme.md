pS C:\Users\DELL\OneDrive\Desktop\JOBPORTAL> cd backend  
PS C:\Users\DELL\OneDrive\Desktop\JOBPORTAL\backend> npm init -y
Wrote to C:\Users\DELL\OneDrive\Desktop\JOBPORTAL\backend\package.json:

{
  "name": "internall",
  "version": "1.0.0",
  "main": "server.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^2.2.0",
    "cors": "^2.8.5",
    "dotenv": "^16.5.0",
    "express": "^5.1.0",
    "mongoose": "^8.13.2",
    "multer": "^1.4.5-lts.2",
    "nodemon": "^3.1.9"
  },
  "devDependencies": {},
  "description": ""
}



PS C:\Users\DELL\OneDrive\Desktop\JOBPORTAL\backend> npm i body-parser cors dotenv express mongoose multer nodemon

up to date, audited 136 packages in 4s

21 packages are looking for funding
  run npm fund for details

found 0 vulnerabilities
PS C:\Users\DELL\OneDrive\Desktop\JOBPORTAL\backend> nodemon server.js