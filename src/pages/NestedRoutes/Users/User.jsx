
import { useParams } from "react-router-dom";
const User = () => {
  const {id} = useParams();
  return (
    <>
     User page of {id}
    </>
  );
};

export default User;
