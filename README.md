# VelvetCoin - Luxury Brands Crypto Marketplace

![VelvetCoin Logo](public/logo.svg)

VelvetCoin is a cutting-edge multi-vendor luxury brands e-commerce platform that exclusively accepts cryptocurrency payments. Built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and Web3 integration, it provides a secure and seamless shopping experience for crypto-savvy customers.

## 🌟 Features

### User Roles
- **Customers**: Browse products, make purchases with USDC
- **Vendors**: Manage products, track orders, handle shipping
- **Admins**: Full platform management and oversight

### Core Functionality
- 💎 Luxury brand product listings
- 💰 USDC cryptocurrency payments
- 🛍️ Multi-vendor marketplace
- 📦 Order tracking and management
- 🔐 Secure authentication system
- 📱 Responsive design
- 🖼️ AWS S3 image storage
- 📧 Email notifications

## 🚀 Tech Stack

### Frontend
- React.js 18.x
- Redux Toolkit for state management
- TailwindCSS for styling
- React Router v6 for navigation
- Axios for API requests

### Backend
- Node.js & Express.js
- MongoDB with Mongoose
- JWT authentication
- AWS S3 for file storage
- Nodemailer for emails

### Security
- JWT token-based authentication
- Bcrypt password hashing
- CORS protection
- Content Security Policy
- Rate limiting

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/velvetcoin.git
cd velvetcoin
```

2. Install dependencies:
```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
```

3. Configure environment variables:
```bash
# Root directory .env
MONGODB_URI=your_mongodb_uri
PORT=5000
JWT_SECRET=your_jwt_secret_key
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
EMAIL_FROM=noreply@velvetcoin.com
FRONTEND_URL=http://localhost:3000

# AWS Configuration
AWS_ACCESS_KEY_ID=your_access_key_id
AWS_SECRET_ACCESS_KEY=your_secret_access_key
AWS_REGION=your_region
AWS_BUCKET_NAME=your_bucket_name
```

4. Start the development servers:
```bash
# Start backend server
npm run server

# Start frontend server (in a new terminal)
cd client
npm start
```

## 🏗️ Project Structure

```
velvetcoin/
├── client/                 # Frontend React application
│   ├── public/            # Static files
│   └── src/
│       ├── components/    # React components
│       ├── hooks/        # Custom React hooks
│       ├── services/     # API services
│       ├── store/        # Redux store and slices
│       └── utils/        # Utility functions
├── server/                # Backend Node.js application
│   ├── config/           # Configuration files
│   ├── controllers/      # Route controllers
│   ├── middleware/       # Custom middleware
│   ├── models/          # Mongoose models
│   ├── routes/          # API routes
│   └── utils/           # Utility functions
└── uploads/              # Temporary file uploads
```

## 🔒 Security Features

- JWT token authentication
- Password hashing with bcrypt
- Email verification
- Protected API routes
- Input validation and sanitization
- File upload restrictions
- Rate limiting
- CORS configuration

## 💳 Payment Integration

VelvetCoin uses USDC (USD Coin) for all transactions:
- Secure wallet integration
- Real-time payment verification
- Transaction history
- Automated payment processing
- Refund management

## 🚀 Deployment

The application is configured for deployment on:
- Frontend: Netlify
- Backend: Any Node.js hosting platform
- Database: MongoDB Atlas
- File Storage: AWS S3

## 📝 API Documentation

### Authentication
- POST `/api/auth/register` - User registration
- POST `/api/auth/login` - User login
- GET `/api/auth/verify-email/:token` - Email verification
- POST `/api/auth/forgot-password` - Password reset request

### Products
- GET `/api/products` - List all products
- POST `/api/products` - Create product (vendor only)
- PUT `/api/products/:id` - Update product
- DELETE `/api/products/:id` - Delete product

### Orders
- POST `/api/orders` - Create order
- GET `/api/orders/user` - Get user orders
- GET `/api/orders/vendor` - Get vendor orders
- PATCH `/api/orders/:id/status` - Update order status

### Payments
- POST `/api/payments/process` - Process payment
- GET `/api/payments/:orderId/status` - Check payment status

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- Project Lead: [Your Name](https://github.com/yourusername)
- Frontend Developer: [Name](https://github.com/username)
- Backend Developer: [Name](https://github.com/username)
- UI/UX Designer: [Name](https://github.com/username)

## 📞 Support

For support, email support@velvetcoin.com or join our Discord channel.