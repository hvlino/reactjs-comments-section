export interface Profile {
  email: string
  firstName: string
  id: string
  lastName: string
  name: string
  profilePicURL: string
}

export interface User {
  _profile: Profile
}
