import { useAppSelector } from "../redux/hook";
import { verifyToken } from "../utils/verifyToken";

export const GetUserInfo = () => {
  const { token } = useAppSelector((state) => state.auth);

  if (token) {
    const decodedData = verifyToken(token);
    console.log(decodedData);
    return decodedData;
  }
};
