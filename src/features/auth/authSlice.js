import {
  clearStorage,
  getFromLocalStorage,
  setLocalStorage,
} from "../../utils/localStorageHandler";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { loginService, signupService } = require("../../services");

const initialState = {
  loading: false,
  user: getFromLocalStorage("user") || null,
  authToken: getFromLocalStorage("token") || null,
  error: "",
};

const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await loginService(email, password);
      if (response.status === 200) {
        setLocalStorage(
          {
            firstName: response.data?.foundUser?.firstName,
            lastName: response.data?.foundUser?.lastName,
            email: response.data?.foundUser?.email,
          },
          response.data.encodedToken
        );
        return response.data;
      }
    } catch (error) {
      const { response } = error;
      return rejectWithValue(response.data?.errors?.[0]);
    }
  }
);

const signUp = createAsyncThunk(
  "auth/signup",
  async (data, { rejectWithValue }) => {
    try {
      const response = await signupService(data);
      if (response.status === 201) {
        setLocalStorage(
          {
            firstName: response.data?.createdUser?.firstName,
            lastName: response.data?.createdUser?.lastName,
            email: response.data?.createdUser?.email,
          },
          response.data.encodedToken
        );
        return response.data;
      }
    } catch (error) {
      const { response } = error;
      return rejectWithValue(response.data?.errors?.[0]);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      clearStorage();
      state.authToken = null;
      state.user = null;
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload.foundUser;
      state.authToken = action.payload.encodedToken;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [signUp.pending]: (state) => {
      state.loading = true;
    },
    [signUp.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload.createdUser;
      state.authToken = action.payload.encodedToken;
    },
    [signUp.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const { reducer, actions } = authSlice;

export default reducer;
export const { logout } = actions;
export { login, signUp };
