const init = {
  cards: [],
  selectedCard: {}
}

const cards = (state = init , action) => {
  let rnd
  switch (action.type) {
    case 'SAVE_CARDS':
      rnd = Math.floor(Math.random() * 4)
      return {
        ...state,
        cards: action.payload,
        selectedCard: action.payload[rnd]
      }

    case 'COMPUTE_RANDOM_CARD':
      rnd = Math.floor(Math.random() * 4)
      return {
        ...state,
        selectedCard: state.cards[rnd]
      }

    default:
      return state
  }
}

export default cards
