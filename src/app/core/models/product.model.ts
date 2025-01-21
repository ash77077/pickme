export interface IStoreByCoffees {
  parentId: number;
  parentName: string;
  parentImg: string;
  coffees: ICoffees
}

export interface IStore {
  id: string;
  _id: string;
  name: string;
  description: string;
  logo: string;
  rating: number;
}

export interface ICoffees {
  id: string;
  name: string;
  subName: string;
  img: string;
  isFavorite: boolean;
  price: number;
  currency: string;
}

export interface IAddress {
  id: string;
  name: string;
  storeId: string;
  location: string;
  open: boolean;
  workingHours: string;
}
