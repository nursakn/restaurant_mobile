// post? on endpoint

export interface SignInRequestT {
  username: string;
  password: string;
}

export interface SignInResponseT {
  token: string;
  refreshToken: string;
}

// Restaurant Types

export type RestaurantType = 'sushi' | 'pizza' | 'burger' | 'drink' | 'dessert';

export interface RestaurantShort {
  id: number;
  name: string;
  img: string; // base64
  freeTables: number;
  allTables: number;
  type: RestaurantType;
  isPending: boolean;
}

export interface RestaurantsList {
  restaurants: RestaurantShort[];
}

// Table Types

export type TableType = 'round' | 'rectangle';

// pending: Ожидание оплаты или еще чего то

export type TableStatus = 'free' | 'pending' | 'occupied' | 'yours';

export type Table = {
  id: number;
  restaurantId: number;
  free: boolean;
  position: {
    x: number;
    y: number;
  };
  type: TableType;
  status: TableStatus;
  seats: number;
};

// get on endpoints

export interface WeeklyLeadersResponse extends RestaurantsList {}

export interface NewRestaurantsResponse extends RestaurantsList {}

/**
 *  get Restaurant get by id
 *  pictures HZ
 */

export interface Restaurant extends RestaurantShort {
  description: string;
  address: string;
  phone: string;
  tables: Table[];
  pictures: string[]; // base64
}

/**
 * get Restaurant get by id
 * Как то надо привязать вебсокет или лонгполлинг к каждому ресторану из ожидающих
 */

export interface PendingRestaurantsResponse {
  restaurants: RestaurantShort[];
}
