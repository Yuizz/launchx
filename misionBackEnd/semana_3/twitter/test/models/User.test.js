const User = require('./../../app/models/User')

describe('Unit Test for User class', ()=>{
  test('Create an User Object', ()=>{
    const user = new User(1, "Yuizz", "Julian", "bio")

    expect(user.id).toBe(1)
    expect(user.username).toBe("Yuizz")
    expect(user.name).toBe("Julian")
    expect(user.bio).toBe("bio")
    expect(user.dateCreated).not.toBeUndefined()
    expect(user.lastUpdated).not.toBeUndefined()
  })

  test('Add getters', ()=>{
    const user = new User(1, "Yuizz", "Julian", "bio")
    
    expect(user.getUsername).toBe("Yuizz")
    expect(user.getBio).toBe("bio")
    expect(user.getDateCreated).not.toBeUndefined()
    expect(user.getLastUpdated).not.toBeUndefined()
  })

  test('Add setters', ()=>{
    const user = new User(1, "Yuizz", "Julian", "bio")
    user.setUsername = "Jugo"
    expect(user.username).toBe("Jugo")

    user.setBio = "New bio"
    expect(user.bio).toBe("New bio")
  })
})
