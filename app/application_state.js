// board id
// category id
// list id
// card id


const applicationState = {
  Categories: {
    byId: {
      1: {
        id: 1,
        categoryName: 'Personal Boards',
        boards: [],
      },
      2: {
        id: 2,
        categoryName: 'TMs',
        boards: [['Danny', 1], ['Kirk', 2]],
      },
    },
    allIds: [['Personal Boards', 1], ['TMs', 2]],
  },
  Boards: {
    byId: {
      1: {
        id: 1,
        boardName: 'Danny',
        categoryId: 2,
        lists: [['Chrello Board', 1], ['Toy Problems', 2]],
      },
      Kirk: {
        id: 'Kirk',
        category: 'TMs',
        lists: [],
      },
    },
    allIds: [['Danny', 1], ['Kirk', 2]],
  },
  Lists: [],
};

export default applicationState;
