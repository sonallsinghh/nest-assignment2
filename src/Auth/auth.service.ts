import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly API_URL = 'http://localhost:3000/users'; 

  async signUpUser(
    username: string,
    mobile: string,
    password: string,
    email: string,
  ): Promise<string> {
    try {
      const response = await fetch(this.API_URL);
      
      if (!response.ok) {
        return 'Error fetching users!';
      }

      const users = await response.json();

      console.log('Fetched users:', users);

      if (!Array.isArray(users)) {
        return 'The response from the server is not an array!';
      }

      const userExists = users.find((user: any) => user.email === email);
      if (userExists) {
        return 'User with this email already exists!';
      }

      const newUser = { username, email, password, mobile };
      const res = await fetch(this.API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      });

      if (!res.ok) {
        return 'Error registering user!';
      }

      return 'User registered successfully!';
    } catch (error) {
      console.error('Error in signUpUser:', error);
      return 'An error occurred while processing the request.';
    }
  }

  async loginUser(
    username: string,
    email: string,
    password: string,
  ): Promise<string> {
    try {
      const response = await fetch(this.API_URL);
      
      if (!response.ok) {
        return 'Error fetching users!';
      }

      const users = await response.json();
      
      console.log('Fetched users for login:', users);

      if (!Array.isArray(users)) {
        return 'The response from the server is not an array!';
      }

      const user = users.find(
        (user: any) => user.email === email || user.username === username,
      );

      if (!user) {
        return 'User not found!';
      }

      if (user.password !== password) {
        return 'Password Mismatch';
      }

      return `Welcome back, ${user.username}!`;
    } catch (error) {
      console.error('Error in loginUser:', error);
      return 'An error occurred while processing the request.';
    }
  }
}
