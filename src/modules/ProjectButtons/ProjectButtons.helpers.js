export const getHrefForButtons = (index, list) => {
  const getPrevIndex = index === 0 ? '' : list[index - 1].href;
  const getNextIndex = index === list.length - 1 ? '' : list[index + 1].href;
  return {
    prevHref: getPrevIndex,
    nextHref: getNextIndex,
  };
};
