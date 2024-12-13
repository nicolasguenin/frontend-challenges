export const excerpt = (text: string, nb = 100) => {
  return text.length <= nb ? text : text.slice(0, nb) + '…';
};
