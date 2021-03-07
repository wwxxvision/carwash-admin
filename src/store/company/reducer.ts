import { Company, CompanyManageActionTypes } from './types';


const initialState: Company = {
    id: 0,
    name: '',
    city: '',
    address: '',
    location: {
        lan: 0,
        lon: 0,
    },
    description: '',
    rating: 0,
    phone: '',
    logo: '',
}

export  function company(state: Company = initialState, action: CompanyManageActionTypes) {
    switch (action.type) {
        case 'UPDATE_COMPANY':
            return {
                company: action.payload
            }
        default:
            return state;
    }
    
}