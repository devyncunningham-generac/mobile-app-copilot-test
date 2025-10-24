// Color scheme
export const Colors = {
  primary: '#007AFF',
  secondary: '#5856D6',
  success: '#34C759',
  warning: '#FF9500',
  error: '#FF3B30',
  background: '#FFFFFF',
  surface: '#F8F9FA',
  text: '#333333',
  textSecondary: '#666666',
  border: '#DDDDDD',
  star: '#FFD700',
};

// Spacing
export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
};

// Typography
export const Typography = {
  title: 28,
  subtitle: 16,
  body: 16,
  caption: 14,
  small: 12,
};

// Layout
export const Layout = {
  borderRadius: 8,
  cardElevation: 3,
  maxWidth: 400,
};

// AWS Configuration placeholders
export const AWS_CONFIG = {
  region: 'us-east-1', // Replace with your AWS region
  userPoolId: 'YOUR_USER_POOL_ID', // Replace with your Cognito User Pool ID
  userPoolWebClientId: 'YOUR_CLIENT_ID', // Replace with your Cognito Client ID
};

// API Endpoints
export const API_ENDPOINTS = {
  restaurants: '/api/restaurants',
  ratings: '/api/ratings',
  users: '/api/users',
  photos: '/api/photos',
};

// Image upload settings
export const IMAGE_CONFIG = {
  maxSize: 5 * 1024 * 1024, // 5MB
  allowedTypes: ['image/jpeg', 'image/png', 'image/webp'],
  quality: 0.8,
};