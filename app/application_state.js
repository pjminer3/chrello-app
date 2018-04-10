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
        boards: ['Danny', 'Kirk'],
      },
    },
    allIds: [[1, 'Personal Boards'], [2, 'TMs']],
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
