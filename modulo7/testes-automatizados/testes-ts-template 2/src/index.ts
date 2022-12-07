export interface User  {
    name: string,
    balance: number
}

export const performPurchase = (user: User, value: number): User | undefined => {
    if(user.balance >= value){
        return {name: user.name, balance: user.balance - value}
    }else{
        return undefined
    }
}