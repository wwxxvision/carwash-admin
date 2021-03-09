import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Company } from './types';

const initialState: Company = {
    id: 1,
    name: 'Автомойка крутая',
    city: 2,
    address: 'Ворошилова',
    description: 'Лучшая автомойка на районе',
    rating: 5,
    phone: '+7(904)-187-23-25',
    logo: 'https://image.freepik.com/free-vector/car-wash-logo-template_59362-57.jpg',
}

const companySlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        updateCompanyLogo(state, action: PayloadAction<{ logo: string }>) {
            state.logo = action.payload.logo;
        }
    },
})

export const { updateCompanyLogo } = companySlice.actions

export default companySlice.reducer;