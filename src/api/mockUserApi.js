import delay from './delay';

const databaseUsers = [{
  username: 'MarieS',
  password: 'helloWorld',
  name: 'Marie',
  imgSrc: '/assets/users/Marie.jpg',
  zipCode: 80226,
}, {
  username: 'JackS',
  password: 'Gonzo',
  name: 'Jack',
  imgSrc: '/assets/users/Jack.jpg',
  zipCode: 80226,
}];

class UserApi {
  static loginUser(loginUser) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let user = {};
        databaseUsers.forEach((databaseUser) => {
          if (databaseUser.username === loginUser.username &&
            databaseUser.password === loginUser.password) {
            user = databaseUser;
          } else if (databaseUser.username === loginUser.username &&
            databaseUser.password !== loginUser.password) {
            reject('Invalid Username or Password. Please Try Again.');
          }
        });

        resolve(Object.assign({}, user));
      }, delay);
    });
  }
}

export default UserApi;
