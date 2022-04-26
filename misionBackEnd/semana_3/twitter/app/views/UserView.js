const UserService = require('./../services/UserService')

class UserView{

  static createUser(userObj){
    if(userObj == null){
      return {'error':'payload no existe'}
    }

    if(userObj.username==null){return {error: 'necesitan tener un valor válido'}}
    if(userObj.name==null){return {error: 'necesitan tener un valor válido'}}
    if(userObj.id==null){return {error: 'necesitan tener un valor válido'}}

    const user = UserService.create(userObj.id, userObj.username, userObj.name)
    return user
  }
}

module.exports = UserView
