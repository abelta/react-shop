// Makes getState available in all reducers through action.
const accessGlobalStore = store => next => action => {
  return next({ ...action, getState: store.getState })
}

export default accessGlobalStore
