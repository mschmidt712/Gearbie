import delay from './delay';
import personsData from './personsData';

class UserApi {
  static loginUser(loginUser) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let user;
        personsData.forEach((person) => {
          if (person.accountInfo.username === loginUser.username &&
            person.accountInfo.password === loginUser.password) {
            user = person;

            if (document.cookie.indexOf('username') === -1) {
              const today = new Date();
              const tomorrow = today.setDate(today.getDate() + 1);
              document.cookie = `username=${user.accountInfo.username}; expires=${tomorrow}`;
            }
          }
        });

        if (user) {
          resolve(Object.assign({}, user));
        } else {
          reject('Invalid Username or Password. Please try again.');
        }
      }, delay);
    });
  }

  static logoutUser(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.cookie = `username=${user.accountInfo.username}; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
        resolve(Object.assign({}, user));
      }, delay);
    });
  }

  static checkUser() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let user;

        if (document.cookie.indexOf('username') > -1) {
          const regEx = /(username=)\w+/g;
          const usernameCookie = document.cookie.match(regEx);
          const username = usernameCookie[0].replace('username=', '');

          personsData.forEach((person) => {
            if (person.accountInfo.username === username) {
              user = person;
            }
          });

          this.loginUser(user.accountInfo);
        }

        if (user) {
          resolve(Object.assign({}, user));
        } else {
          reject('No user logged in.');
        }
      }, delay);
    });
  }

  static updateUser(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let updatedPerson;

        personsData.forEach((person) => {
          if (person.id == user.id) {
            updatedPerson = Object.assign({}, user);
          }
        });

        if (updatedPerson) {
          resolve(updatedPerson);
        } else {
          reject('User not found');
        }
      }, delay);
    });
  }
}

export default UserApi;
