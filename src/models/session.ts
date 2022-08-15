export interface Session {
    start: Date,
    end: Date,
    participantList: Array<string> // list of user ids
}
