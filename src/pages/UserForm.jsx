import React, { forwardRef } from "react";
import { useForm } from "react-hook-form";

import Button from "../components/Buttton/Button";

const InputContainer = ({ children }) => {
  return <div className="grid items-center">{children}</div>;
};

const Input = ({ register, validation = {}, ...rest }) => {
  return (
    <input
      className="border px-2 py-1 rounded-md"
      {...rest}
      {...register(rest.name, validation)}
    />
  );
};

const Input2 = forwardRef((props, ref) => {
  return (
    <input
      className="border px-2 py-1 rounded-md shadow focus:border-gray-300 outline-none"
      {...props}
      ref={ref}
    />
  );
});

const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("form data ==> ", data);
  };

  console.log("Errors in form ===> ", errors);
  return (
    <>
      <div>
        <form
          action="#"
          className="flex flex-col gap-2 mx-auto w-fit border px-4 mt-2 py-2 rounded-md shadow"
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputContainer>
            <label htmlFor="name" className="font-semibold">
              User Name:{" "}
            </label>

            <Input2
              type="text"
              placeholder="enter name"
              {...register("uname", { required: "Name is required" })}
            />
            {errors.uname ? (
              <p className="text-sm text-red-500">{errors.uname.message}</p>
            ) : null}
          </InputContainer>
          <InputContainer>
            <label htmlFor="email" className="font-semibold">
              User Mail:{" "}
            </label>

            <Input2
              type="email"
              placeholder="enter email"
              {...register("umail", { required: "Email is required" })}
            />
            {errors.umail ? (
              <p className="text-sm text-red-500">{errors.umail.message}</p>
            ) : null}
          </InputContainer>

          <InputContainer>
            <label htmlFor="pass" className="font-semibold">
              Password:{" "}
            </label>
            <input
              className="border px-2 py-1 rounded-md"
              type="password"
              {...register("pass")}
              placeholder="enter password"
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="gender" className="font-semibold">
              Gender:
            </label>
            <select
              className="border rounded-md px-2 py-1 shadow"
              {...register("gender", {
                validate: (val) => {
                  if (val === "default") {
                    return "Select Gender";
                  }
                },
              })}
            >
              <option value="default">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender ? (
              <p className="text-sm text-red-500">{errors.gender.message}</p>
            ) : null}
          </InputContainer>
          <div className="flex justify-center">
            <Button varient={"primary"}>Submit</Button>
          </div>
          <div className="flex justify-center items-center gap-3">
            <Input2
              type="checkbox"
              {...register("tc", { required: "please check T&C" })}
            />
            <span className="text-xs">
              I agree to T&C
              {errors.tc ? (
                <p className="text-sm text-red-500">{errors.tc.message}</p>
              ) : null}
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserForm;
