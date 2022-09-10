

export type Users = {
    id: number,
    username: string,
    nickname: string,
    email: string
}

export type Task = {
    taskId: number,
    title: string,
    description: string, 
    limitDate: string,
    taskStatus: string,
    creatorUserId: number,
    creatorUserNickname: string
}