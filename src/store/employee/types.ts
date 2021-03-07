
export type EmployeePosition = 'manager' | 'marketing-specialist';
export type EmployeeStatus = 'works' | 'fired';


export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';


export interface EmployeeUpdateAction  {
    type: typeof UPDATE_EMPLOYEE,
    payload: Employee
} 

export type EmployeeManageActionTypes =  EmployeeUpdateAction;

export type Employee = {
    id: number,
    companyId?: number,
    userId: number,
    position: EmployeePosition,
    status: EmployeeStatus,
}