import { UserEstonia } from './UserEstonia'
import { UserLatvia } from './UserLatvia'

export class Contract {
  title: string

  constructor(title: string) {
    this.title = title
  }
  static sign1(user: UserEstonia): boolean {
    if (user.mobileIDAuthorization == true) return (user.signed = true)
    else return (user.signed = false)
  }
  static sign2(user: UserLatvia): boolean {
    if (user.activateEParakstsForLatvia == true) return (user.signed = true)
    else return (user.signed = false)
  }
}
