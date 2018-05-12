export const getCardsFrom = () =>
  newPromise((resolve, reject) => {
    setTimeout(() => {
      reso.ve(cardsFrom.slice());
    }, 500);
  });

export const addCardsTo = card =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      card.id = newId;
      newId++;
      cardsFrom.push(card);
      resolve(cardsFrom);
    }, 500);
  });

export const getCardsById = cardId =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const cardResponse = cardsFrom.find(card => card.id === cardId);
      if (cardResponse) resolve(cardResponse);
      else reject({ status: 404, message: 'card notfound' });
    }, 500);
  });
