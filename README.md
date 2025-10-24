# Restaurant Rating Mobile App

A React Native Expo application that allows users to rate restaurants, provide recommendations, and tag locations with photos. The app features AWS Cognito authentication and is designed for deployment on AWS EKS.

## Features

- 🔐 **User Authentication** - AWS Cognito integration for secure login/signup
- ⭐ **Restaurant Rating** - 5-star rating system with detailed reviews
- 📝 **Recommendations** - Users can provide detailed recommendations
- 📸 **Photo Tagging** - Upload photos for restaurants and locations
- 🏪 **Restaurant Discovery** - Browse and discover new restaurants
- ➕ **Add Restaurants** - Community-driven restaurant additions
- 📱 **Mobile Responsive** - Optimized for mobile devices
- 🚀 **Cloud Ready** - Configured for AWS EKS deployment

## Tech Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Authentication**: AWS Cognito
- **Navigation**: Expo Router
- **Styling**: React Native StyleSheet
- **Image Handling**: Expo Image Picker
- **Cloud Platform**: AWS (EKS deployment ready)

## Screenshots

### Home Screen
![Home Screen](https://github.com/user-attachments/assets/08bc80d2-094a-4ddb-908b-3f7133d27961)

### Login Screen
![Login Screen](https://github.com/user-attachments/assets/1f78013e-a456-4c18-8883-3f2516ff857d)

### Restaurants List
![Restaurants Screen](https://github.com/user-attachments/assets/a724811a-c06f-4b64-ae27-93ea4ae18e78)

### Rating Screen
![Rating Screen](https://github.com/user-attachments/assets/f4ee8bd1-01c5-4b8d-902c-d5a834a553b1)

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- Expo CLI
- AWS Account (for Cognito setup)

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/devyncunningham-generac/mobile-app-copilot-test.git
   cd mobile-app-copilot-test
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Configure AWS Cognito**
   
   Update the AWS configuration in \`services/awsConfig.ts\`:
   \`\`\`typescript
   const amplifyConfig = {
     Auth: {
       Cognito: {
         region: 'your-aws-region',
         userPoolId: 'your-user-pool-id',
         userPoolClientId: 'your-client-id',
         identityPoolId: 'your-identity-pool-id',
         // ... other configurations
       }
     }
   };
   \`\`\`

4. **Start the development server**
   \`\`\`bash
   npm start
   \`\`\`

### Running the App

- **Web**: \`npm run web\`
- **iOS**: \`npm run ios\` (requires macOS)
- **Android**: \`npm run android\`

## AWS Setup

### 1. AWS Cognito Configuration

1. **Create a User Pool**
   - Go to AWS Cognito Console
   - Create a new User Pool
   - Configure sign-in options (email, username)
   - Set password policies
   - Configure MFA (optional)

2. **Create an Identity Pool**
   - Create a new Identity Pool
   - Link it to your User Pool
   - Configure IAM roles for authenticated/unauthenticated users

3. **Update Configuration**
   - Copy the User Pool ID, Client ID, and Identity Pool ID
   - Update \`services/awsConfig.ts\` with your values

### 2. EKS Deployment Setup

1. **Create EKS Cluster**
   \`\`\`bash
   eksctl create cluster --name restaurant-app --region us-east-1
   \`\`\`

2. **Build Docker Image**
   \`\`\`dockerfile
   FROM node:18-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   RUN npm run build
   EXPOSE 3000
   CMD ["npm", "start"]
   \`\`\`

3. **Deploy to EKS**
   \`\`\`yaml
   apiVersion: apps/v1
   kind: Deployment
   metadata:
     name: restaurant-app
   spec:
     replicas: 3
     selector:
       matchLabels:
         app: restaurant-app
     template:
       metadata:
         labels:
           app: restaurant-app
       spec:
         containers:
         - name: restaurant-app
           image: your-ecr-repo/restaurant-app:latest
           ports:
           - containerPort: 3000
   \`\`\`

## Project Structure

\`\`\`
├── app/                    # Expo Router pages
│   ├── _layout.tsx        # Root layout
│   ├── index.tsx          # Home screen
│   ├── login.tsx          # Login screen
│   ├── signup.tsx         # Signup screen
│   ├── restaurants.tsx    # Restaurants list
│   ├── rating.tsx         # Rating screen
│   └── add-restaurant.tsx # Add restaurant screen
├── components/            # Reusable components
├── services/              # API and authentication services
│   ├── awsConfig.ts      # AWS Amplify configuration
│   └── authService.ts    # Authentication service
├── types/                 # TypeScript type definitions
├── constants/            # App constants and configuration
├── hooks/                # Custom React hooks
└── utils/                # Utility functions
\`\`\`

## Features in Detail

### Authentication
- Secure user registration and login
- Password reset functionality
- Session management
- Protected routes

### Restaurant Rating
- 5-star rating system
- Detailed text reviews
- Optional recommendations
- Photo uploads for each review

### Restaurant Management
- Browse restaurants by location and cuisine
- Add new restaurants to the database
- View detailed restaurant information
- Search and filter functionality

### Photo Management
- Upload multiple photos per restaurant
- Image optimization for mobile
- Cloud storage integration (AWS S3 ready)

## Development

### Linting
\`\`\`bash
npm run lint
\`\`\`

### Testing
\`\`\`bash
npm run test
\`\`\`

### Type Checking
\`\`\`bash
npx tsc --noEmit
\`\`\`

## Environment Variables

Create a \`.env\` file in the root directory:

\`\`\`env
AWS_REGION=us-east-1
AWS_USER_POOL_ID=your-user-pool-id
AWS_CLIENT_ID=your-client-id
AWS_IDENTITY_POOL_ID=your-identity-pool-id
API_BASE_URL=https://your-api.amazonaws.com
\`\`\`

## Contributing

1. Fork the repository
2. Create a feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support and questions:
- Create an issue in the GitHub repository
- Contact the development team

## Roadmap

- [ ] Push notifications for new restaurants
- [ ] Advanced search and filtering
- [ ] Restaurant recommendations based on user preferences
- [ ] Social features (follow other users, share reviews)
- [ ] Offline support for viewing previously loaded data
- [ ] Dark mode support
- [ ] Multi-language support