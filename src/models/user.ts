export interface User {
    id: string
    name: string
    email: string
    active: boolean
    bookList: Array<string>
    antiGenre: Array<string>
    bookRecipient: string // user id of other user
}
