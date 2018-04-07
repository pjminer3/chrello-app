export const NEW_LIST = 'NEW_LIST';

export const createNewList = (listName, boardName) => {
    return {
      type: NEW_LIST,
      payload: { listName, boardName },
    };
  };
  