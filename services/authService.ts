import { signIn, signUp, signOut, getCurrentUser, fetchAuthSession } from 'aws-amplify/auth';
import { ApiResponse, CognitoUser, LoginForm, SignupForm } from '../types';

export class AuthService {
  // Sign in user
  static async signIn(loginData: LoginForm): Promise<ApiResponse<CognitoUser>> {
    try {
      const { isSignedIn, nextStep } = await signIn({
        username: loginData.email,
        password: loginData.password,
      });

      if (isSignedIn) {
        const user = await getCurrentUser();
        return {
          success: true,
          data: {
            username: user.username,
            attributes: {
              email: loginData.email,
              name: user.username,
            },
          },
          message: 'Sign in successful',
        };
      } else {
        return {
          success: false,
          error: 'Additional steps required',
          message: nextStep?.signInStep || 'Sign in incomplete',
        };
      }
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Sign in failed',
      };
    }
  }

  // Sign up user
  static async signUp(signupData: SignupForm): Promise<ApiResponse<any>> {
    try {
      const { isSignUpComplete, userId, nextStep } = await signUp({
        username: signupData.email,
        password: signupData.password,
        options: {
          userAttributes: {
            email: signupData.email,
            name: signupData.name,
          },
        },
      });

      return {
        success: true,
        data: { userId, isSignUpComplete },
        message: 'Sign up successful. Please check your email for verification.',
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Sign up failed',
      };
    }
  }

  // Sign out user
  static async signOut(): Promise<ApiResponse<any>> {
    try {
      await signOut();
      return {
        success: true,
        message: 'Sign out successful',
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Sign out failed',
      };
    }
  }

  // Get current user
  static async getCurrentUser(): Promise<ApiResponse<CognitoUser>> {
    try {
      const user = await getCurrentUser();
      const session = await fetchAuthSession();
      
      return {
        success: true,
        data: {
          username: user.username,
          attributes: {
            email: user.signInDetails?.loginId || '',
            name: user.username,
          },
        },
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Not authenticated',
      };
    }
  }

  // Check if user is authenticated
  static async isAuthenticated(): Promise<boolean> {
    try {
      await getCurrentUser();
      return true;
    } catch {
      return false;
    }
  }
}