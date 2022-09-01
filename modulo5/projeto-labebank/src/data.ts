export type UsersAccounts = 
    {
        nome:string,
        cpf: number,
        nascimento: Date,
        saldo: number,
        extrato: Array<Extrato>
    }
;

export type Extrato = 
{
    valor: number,
    data: Date,
    descricao: string
}

export const accounts: UsersAccounts [] = []