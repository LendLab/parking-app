import { useMutation, useQuery } from "@apollo/client";
import { LOGIN, LOGOUT } from "./graphql-mutations";
import { ME } from "./graphql-queries";

export const useLogin = () => {
  const [login, result] = useMutation(LOGIN);

  return [login, result];
};

export const useMe = () => {
  const result = useQuery(ME);

  return result;
};

export const useLogout = () => {
  const [logout, result] = useMutation(LOGOUT);

  return [logout, result];
};
