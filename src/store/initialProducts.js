import { nanoid } from 'nanoid';

 const initArr = [ {
  name: 'Mr. Squeekie Chew Toy',
  description: 'Squeek to your hearts content!',
  category: 'dog toys',
  price: 3.50,
  inventory: 30,
  id: nanoid()
},
{
  name: 'Doggie Frisbee',
  description: 'Chase it down. Bring it back. Repeat!',
  category: 'dog toys',
  price: 7.00,
  inventory: 50,
  id: nanoid()
},
{
  name: 'Miss Mousey Toy',
  description: 'Take it out! There\'s a mouse in the house!',
  category: 'cat toys',
  price: 4.00,
  inventory: 30,
  id: nanoid()
},
{
  name: 'Scratch \'n Stretch',
  description: 'Doins a big stretch! ',
  category: 'cat toys',
  price: 8.00,
  inventory: 50,
  id: nanoid()
}];

export default initArr;