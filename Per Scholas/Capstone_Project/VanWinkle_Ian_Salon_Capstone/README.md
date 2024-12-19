BeautyByyBai - Salon Website
Welcome to BeautyByyBai! This is the official website for a freelance salon offering a range of beauty services including hair styling, cuts, coloring, makeup, waxing, and more.

Features
Service Menu & Pricing: A list of available services with pricing.
Gallery: A showcase of previous work and client results.
Contact Information: Easy access to book appointments and get in touch.
Responsive Design: The site is fully responsive for an optimal viewing experience on desktop and mobile.

Technologies Used
Frontend: React.js, HTML, CSS
Backend: Node.js, Express.js
Database: MongoDB
Deployment: Heroku (Backend), Netlify/Vercel (Frontend)
Installation and Setup
Prerequisites
Before starting, make sure you have:

Node.js and npm installed on your machine.
Backend Setup
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/beautybyybai-backend.git
Navigate to the backend directory:

bash
Copy code
cd beautybyybai-backend
Install dependencies:

bash
Copy code
npm install
Set up environment variables for your MongoDB connection and other configurations (if necessary).

Start the server:

bash
Copy code
npm start
The backend will run on http://localhost:5000.

Frontend Setup
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/beautybyybai-frontend.git
Navigate to the frontend directory:

bash
Copy code
cd beautybyybai-frontend
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
The frontend will run on http://localhost:3000.

Testing the API
To test the backend API, you can use Postman or any other API client to make GET requests to:

GET http://localhost:5000/api/prices — Fetch the pricing data.
GET http://localhost:5000/api/test — A simple test endpoint to check if the backend is running.
