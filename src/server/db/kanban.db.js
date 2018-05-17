let newId;

const cards = [
  {
    Title: 'Grocery Shopping',
    Priority: 'High',
    createdBy: 'Audrey',
    assignedTo: 'Audrey'
  },
  {
    Title: 'Sponges',
    Priority: 'Blocker',
    createdBy: 'Audrey',
    assignedTo: 'Audrey'
  },
  {
    Title: 'Paper Towels',
    Priority: 'Blocker',
    createdBy: 'Audrey',
    assignedTo: 'Audrey'
  }
];

export const getCardsFrom = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(cards); //.slice();
    }, 500);
  });

export const addCardsTo = card =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      card.id = newId;
      newId++;
      cards.push(card);
      resolve(card);
    }, 500);
  });

export const getCardsById = cardId =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const cardResponse = getCardsFrom.find(card => card.id === cardId);
      if (cardResponse) resolve(cardId);
      else reject({ status: 404, message: 'card notfound' });
    }, 500);
  });
