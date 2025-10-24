// User types
export interface User {
  id: string;
  name: string;
  email: string;
  cognitoId: string;
  createdAt: Date;
  updatedAt: Date;
}

// Restaurant types
export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  location: string;
  address?: string;
  phone?: string;
  website?: string;
  rating: number;
  reviewCount: number;
  photos: string[];
  createdAt: Date;
  updatedAt: Date;
}

// Rating and Review types
export interface Rating {
  id: string;
  userId: string;
  restaurantId: string;
  rating: number; // 1-5 stars
  review: string;
  recommendation?: string;
  photos: string[];
  createdAt: Date;
  updatedAt: Date;
}

// AWS Cognito types
export interface CognitoUser {
  username: string;
  attributes: {
    email: string;
    name: string;
    email_verified?: boolean;
  };
}

// Navigation types
export interface RestaurantParams {
  restaurant: string;
  name: string;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Form types
export interface LoginForm {
  email: string;
  password: string;
}

export interface SignupForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface RatingForm {
  rating: number;
  review: string;
  recommendation?: string;
  photos: string[];
}