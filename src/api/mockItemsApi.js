import delay from './delay';
import gearItems from './itemsData';
import persons from './personsData';

class GearItemsApi {
  static getItemsByCategories(category) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const items = [];

        gearItems.forEach((item) => {
          if (item.category === category) {
            items.push(item);
          }
        });

        if (items.length) {
          resolve(items);
        } else {
          reject('No items matched your query');
        }
      }, delay);
    });
  }

  static getItemById(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let returnItem;

        gearItems.forEach((item) => {
          if (item.id.toString() === id) {
            returnItem = Object.assign({}, item);

            persons.forEach((person) => {
              if (person.id === item.owner.personsId) {
                returnItem.owner = person;
              }
            });
          }
        });


        if (returnItem) {
          resolve(returnItem);
        } else {
          reject('No item found.');
        }
      }, delay);
    });
  }

  static getNearbyItems(zipCode) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const returnItem = [];
        gearItems.forEach((item) => {
          const tempItem = Object.assign({}, item);

          persons.forEach((person) => {
            if (person.id === tempItem.owner.personsId) {
              tempItem.owner = person;
            }
          });

          if (tempItem.owner.accountInfo.zipCode == zipCode) {
            returnItem.push(item);
          }
        });

        if (returnItem.length) {
          resolve(returnItem);
        } else {
          reject('No item found.');
        }
      }, delay);
    });
  }
}

export default GearItemsApi;
