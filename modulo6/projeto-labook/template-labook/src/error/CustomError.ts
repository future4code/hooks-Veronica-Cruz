export class CustomError extends Error{
    constructor(
        statusCode: number,
        message: string
    ){
        super(message)
    }
}

//User

export class InvalidName extends CustomError{
    constructor(){
        super(400, "Invalid Name!")
    }
}

export class InvalidEmail extends CustomError{
    constructor(){
        super(400, "Invalid Email!")
    }
}

export class InvalidPassword extends CustomError{
    constructor(){
        super(400, "Invalid Password! ")
    }
}

//Post

export class InvalidPhoto extends CustomError{
    constructor(){
        super(400, "You don't insert a Photo!")
    }
}

export class InvalidDescription extends CustomError{
    constructor(){
        super(400, "Insert a description for your post!")
    }
}
export class InvalidType extends CustomError{
    constructor(){
        super(400, "Choose NORMAL or EVENT for your type of post!")
    }
}
export class InvalidCreateAT extends CustomError{
    constructor(){
        super(400, "Insert a creation date of your post!")
    }
}

//Friendship

export class InvalidUserId extends CustomError{
    constructor(){
        super(400, "User-Id not found or incorrect! Please, insert a User-Id!")
    }
}

export class InvalidFriendId extends CustomError{
    constructor(){
        super(400, "Friend-Id not found or incorrect! Please, insert a Friend-Id!")
    }
}