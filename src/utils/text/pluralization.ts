export const pluralize = (text: string, nb: number) => {
  return !nb ? text : text + 's';
};
