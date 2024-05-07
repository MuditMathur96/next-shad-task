export type prompt={
    name:string,
    id:string,
    createdAt:string
}

export type board={
    id:string,
    name:string,
    createdAt:string,
    bcfBoards:board[] | undefined,
    bcfs:board[] | undefined
}