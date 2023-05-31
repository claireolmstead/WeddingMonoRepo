export const getPersonId = (first: string, last: string): string => {
  const personName = (first + last).toLowerCase();
  return personName.replace(/ /g, '');
};
