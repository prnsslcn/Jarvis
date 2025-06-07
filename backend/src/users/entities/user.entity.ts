export class User {
  id: string;
  email: string;
  name: string;
  provider: 'google' | 'microsoft';
  providerId: string;
}
