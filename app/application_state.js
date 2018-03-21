// board id
// project id
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
        lists: ['list1', 'list2'],
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
      list1: {
        id: 'list1',
        board: 'Danny',
        cards: ['card1', 'card2'],
      },
      list2: {
        id: 'list2',
        board: 'Danny',
        cards: ['card3'],
      },
    },
    allIds: ['list1', 'list2'],
  },
  Cards: {
    byId: {
      card1: {
        id: 'card1',
        content: '1 This is my content',
      },
      card2: {
        id: 'card2',
        content: '2 This is my content',
      },
      card3: {
        id: 'card3',
        content: '3 This is my content',
      },
    },
    allIds: ['card1', 'card2', 'card3'],
  },

};

export default applicationState;
