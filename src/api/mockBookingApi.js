import moment from 'moment';
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
          if (item.id == itemId) {
            gearItem = Object.assign({}, item);
            const currDay = startDate.clone().startOf('day');
            const lastDay = endDate.clone().startOf('day');

            while (currDay.diff(lastDay) <= 0) {
              gearItem.disabledDates.push(currDay.clone());
              currDay.add(1, 'days');
            }
          }
        });

        persons.forEach((person) => {
          if (person.id === personsId) {
            activePerson = Object.assign({}, person);

            activePerson.bookingItems.push({
              gearId: itemId,
              dates: [startDate, endDate],
            });
          }
        });

        if (gearItem) {
          resolve({
            item: gearItem,
            user: activePerson,
          });
        } else {
          reject('Booking failed. Please try again.');
        }
      }, delay);
    });
  }
}

export default BookingApi;
