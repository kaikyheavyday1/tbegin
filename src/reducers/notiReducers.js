const notiReducers = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_NOTI':
      return state.concat([action.data])
    default:
      return state
  }
}
export default notiReducers
