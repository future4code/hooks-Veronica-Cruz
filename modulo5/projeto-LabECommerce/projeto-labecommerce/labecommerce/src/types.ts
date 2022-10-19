export type Users = {
    id: number,
    name: string,
    email: string,
    password: string
}

export type Product = {
    id: number,
    name: string,
    price: number,
    image_url: string
}

export type Purchase = {
    id: number,
    user_id: number,
    product_id: number,
    quantity: number,
    total_price: number
}