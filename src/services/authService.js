import apiInstance from "../utils/axios";

export const postSignUp = async (data) =>
  await apiInstance.post("/sign-up", data).then((res) => res.data);
export const postSignIn = async (data) =>
  await apiInstance.post("/sign-in", data).then((res) => res.data);
