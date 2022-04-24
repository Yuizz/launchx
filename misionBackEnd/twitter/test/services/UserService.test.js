const UserService = require('./../../app/services/UserService')

describe("Test for UserService", ()=>{
  test("1) Create a new user using the UserService", ()=>{
    const user = UserService.create(1, "Yuizz", "Julian")

    expect(user.username).toBe("Yuizz")
    expect(user.name).toBe("Julian")
    expect(user.id).toBe(1)
    expect(user.bio).not.toBeUndefined()
  })

  test("2) Get all user data in a list", ()=>{
    const user = UserService.create(1, "Yuizz", "Julian")
    const userInfoInList = UserService.getInfo(user)

    expect(userInfoInList[0]).toBe(1)
    expect(userInfoInList[1]).toBe("Yuizz")
    expect(userInfoInList[2]).toBe("Julian")
    expect(userInfoInList[3]).toBe("Sin bio")
  })

  test("3) Update username", ()=>{
    const user = UserService.create(1, "Yuizz", "Julian")
    UserService.updateUserUsername(user, "Jugo")

    expect(user.username).toBe("Jugo")
  })

  test("4) Given a list of users return me the list of usernames", ()=>{
    const user1 = UserService.create(1, "yuizz1", "Julian")
    const user2 = UserService.create(2, "yuizz2", "Julian")
    const user3 = UserService.create(3, "yuizz3", "Julian")
    const usernames = UserService.getAllUsernames([user1, user2, user3])

    expect(usernames).toContain("yuizz1") 
    expect(usernames).toContain("yuizz2")
    expect(usernames).toContain("yuizz3")
  })
})
