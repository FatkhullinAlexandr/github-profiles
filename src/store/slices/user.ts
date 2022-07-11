import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUser } from '../../models';

interface UserState {
    user: null | IUser;
    loading: boolean;
    error: string;
}

const initialState: UserState = {
    user: null,
    loading: false,
    error: '',
};

export const searchUser = createAsyncThunk(
    'user/searchUser',
    async (userLogin: string, thunkAPI) => {
        try {
            const resp = await axios.get<IUser>(`https://api.github.com/users/${userLogin}`);
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue('User is not found :(');
        }
    },
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [searchUser.pending.type]: (state) => {
            state.loading = true;
            state.error = '';
            state.user = null;
        },
        [searchUser.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.loading = false;
            state.error = '';
            state.user = action.payload;
        },
        [searchUser.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
            state.user = null;
        },
    },
});

export default userSlice.reducer;
