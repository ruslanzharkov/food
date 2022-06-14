export const addCommaForStringInCollection = (
  title: string,
  collectionLength: number,
  currentIndex: number,
) => {
  return `${title}${
    collectionLength > 1 && currentIndex !== collectionLength - 1 ? ', ' : ''
  } `;
};
