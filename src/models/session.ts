export interface Session {
  id: string
  start: Date
  end: Date
  participantList: Array<string> // list of user ids
}
