export const setToken = token => localStorage.setItem("djlun-Token", token);
export const getToken = () => localStorage.getItem("djlun-Token");
export const removeToken = () => localStorage.removeItem("djlun-Token");
