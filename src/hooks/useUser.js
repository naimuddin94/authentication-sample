import { useContext } from "react";
import { UserContext } from "../context/AuthProvider";

const useUser = () => {
  return useContext(UserContext);
};

export default useUser;
