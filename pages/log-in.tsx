import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
  email: string;
}

export default () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const onValid = async (data: IForm) => {
    if (!loading) {
      const request = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (request.status === 200) {
        router.push("/");
      } else {
        setLoading(false);
      }
    }
  };
  const gotoCreate = () => {
    router.push("/create-account");
  };
  return (
    <div className="w-[100vw] h-[100vh]">
      <div className="bg-[#1DA1F2] flex h-screen w-full items-center justify-around px-10 py-20">
        <div className="h-[40rem] w-[25rem] rounded-md shadow-2xl bg-[#FCFCFC]">
          <div className="p-4">
            <div className="text-center font-bold text-2xl">Login</div>
            <div className="mt-4">
              <form onSubmit={handleSubmit(onValid)}>
                <div className="flex justify-center">
                  <input
                    className="border-b focus:border-[#1DA1F2] focus:outline-none"
                    type="email"
                    {...register("email", {
                      required: "Write your email please.",
                    })}
                    placeholder="Write your email please."
                  />
                  <span>{errors?.email?.message}</span>
                </div>
                <div className="mt-4 flex justify-center">
                  <button
                    className={
                      "rounded-xl px-4 py-1 cursor-pointer text-white " +
                      "bg-[#1DA1F2] hover:bg-blue-500"
                    }
                  >
                    Login
                  </button>
                </div>
              </form>
              <div className="mt-4">
                <hr />
                <div className="mt-2 text-center text-lg">
                  If you don't have an account yet
                </div>
                <div className="mt-2 flex justify-center">
                  <button
                    onClick={gotoCreate}
                    className={
                      "rounded-xl px-4 py-1 cursor-pointer text-white " +
                      "bg-[#1DA1F2] hover:bg-blue-500"
                    }
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
