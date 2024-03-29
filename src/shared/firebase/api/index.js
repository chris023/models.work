import { db } from '../config/firebase';

const getEvents = () => {
 return db.collection('events')
    .get()
    .then(querySnapshot => {
      const events = []
      querySnapshot.forEach(doc => {
        events.push({[doc.id]: doc.data()})
      }); 
      return events
    })
};

export {
  getEvents
}