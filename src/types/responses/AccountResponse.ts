import type{ AccountRoleEnum } from '../enums/AccountRoleEnum';
import type{ AccountStatusEnum } from '../enums/AccountStatusEnum';
import type{ AccountProviderEnum } from '../enums/AccountProviderEnum';

export interface AccountResponse {
  id: number;
  username: string;
  email: string;
  name: string;
  picture?: string | null;

  role: AccountRoleEnum;
  status: AccountStatusEnum;
  provider: AccountProviderEnum;

  createAt: string; 
  updatedAt?: string | null; 

  dateOfBirth?: string | null; 
  gender?: string | null; 
}