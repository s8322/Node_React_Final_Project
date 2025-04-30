
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ApartmentService from '../Components/apartments/ApartmentService'; // עדכן את הנתיב לפי מבנה התיקיות שלך

export const fetchApartments = createAsyncThunk('apartments/fetchApartments', async () => {
    const response = await ApartmentService.getApartmentsData();
    return response;
});

const apartmentSlice = createSlice({
    name: 'apartments',
    initialState: {
        items: [],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchApartments.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchApartments.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(fetchApartments.rejected, (state) => {
                state.loading = false;
            });
    },
});

export default apartmentSlice.reducer;