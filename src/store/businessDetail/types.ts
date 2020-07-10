import {Business, Location} from '../businesses/types';

export interface BusinessDetail extends Business {
  is_claimed: boolean;
  display_phone: string;
  location: BusinessDetailLocation;
  photos: string[];
  hours: BusinessHour[];
  transactions: any[];
  special_hours: SpecialBusinessHour[];
}

export interface BusinessDetailLocation extends Location {
  cross_streets: string;
  display_address: string[];
}

export interface BusinessHour {
  open: {
    is_overnight: boolean;
    start: string;
    end: string;
    day: number;
  };
  hours_type: string;
  is_open_now: boolean;
}

export interface SpecialBusinessHour {
  is_overnight: boolean;
  start: string;
  end: string;
  date: string;
  is_closed: null | boolean;
}