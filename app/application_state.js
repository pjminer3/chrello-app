// board id
// project id
// list id
// card id


const applicationState = {
  boards: {
    byId: {
      board1: {
        id: 'board1',
        project: 'proj1',
        cards: ['comment1', 'comment2'],
      },
      board2: {
        id: 'board2',
        project: 'proj1',
        cards: ['comment3', 'comment4', 'comment5'],
      },
    },
    allIds: ['board1', 'board2'],
  },
  categories: {
    byId: {
      cat1: {
        id: 'cat1',
        boards: ['board1', 'board2'],
      },
    },
    allIds: ['cat1'],
  },
  lists: {
    byId: {
      list1: {
        id: 'list1',
        board: 'board1',
        cards: ['card1', 'card2'],
      },
      list2: {
        id: 'list2',
        board: 'board1',
        cards: ['card3', 'card4', 'card5'],
      },
      list3: {
        id: 'list3',
        board: 'board2',
        cards: ['card6'],
      },
    },
    allIds: ['list1', 'list2', 'list3'],
  },
  cards: {
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
      card4: {
        id: 'card4',
        content: '4 This is my content',
      },
      card5: {
        id: 'card5',
        content: '5 This is my content',
      },
      card6: {
        id: 'card6',
        content: '6 This is my content',
      },
      allIds: ['card1', 'card2', 'card3', 'card4', 'card5', 'card6']
    },
  },

};

console.log(applicationState);