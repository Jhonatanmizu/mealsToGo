export interface RestaurantData {
  name: string;
  icon?: string;
  photos?: string[];
  address?: string;
  isOpenNow?: boolean;
  rating?: number;
  isClosed?: boolean;
}
