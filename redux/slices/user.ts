import { covertToFormattedDate } from "@/lib/helper";
import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  value: {
    fullname: string;
    currentBalance: string;
    phone: string;
    email: string;
    dob: string;
    cot: string;
    imf: string;
    accountType: string;
    accountNumber: string;
    country: string;
    state: string;
    city: string;
    postalCode: string;
    street: string;
    status: string;
  };
};

const initialState: TInitialState = {
  value: {
    fullname: "",
    currentBalance: "",
    phone: "",
    email: "",
    dob: "",
    cot: "",
    imf: "",
    accountType: "",
    accountNumber: "",
    country: "",
    state: "",
    city: "",
    postalCode: "",
    street: "",
    status: "",
  },
};

export const UserDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
        const {firstName, middleName, lastName, birthDate, residentialAddress} = action.payload
        const dob = covertToFormattedDate(birthDate)
        const fullname = `${firstName} ${middleName} ${lastName}`
        state.value = {...action.payload, fullname, dob, state: residentialAddress.state, street: residentialAddress.street, country: residentialAddress.country, city: residentialAddress.city, postalCode: residentialAddress.postalcode}
    },
    updateDetails: (state, action) => {
      state.value = {...state.value, ...action.payload}
    }
  },
});

export const { setUserDetails, updateDetails } = UserDetailsSlice.actions;
