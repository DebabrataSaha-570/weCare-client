// hooks/useUserRole.js
import { useState, useEffect } from "react";
import { useAppSelector } from "../../redux/hook";
import { verifyToken } from "../../utils/verifyToken";
type DecodedToken = {
  role?: string;
};

export const useUserRole = () => {
  const [userRole, setUserRole] = useState("");
  const { token } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      const decodedData = verifyToken(token) as DecodedToken;
      const role = decodedData?.role || "";
      setUserRole(role);
    }
  }, [token]);

  return userRole;
};
