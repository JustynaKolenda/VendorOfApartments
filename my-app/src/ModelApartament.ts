export interface Draft { 
    city: string,
    street: string,
    property: number,
    apartment: number,
    price: number,
    type: number,
    description: string 
}

export interface ExtendedApartmentModel extends Draft {
    id: number
}
