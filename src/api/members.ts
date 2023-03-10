import { members } from 'api';

interface LoginData {
  memberId: 'member_A';
  password: 1234;
}

export function login(data: LoginData) {
  return members.post('login', data);
}
