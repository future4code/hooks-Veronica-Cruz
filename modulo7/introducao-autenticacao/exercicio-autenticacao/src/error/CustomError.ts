export class CustomError extends Error{
    constructor(
        statusCode: number,
        message: string
       
    ){
        super(message)
    }
 
}

export class InvalidEmail extends CustomError{
    constructor(){
    super(400, "Invalid Email!")
    }
}

export class InvalidPassword extends CustomError{
    constructor(){
    super(400, "Invalid Password.Please enter a password with at least 6 characters!")
    }
}

export class InvalidName extends CustomError{
    constructor(){
    super(400, "Invalid Name.Please enter at least 4 characters!")
    }
}

export class UserNotFound extends CustomError{
    constructor(){
    super(404, "User not found!")
    }
}