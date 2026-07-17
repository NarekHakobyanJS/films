interface IGetGenresResposneType {
    genres : Array<IGenre>
}

interface IGenre {
    id: number
    name: string
}

export type {IGenre, IGetGenresResposneType}