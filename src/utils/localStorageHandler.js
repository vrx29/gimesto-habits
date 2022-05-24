export const setLocalStorage = (user, token) => {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", JSON.stringify(token));
};

export const getFromLocalStorage = (data) => {
  return JSON.parse(localStorage.getItem(data));
};

export const clearStorage = () => {
  localStorage.clear();
};
