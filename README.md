# Authentication System 🔐

## About
A robust backend application built with Express.js, TypeScript, and MongoDB that implements secure user authentication and post management. The system utilizes JWT (JSON Web Tokens) for maintaining secure sessions and provides a RESTful API for user and post operations.

## Features
- 🔒 Secure user authentication using JWT
- 📝 Post creation and management for authenticated users
- 🏗️ Scalable and modular project structure
- 🔍 Input validation and error handling
- 🚀 Built with modern technologies:
  - Express.js for API development
  - TypeScript for type safety
  - MongoDB for data persistence
  - Docker for containerization
  - AWS ECS for deployment

## Prerequisites
Before running this project, make sure you have:
- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- Docker (optional, for containerized deployment)
- AWS CLI (optional, for deployment)

## Installation

### Local Development
1. Clone the repository:
```bash
git clone https://github.com/deniseurbanija/auth-system.git
cd authentication-system
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/auth-system
JWT_SECRET=your_jwt_secret
```

4. Start the development server:
```bash
npm run dev
```

### Docker Deployment
1. Build the Docker image:
```bash
docker build -t auth-system .
```

2. Run the container:
```bash
docker run -p 3000:3000 auth-system
```

### Authentication Endpoints
```
POST /auth/register - Register a new user
POST /auth/login - Login user
```

### Posts Endpoints
```
GET /posts - Get all posts
POST /posts - Create a new post (protected)
DELETE /posts/:id - Delete post (protected)
```

### Users Endpoints
```
GET /users - Get all users (protected)
GET /users/:id - get user by id (protected)
DELETE /users/:id - Delete user (protected)
```

## Environment Variables
- `PORT`: Server port (default: 3000)
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT tokens
- `NODE_ENV`: Environment (development/production)

## Tech Stack
- Express.js
- TypeScript
- MongoDB
- JWT
- Docker
- AWS ECS

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
