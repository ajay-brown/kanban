let newId;

export const getCardsFrom = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(getCardsFrom); //.slice();
    }, 500);
  });

export const addCardsTo = card =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      card.id = newId;
      newId++;
      getCardsFrom.push(card);
      resolve(getCardsFrom);
    }, 500);
  });

export const getCardsById = cardId =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const cardResponse = getCardsFrom.find(card => card.id === cardId);
      if (cardResponse) resolve(cardResponse);
      else reject({ status: 404, message: 'card notfound' });
    }, 500);
  });
