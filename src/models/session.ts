export interface Session {
  id: string
  start: Date
  end: Date
  participantMap: Map<string, string> // map of book giver -> recipient
}
