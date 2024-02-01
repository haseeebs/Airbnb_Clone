Mini Airbnb
Mini Airbnb is a web application built with Node.js, Express, and MongoDB that allows users to browse and review listings. Users can also manage their profiles and interact with the site's features.

Features
User Authentication:

User registration and login with Passport.js
Secure session management with MongoDB session store
Listing Management:

Create, update, and delete listings
View detailed information about each listing
Review System:

Add and delete reviews for listings
Rate and provide feedback for listings
User Profiles:

View and update user profiles
Track user activity and orders
Usage
Clone the repository and install dependencies:

bash
Copy code
git clone <repository-url>
cd mini-airbnb
npm install
Create a MongoDB database and obtain the MongoDB URI.

Set up your environment variables by renaming the .env.example file to .env and adding the following:

makefile
Copy code
CLOUD_NAME = dkzmr7ms3
CLOUD_API_KEY = 195987158168279
CLOUD_API_SECRET = k9wOsOtkRkL2rRYLTylAH_6MckQ
MONGO_URI = your MongoDB URI
SECRET = AbeChalnaChuchiyeInSecret
Install dependencies:

bash
Copy code
npm install
Run the project:

bash
Copy code
npm start
Dependencies
Express
MongoDB
Passport.js

Acknowledgments
Special thanks to the creators of the used dependencies and technologies.


Note
Make sure to replace [repository-url], your MongoDB URI, and your-secret-key with your actual repository URL, MongoDB URI, and a secret key for session management.
