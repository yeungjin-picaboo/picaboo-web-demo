import { authRequest } from "src/utils/request/AuthRequest";

export const createPictureFn = async (data) => {
  const response = await authRequest.post("picture", data);
  return response.data;
};
