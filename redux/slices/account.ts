import { createSlice } from "@reduxjs/toolkit";

type TAccount = {
  accountID?: string;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  email?: string;
  phone?: string;
  residentialAddress?: {
    street?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
  };
  birthDate?: string;
  gender?: string;
  accountNumber?: string;
  imf?: string;
  cot?: string;
  currentBalance?: number;
  availableBalance?: number;
  image?: string;
  accountType?: string;
  status?: string;
  blocked?: string;
  admin?: boolean;
};

type TInitialState = {
  account: TAccount;
  allAccounts: TAccount[];
  pendingAccounts: TAccount[];
};

const initialState: TInitialState = {
  account: {},
  allAccounts: [],
  pendingAccounts: [],
};

export const AccountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    loadAccount: (state, action) => (state.account = action.payload),
    updateAccountDetails: (state, action) => {
        const { accountID } = state.account;
      state.account = { ...state.account, ...action.payload };
      const newAccount = state.account
      const newAccounts = state.allAccounts.map((account) => {
        if(account.accountID === accountID){
            return {
                ...newAccount
            }
        }
        return account
      });
      state.allAccounts = newAccounts
    },
    loadAllAccounts: (state, action) => (state.allAccounts = action.payload),
    pendingAccounts: (state) => {
      state.pendingAccounts = state.allAccounts.filter(
        (account) => account.status === "pending"
      );
    },
  },
});

export const { loadAccount, loadAllAccounts, pendingAccounts } =
  AccountSlice.actions;
