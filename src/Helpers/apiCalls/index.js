import { db } from '../../firebase';

export const getEvents = () => {
  db.collection('events').get()
    .then(querySnapshot => {
      console.log(querySnapshot)
      querySnapshot.forEach(doc => {
        const { name, status } = doc.data()
        console.log(`${doc.id}: name: ${name} status:  ${status}`)
      });
    });
}