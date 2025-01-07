import React, {
  useRef,
  useState,
  forwardRef,
  useEffect,
  useImperativeHandle,
} from "react";

// components import
import MainLayout from "../../components/MainLayout/MainLayout";
import Container from "../../components/Container/Container";
// components import

import Button from "../../components/Buttton/Button";
import "./style.css";

// const Input = forwardRef((props, ref) => {

//   return <input {...props} ref={ref} />;
// });

const Input = forwardRef((prop, ref) => {
  const [shake, shouldShake] = useState(false);

  const apiRef = useRef(null);

  const shakeClass = shake ? "input-shake" : "";

  const api = () => {
    // console.log('running api ');
    return {
      focus: () => {
        apiRef.current.focus();
      },
      shake: () => {
        shouldShake(true);
      },
      value: () => {
        console.log(
          "apiRef.curren.value in API value ==> ",
          apiRef.current.value
        );
      },
    };
  };

  useImperativeHandle(ref, api, []);
  // console.log('apiRef ===> ', apiRef);
  return (
    <input
      {...prop}
      className={`${prop.className} ${shakeClass}`}
      ref={apiRef}
      onAnimationEnd={() => {
        shouldShake(false);
      }}
    />
  );
});

const RefProblem = () => {
  const inputRef = useRef(null);
  const addRef = useRef(null);
  const testRef = useRef(null);
  const handleOnClick = () => {
    inputRef.current.shake();
    inputRef.current.focus();
    addRef.current.shake();
    // console.log('inputRef value ===> ', inputRef.current.value());
  };
  console.log("RefProblem re-render");
  return (
    <>
      <MainLayout>
        <Container>
          <div className="flex flex-col gap-4 ">
            <div>
              <label>Name: </label>
              <Input
                type="text"
                className={`border`}
                placeholder="name"
                ref={inputRef}
              />
            </div>
            <div>
              <label>add: </label>
              <Input
                type="text"
                className={`border`}
                placeholder="add"
                ref={addRef}
              />
            </div>

            <div>
              <input
                type="text"
                className={`border`}
                placeholder="test"
                ref={testRef}
              />
            </div>

            <div>
              <Button onClick={handleOnClick}>Submit</Button>
            </div>
          </div>
        </Container>
      </MainLayout>
    </>
  );
};

export default RefProblem;
