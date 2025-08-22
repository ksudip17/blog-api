# Blog API

A RESTful API for managing blog posts built with Node.js, Express, and MongoDB.

## 🚀 Features

- **CRUD Operations**: Create, read, update, and delete blog posts
- **Category Management**: Organize posts by categories (sports, technology, AI, politics, entertainment)
- **MongoDB Integration**: Persistent data storage with Mongoose ODM
- **RESTful Design**: Clean and intuitive API endpoints
- **Input Validation**: Built-in validation for blog post data
- **Timestamps**: Automatic creation and update timestamps

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js 5.x
- **Database**: MongoDB
- **ODM**: Mongoose
- **Environment**: dotenv for configuration management
- **Module System**: ES6 Modules

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB instance (local or cloud)
- npm or yarn package manager

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd blog-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   
   Create environment files based on your environment:
   
   ```bash
   # For development
   cp .env.development.local.example .env.development.local
   
   # For production
   cp .env.production.local.example .env.production.local
   ```
   
   Configure your environment variables:
   ```env
   PORT=3000
   NODE_ENV=development
   SERVER_URL=http://localhost:3000
   DB_URI=mongodb://localhost:27017/blog-api
   ```

4. **Start the server**
   ```bash
   # Development mode with auto-reload
   npm run dev
   
   # Production mode
   npm start
   ```

   The API will be available at `http://localhost:3000`

## 📚 API Endpoints

### Base URL: `/api/v2`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/posts` | Create a new blog post |
| `GET` | `/posts` | Get all blog posts |
| `GET` | `/posts/:id` | Get a specific blog post by ID |
| `PUT` | `/posts/:id/edit` | Update a blog post |
| `DELETE` | `/posts/:id` | Delete a blog post |

## 🔧 API Usage

### Create a Blog Post
```bash
POST /api/v2/posts
Content-Type: application/json

{
  "title": "Getting Started with Node.js",
  "content": "Node.js is a powerful JavaScript runtime...",
  "category": "technology"
}
```

**Required Fields:**
- `title`: String (5-100 characters)
- `content`: String
- `category`: String (one of: sports, technology, ai, politics, entertainment)

### Get All Posts
```bash
GET /api/v2/posts
```

### Get Single Post
```bash
GET /api/v2/posts/:id
```

### Update Post
```bash
PUT /api/v2/posts/:id/edit
Content-Type: application/json

{
  "title": "Updated Title",
  "content": "Updated content...",
  "category": "ai"
}
```

### Delete Post
```bash
DELETE /api/v2/posts/:id
```

## 📁 Project Structure

```
blog-api/
├── app.js                 # Main application entry point
├── config/
│   └── env.js           # Environment configuration
├── controllers/
│   └── blog.controller.js # Blog CRUD operations
├── database/
│   └── mongodb.js       # Database connection
├── models/
│   └── blog.model.js    # Blog data model
├── routes/
│   └── blog.routes.js   # API route definitions
└── package.json
```

## 🗄️ Database Schema

### Blog Post Schema
```javascript
{
  title: String (required, 5-100 chars),
  content: String (required),
  category: String (enum: sports, technology, ai, politics, entertainment),
  createdAt: Date (auto-generated),
  updatedAt: Date (auto-generated)
}
```

## 🚀 Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with nodemon
- `npm test` - Run tests (currently not configured)

## 🔒 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port number | 3000 |
| `NODE_ENV` | Environment (development/production) | development |
| `SERVER_URL` | Server base URL | http://localhost:3000 |
| `DB_URI` | MongoDB connection string | mongodb://localhost:27017/blog-api |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Sudip Khatiwada**

## 🆘 Support

If you encounter any issues or have questions, please:

1. Check the existing issues in the repository
2. Create a new issue with detailed information
3. Include error messages and steps to reproduce

## 🔮 Future Enhancements

- [ ] User authentication and authorization
- [ ] Image upload support
- [ ] Search and filtering capabilities
- [ ] Pagination for large datasets
- [ ] Rate limiting
- [ ] API documentation with Swagger
- [ ] Unit and integration tests
- [ ] Docker containerization

Project URL : https://github.com/ksudip17/blog-api
