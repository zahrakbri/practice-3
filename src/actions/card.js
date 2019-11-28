export const saveCards = (cards) => ({
  type: 'SAVE_CARDS',
  payload: cards
})

export const computeRandomCard = () => ({
  type: 'COMPUTE_RANDOM_CARD'
})