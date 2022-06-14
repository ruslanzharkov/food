import {Business} from '../store/businesses/types';

export const filterBusinessesByPriceType = (
  businesses: Business[],
  priceType: string,
) => {
  return businesses.filter((business) => {
    return business.price === priceType;
  });
};
