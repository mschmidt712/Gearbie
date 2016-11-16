import delay from './delay';
import persons from './personsData';
import gearItems from './itemsData';

class BookingApi {
  static bookItem(itemId, personsId, startDate, endDate) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let gearItem;
        let activePerson;

        gearItems.forEach((item) => {
          if (item.id === itemId) {
            for (let i = startDate; i <= endDate; i.setDate(i.getDate() + 1)) {
              item.disabledDates.push(new Date(i));
            }
            gearItem = Object.assign({}, item);
          }
        });

        persons.forEach((person) => {
          if (person.id === personsId) {
            person.bookingItems.push({
              gearId: itemId,
              dates: [startDate, endDate],
            });
          }
          activePerson = Object.assign({}, person);
        });

        if (gearItem) {
          resolve([gearItem, activePerson]);
        } else {
          reject('No item found.');
        }
      }, delay);
    });
  }
}

export default BookingApi;
