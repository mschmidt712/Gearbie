import delay from './delay';

const databaseCategories = [{
  imgSrc: '/assets/hiking.jpg',
  altText: 'hiking',
  title: 'Trail Hobbies',
  link: '/category/hiking',
}, {
  imgSrc: '/assets/skiing.jpg',
  altText: 'skiing',
  title: 'Snow Sports',
  link: '/category/snow_sports',
}, {
  imgSrc: '/assets/biking.jpg',
  altText: 'biking',
  title: 'Biking',
  link: '/category/biking',
}, {
  imgSrc: '/assets/climbing.jpg',
  altText: 'climbing',
  title: 'Climbing',
  link: '/category/climbing',
}];

class CategoryApi {
  static getAllCategories() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (databaseCategories) {
          resolve(databaseCategories);
        } else {
          reject('No categories present.');
        }
      }, delay);
    });
  }
}

export default CategoryApi;
