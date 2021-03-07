import {Location} from '../location/types';

export const UPDATE_COMPANY = 'UPDATE_COMPANY';


export interface CompanyUpdateAction  {
    type: typeof UPDATE_COMPANY,
    payload: Company
} 

export type CompanyManageActionTypes =  CompanyUpdateAction;

export type Company = {
    id: number,
    name: string,
    address: string,
    city: string,
    location: Location,
    description: string,
    rating: number,
    phone: string,
    logo: string,
}