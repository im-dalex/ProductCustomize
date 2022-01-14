export interface Token {
  access_token: string;
  token_type: string;
  expires_in: number;
  // logged_at?: Date;
}

export interface AuthUser {
  username: string;
  password: string;
  grant_type: string;
  client_id: string;
}
