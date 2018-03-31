// board id
// category id
// list id
// card id


const applicationState = {
  Categories: {
    byId: {
      'Personal Boards': {
        id: 'Personal Boards',
        boards: [],
      },
      TMs: {
        id: 'TMs',
        boards: ['Danny', 'Kirk'],
      },
    },
    allIds: ['Personal Boards', 'TMs'],
  },
  Boards: {
    byId: {
      Danny: {
        id: 'Danny',
        category: 'TMs',
        lists: ['Chrello Board', 'Toy Problems'],
      },
      Kirk: {
        id: 'Kirk',
        category: 'TMs',
        lists: [],
      },
    },
    allIds: ['Danny', 'Kirk'],
  },
  Lists: {
    byId: {
      'Chrello Board': {
        id: 'Chrello Board',
        board: 'Danny',
        cards: ['card1', 'card2'],
      },
      'Toy Problems': {
        id: 'Toy Problems',
        board: 'Danny',
        cards: ['card3'],
      },
    },
    allIds: ['list1', 'list2'],
  },
};

export default applicationState;
