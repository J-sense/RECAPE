const logger = (state) => (next) => (action) => {
  console.log(state.getState());
  console.log(action.type);

  const result = next(action);
  console.log(action.type);
  console.log(state.getState());
  return result;
};
export default logger;
