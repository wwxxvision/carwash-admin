import {UPDATE_COMPANY, CompanyManageActionTypes, Company } from './types';


export function updateCompany(company: Company): CompanyManageActionTypes {
    return {
        type: UPDATE_COMPANY,
        payload: company
    }
}