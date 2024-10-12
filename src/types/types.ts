// types/types.ts

export interface Product {
    id: number;
    name: string;
    price: number;
    metadata: {
      increment: number; // Adjust as necessary
    };
  }
  
  export interface CartItem {
    productId: number;
    quantity: number;
  }
  
  export interface Favorite {
    productId: number;
  }
  