
export type UserRole = 'employee' | 'company-owner';

export type User = {
    id: number,
    name: string,
    city: number,
    phone: string,
    role: UserRole,
    companyId: number,
    created: Date,
    lastLoginDate: Date,
}