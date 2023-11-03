import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
  name: string;
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
      setLoading(true);
      const request = await fetch("/api/users/create-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (request.status === 200) {
        alert("Account already exists! Please log in!");
      }
      if (request.status === 201) {
        alert("Account created! Please log in!");
      }
      if (request.status !== 405) {
        router.push("/login");
      }

      setLoading(false);
    }
  };
  const gotoLogin = () => {
    router.push("/log-in");
  };
  return (
    <div className="w-[100vw] h-[100vh]">
      <div className="bg-[#1DA1F2] flex h-screen w-full items-center justify-around px-10 py-20">
        <div className="h-[40rem] w-[25rem] rounded-md shadow-2xl bg-[#FCFCFC]">
          <div className="p-4">
            <div className="text-center font-bold text-2xl">Create Account</div>
            <div className="mt-4">
              <form className=" space-y-4" onSubmit={handleSubmit(onValid)}>
                <div className="space-x-2 flex justify-center">
                  <input
                    className="border-b focus:border-[#1DA1F2] focus:outline-none"
                    placeholder="Write your name please."
                    type="text"
                    {...register("name", {
                      required: "Write your name please.",
                    })}
                  />
                  <span>{errors?.name?.message}</span>
                </div>
                <div className="space-x-2 flex justify-center">
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
                <div className="flex justify-center">
                  <button
                    className={
                      "rounded-xl px-4 py-1 cursor-pointer text-white " +
                      "bg-[#1DA1F2] hover:bg-blue-500"
                    }
                  >
                    Create Account
                  </button>
                </div>
              </form>

              <div className="mt-4">
                <hr />
                <div className="mt-2 text-center text-lg">
                  If you already have an account
                </div>
                <div className="mt-2 flex justify-center">
                  <button
                    onClick={gotoLogin}
                    className={
                      "rounded-xl px-4 py-1 cursor-pointer text-white " +
                      "bg-[#1DA1F2] hover:bg-blue-500"
                    }
                  >
                    Login
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
