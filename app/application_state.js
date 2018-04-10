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
  Lists: {
    byId: {
      1: {
        id: 1,
        listName: 'Chrello Board',
        boardId: 1,
        cards: [1, 2], // might have to add card content here as well
      },
      2: {
        id: 2,
        listName: 'Toy Problems',
        boardId: 'Danny',
        cards: [3],
      },
    },
    allIds: [['Chrello Board', 1], ['Toy Problems', 2],
  },
  Cards: {
    byId: {
      1: {
        id: 1,
        cardContent: 'Card1'
      },
      2: {
        id: 2,
        cardContent: 'Card2',
      },
      3: {
        id: 3,
        cardContent: 'Card3',
      }
    },
    allIds: [1, 2, 3] 
  }
};

export default applicationState;
