export const createHandler = (handler, setCurrentPage) => (event) => {
  handler(event);
  setCurrentPage(1);
};
