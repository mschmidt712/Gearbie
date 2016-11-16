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
            user = person.accountInfo;

            if (document.cookie.indexOf('username') === -1) {
              const today = new Date();
              const tomorrow = today.setDate(today.getDate() + 1);
              document.cookie = `username=${user.username}; expires=${tomorrow}`;
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
        document.cookie = `username=${user.username}; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
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
              user = person.accountInfo;
            }
          });

          this.loginUser(user);
        }

        if (user) {
          resolve(Object.assign({}, user));
        } else {
          reject('No user logged in.');
        }
      }, delay);
    });
  }
}

export default UserApi;
