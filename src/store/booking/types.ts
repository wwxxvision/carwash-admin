import {Service} from '../service/types';


export type BookingStatus = 'pending' | 'accepted' | 'cancaled' | 'processing' | 'completed';

export type Booking = {
    id: number,
    companyId: number,
    userId: number,
    services: Array<Service>,
    duration: number,
    total: number,
    note: string,
    status: BookingStatus,
}

