import Button from "../components/Buttton/Button";
// components import
import MainLayout from "../components/MainLayout/MainLayout";
import Container from "../components/Container/Container";
// components import
import { useState, useContext } from "react";
import { GlobalContext } from "../App";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [inputVal, setInputVal] = useState("");
  const [isError, setIsError] = useState(false);
  const { UserAuthContext } = useContext(GlobalContext);
  const { isAuth, setIsAuth } = UserAuthContext;
  const Userpass = "iop";

  const navigate = useNavigate();
  const validateUser = () => {
    setInputVal("");
    if (inputVal === Userpass) {
      setIsAuth(true);
      setIsError(false);
      localStorage.setItem("isAuth", "true"); //if use localStorage
      navigate("/userhome");
    } else {
      setIsAuth(false);
      setIsError(true);
      localStorage.setItem("isAuth", "false"); //if use localStorage
    }
  };

  return (
    <>
      <MainLayout>
        <Container tailwindClasses={["rounded-md"]}>
          <div>
            <form
              action="#"
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col md:flex-row md:justify-normal gap-3"
            >
              <div className="input_container">
                <input
                  type="text"
                  placeholder="password .."
                  className="px-4 py-2 border rounded-md shadow"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                />
                {isError ? (
                  <p className="text-red-500">Error wrong password !!</p>
                ) : (
                  ""
                )}
              </div>
              <Button handelOnClick={validateUser}>Submit</Button>
            </form>
          </div>
        </Container>
      </MainLayout>
    </>
  );
};

export default Login;
