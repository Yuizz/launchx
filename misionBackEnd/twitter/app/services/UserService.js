const User = require('./../models/User')

class UserService{
  static create(id, username, name){
    return new User(id, username, name, "Sin bio")
  }

  static getInfo(user){
    const userList = [
      user.id,
      user.getUsername, 
      user.getName,
      user.getBio
    ]

    return userList
  }

  static updateUserUsername(user, newUsername){
    user.setUsername = newUsername
  }

  static getAllUsernames(usersList){
    const usernamesList = []

    usersList.forEach(user =>{
      usernamesList.push(user.username)
    })

    return usernamesList
  }
}

module.exports = UserService
