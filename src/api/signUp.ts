import { signup } from 'api';

export interface SignUpData {
  memberId: string;
  password: string;
  name: string;
  email: string;
}

export function createAuth(data: SignUpData) {
  return signup.post('', data);
}
