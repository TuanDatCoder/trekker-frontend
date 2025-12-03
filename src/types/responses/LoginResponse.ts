import type { AccountResponse } from '../responses/AccountResponse';
import type { ApiResponse } from '../responses/ApiResponse';
export interface LoginResponseData {
  accessToken: string;
  refreshToken: string;
  user: AccountResponse;
}
export type LoginResponse = ApiResponse<LoginResponseData>;