export const createReducer = (initialState, fnMap) => {
  return (state = initialState, { type, payload }) => {
    console.log('fnMap', fnMap)
    // if the handler does exist in the fnMap then
    // handler will be undefined 
    const handler = fnMap[type];

    console.log('handler ', handler)

    return handler ? handler(state, payload) : state
  }
}