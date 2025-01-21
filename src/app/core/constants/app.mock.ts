export interface coffeeStores {
  id: number;
  name: string;
  img: string | 'AWS S3 url' | 'base64';
}

export const STORES_BY_PRODUCTS = [
  {
    parentId: 1,
    parentImg: '',
    parentName: 'Poghos',
    coffees: [
      {
        id: 1,
        name: 'Latte',
        subName: '',
        img: '',
        isFavorite: true,
        price: 1200,
        currency: 'AMD'
      }, {
        id: 2,
        name: 'Cappuccino',
        subName: '',
        img: '',
        isFavorite: false,
        price: 1200,
        currency: 'AMD'
      },{
        id: 3,
        name: 'Affogato',
        subName: '',
        img: '',
        isFavorite: true,
        price: 1200,
        currency: 'AMD'
      }, {
        id: 4,
        name: 'Americano',
        subName: '',
        img: '',
        isFavorite: false,
        price: 1200,
        currency: 'AMD'
      },
      {
        id: 5,
        name: 'Iced Tea',
        subName: '',
        img: '',
        isFavorite: true,
        price: 1600,
        currency: 'AMD'
      },
      {
        id: 4,
        name: 'Raf',
        subName: '',
        img: '',
        isFavorite: false,
        price: 1200,
        currency: 'AMD'
      },
      {
        id: 1,
        name: 'Smoothie',
        subName: '',
        img: '',
        isFavorite: true,
        price: 2500,
        currency: 'AMD'
      },
    ],
  },
  {
    parentId: 2,
    parentImg: '',
    parentName: 'Petros',
    coffees: [
      {
        id: 1,
        name: 'Raf',
        subName: '',
        img: '',
        isFavorite: false,
        price: 1200,
        currency: 'AMD'
      },
      {
        id: 2,
        name: 'Raf',
        subName: '',
        img: '',
        isFavorite: false,
        price: 1200,
        currency: 'AMD'
      },
      {
        id: 3,
        name: 'Raf',
        subName: '',
        img: '',
        isFavorite: false,
        price: 1200,
        currency: 'AMD'
      },
      {
        id: 4,
        name: 'Raf',
        subName: '',
        img: '',
        isFavorite: false,
        price: 1200,
        currency: 'AMD'
      },
      {
        id: 5,
        name: 'Raf',
        subName: '',
        img: '',
        isFavorite: false,
        price: 1200,
        currency: 'AMD'
      },
      {
        id: 6,
        name: 'Raf',
        subName: '',
        img: '',
        isFavorite: false,
        price: 1200,
        currency: 'AMD'
      }
    ],
  },
  {
    parentId: 3,
    parentImg: '',
    parentName: 'Martiros',
    coffees: [
      {
        id: 1,
        name: 'Smoothie',
        subName: '',
        img: '',
        isFavorite: true,
        price: 2500,
        currency: 'AMD'
      },
      {
        id: 2,
        name: 'Raf',
        subName: '',
        img: '',
        isFavorite: false,
        price: 1200,
        currency: 'AMD'
      },
      {
        id: 3,
        name: 'Raf',
        subName: '',
        img: '',
        isFavorite: false,
        price: 1200,
        currency: 'AMD'
      },
      {
        id: 4,
        name: 'Raf',
        subName: '',
        img: '',
        isFavorite: false,
        price: 1200,
        currency: 'AMD'
      },
      {
        id: 5,
        name: 'Raf',
        subName: '',
        img: '',
        isFavorite: false,
        price: 1200,
        currency: 'AMD'
      },
      {
        id: 6,
        name: 'Raf',
        subName: '',
        img: '',
        isFavorite: false,
        price: 1200,
        currency: 'AMD'
      },
      {
        id: 3,
        name: 'Raf',
        subName: '',
        img: '',
        isFavorite: false,
        price: 1200,
        currency: 'AMD'
      },
      {
        id: 4,
        name: 'Raf',
        subName: '',
        img: '',
        isFavorite: false,
        price: 1200,
        currency: 'AMD'
      },
      {
        id: 5,
        name: 'Raf',
        subName: '',
        img: '',
        isFavorite: false,
        price: 1200,
        currency: 'AMD'
      },
      {
        id: 6,
        name: 'Raf',
        subName: '',
        img: '',
        isFavorite: false,
        price: 1200,
        currency: 'AMD'
      }
    ],
  }
]
