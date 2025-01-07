import { UserLatvia } from '../src/UserLatvia'
import { UserEstonia } from '../src/UserEstonia'
import { KYC } from '../src/KYC'

describe('KYC tests', () => {
  let oldEstonianUser: UserEstonia
  let youngEstonianUser: UserEstonia
  let oldLatvianUser: UserLatvia
  let youngLatvianUser: UserLatvia

  beforeEach(() => {
    oldEstonianUser = new UserEstonia('Yakob', 'First', 17)
    youngEstonianUser = new UserEstonia('Yakob', 'First', 15)
    oldLatvianUser = new UserLatvia('Kob', 'First', 20)
    youngLatvianUser = new UserLatvia('Kob', 'First', 17)
  })

  //1 cl
  test('ESTONIA: mobileIDAuthorization default value is undefined', () => {
    expect(oldEstonianUser.mobileIDAuthorization).toBeUndefined()
  })
  test('LATVIA: mobileIDAuthorization default value is undefined', () => {
    expect(oldLatvianUser.activateEParakstsForLatvia).toBeUndefined()
  })

  // 2 and 3 cl
  test('ESTONIA: activateMobileIDForEstonia works', () => {
    KYC.activateMobileIDForEstonia(oldEstonianUser)
    expect(oldEstonianUser.mobileIDAuthorization).not.toBeUndefined()
    expect(oldEstonianUser.mobileIDAuthorization).toBeTruthy()
  })
  test('LATVIA: activateEParakstsForLatvia works', () => {
    KYC.activateEParakstsForLatvia(oldLatvianUser)
    expect(oldLatvianUser.activateEParakstsForLatvia).not.toBeUndefined()
    expect(oldLatvianUser.activateEParakstsForLatvia).toBeTruthy()
  })

  //4 cl
  test('ESTONIA: activateMobileIDForEstonia throw error', () => {
    expect(() => {
      KYC.activateMobileIDForEstonia(youngEstonianUser)
    }).toThrow('User is too young')
  })
  test('LATVIA: activateEParakstsForLatvia throw error', () => {
    expect(() => {
      KYC.activateEParakstsForLatvia(youngLatvianUser)
    }).toThrow('User is too young')
  })
})
