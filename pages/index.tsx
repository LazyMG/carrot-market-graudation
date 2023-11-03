import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import useMutation from "../lib/useMutation";
import { Tweet, User } from "@prisma/client";
import Link from "next/link";
import { handleClassName } from "../lib/utils";

interface TweetWithUser extends Tweet {
  user: User;
}

interface FormData {
  tweet: string;
}

interface postTweetMutation {
  ok: boolean;
  tweet: Tweet;
}

interface getTweetData {
  ok: boolean;
  tweets: TweetWithUser[];
}

export default () => {
  const router = useRouter();
  const { data, error } = useSWR<User>("/api/users/me");
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [postTweet, { loading }] = useMutation<postTweetMutation>(
    "/api/tweets"
  );
  const { data: tweets, mutate } = useSWR<getTweetData>("api/tweets");

  useEffect(() => {
    if (error) {
      router.replace("/create-account");
    }
    mutate();
  }, [router, error, loading, mutate]);

  if (!data) {
    return <div />;
  }

  const logout = async () => {
    if (window.confirm("Are you sure?")) {
      await fetch("/api/users/login", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(""),
      });
      router.replace("/create-account");
    }
  };

  const alertProfile = () => {
    window.alert(`Welcome ${data.name}! Your email is ${data.email}`);
  };

  const onValid = (formData: FormData) => {
    if (formData.tweet === "") return;
    postTweet(formData);
    mutate();
    reset();
  };

  return (
    <div className="w-[100vw] h-[100vh]">
      <div className="bg-[#1DA1F2] flex h-screen w-full items-center justify-around px-10 py-20">
        <div className="h-[40rem] w-[25rem] rounded-md shadow-2xl bg-[#FCFCFC]">
          <div
            className="p-4 grid"
            style={{ gridTemplateRows: "0.5fr 2fr 5fr" }}
          >
            <div className="">
              <button onClick={alertProfile}>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-10 h-10 text-[#1DA1F2]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
              <button onClick={logout}>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-10 h-10 text-[#1DA1F2]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </button>
            </div>
            <div className="flex justify-center">
              <div className="px-3 py-2 w-[100%] border h-fit rounded-lg">
                <form
                  className="flex flex-col"
                  onSubmit={handleSubmit(onValid)}
                >
                  <textarea
                    className="h-24 rounded-md focus:outline-none resize-none"
                    {...register("tweet", { minLength: 2 })}
                    placeholder="What's happening?"
                  />
                  <div className="flex justify-between mt-3">
                    <div className="flex space-x-2">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="w-6 h-6 text-[#1DA1F2] cursor-pointer"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                      </svg>
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="w-6 h-6 text-[#1DA1F2] cursor-pointer"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                        />
                      </svg>
                      <svg
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="w-6 h-6 text-[#1DA1F2] cursor-pointer"
                      >
                        <path
                          clipRule="evenodd"
                          fillRule="evenodd"
                          d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                        />
                      </svg>
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="w-6 h-6 text-[#1DA1F2] cursor-pointer"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                        />
                      </svg>
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="w-6 h-6 text-[#1DA1F2] cursor-pointer"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </div>
                    <input
                      className={
                        "rounded-xl px-4 py-1 cursor-pointer text-white " +
                        handleClassName(
                          loading,
                          "bg-blue-200",
                          "bg-[#1DA1F2] hover:bg-blue-500"
                        )
                      }
                      type="submit"
                      value={"Tweet"}
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="">
              <div
                className="h-[300px] mt-4 flex-col space-y-2 overflow-y-scroll"
                style={{ scrollbarWidth: "none" }}
              >
                {tweets?.tweets?.map((tweet) => (
                  <Link href={`/tweet/${tweet.id}`} key={tweet.id}>
                    <div className="px-2 py-5 flex flex-col border rounded-lg cursor-pointer">
                      <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 rounded-full bg-slate-300"></div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <div className="text-lg font-bold">
                              {tweet.user.name}
                            </div>
                            <div className="text-xs text-slate-400">
                              {tweet.user.email}
                            </div>
                          </div>
                          <div className="text-sm">{tweet.text}</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
