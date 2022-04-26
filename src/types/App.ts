// post? on endpoint

export interface SignInRequestT {
  username: string;
  password: string;
}

export interface SignInResponseT {
  token: string;
}

// Restaurant Types

export type RestaurantType = 'sushi' | 'pizza' | 'burger' | 'drink' | 'dessert';

export interface RestaurantShort {
  id: number;
  name: string;
  img: string; // base64
  freeTables: number;
  allTables: number;
  isPending: boolean;
  address: string;
  phone: string;
  info: string;
  rating: string;
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
  restaraunt_id: number;
  free: boolean;
  coord_x: string;
  coord_y: string;
  type: TableType;
  status: TableStatus;
  num_of_person: number;
  floor: number;
  height: number;
  width: number;
};

// get on endpoints

export interface WeeklyLeadersResponse extends RestaurantsList {}

export interface NewRestaurantsResponse extends RestaurantsList {}

/**
 *  get Restaurant get by id
 *  pictures HZ
 */

export interface RestaurantI extends RestaurantShort {
  description: string;
  address: string;
  phone: string;
  tables: Table[];
  freeTables: number;
  id: number;
  info: string;
  pictures: string[]; // base64
  rating: string;
}

/**
 * get Restaurant get by id
 * Как то надо привязать вебсокет или лонгполлинг к каждому ресторану из ожидающих
 */

export interface PendingRestaurantsResponse {
  restaurants: RestaurantShort[];
}
