import { Tweet, User } from "@prisma/client";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import useMutation from "../../lib/useMutation";
import { handleClassName } from "../../lib/utils";

interface TweetWithUser extends Tweet {
  user: User;
  _count: {
    likes: number;
  };
}

interface TweetDetail {
  ok: boolean;
  tweet: TweetWithUser;
  isLike: boolean;
}

const Detail = () => {
  const router = useRouter();
  const { data, mutate } = useSWR<TweetDetail>(
    router.query.id ? `/api/tweets/${router.query.id}` : null
  );
  const [like, { loading }] = useMutation(
    `/api/tweets/${router.query.id}/like`
  );
  const onlikeClick = () => {
    if (!data) return;
    mutate(
      {
        ...data,
        tweet: {
          ...data?.tweet,
          _count: {
            ...data?.tweet._count,
            likes: data.isLike
              ? data?.tweet._count.likes - 1
              : data?.tweet._count.likes + 1,
          },
        },
        isLike: !data.isLike,
      },
      false
    );
    if (!loading) like({});
  };

  const backHome = () => {
    router.push("/");
  };
  return (
    <div className="w-[100vw] h-[100vh]">
      <div className="bg-[#1DA1F2] flex h-screen w-full items-center justify-around px-10 py-20">
        <div className="h-[40rem] w-[25rem] rounded-md shadow-2xl bg-[#FCFCFC]">
          <div className="p-4">
            <div className="flex">
              <div onClick={backHome} className="cursor-pointer">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </div>
            </div>
            <div className="mt-4 flex items-center space-x-2">
              <div className="w-14 h-14 bg-slate-500 rounded-full"></div>
              <div>
                <div className="font-bold text-lg">
                  {data?.tweet?.user.name}
                </div>
                <div className="text-sm text-slate-400">
                  {data?.tweet?.user.email}
                </div>
              </div>
            </div>
            <div className="mt-4 space-y-3">
              <div className="text-xl">{data?.tweet?.text}</div>
              <div className="text-xs text-slate-400">
                {data?.tweet.createdAt.toLocaleString()}
              </div>
            </div>
            <div className="mt-4 flex space-x-14">
              <div className="flex space-x-1">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  />
                </svg>
                <span>2</span>
              </div>
              <div className="flex space-x-1">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                  />
                </svg>
                <span>7</span>
              </div>
              <div className="flex space-x-1">
                <button
                  onClick={onlikeClick}
                  className={handleClassName(
                    Boolean(data?.isLike),
                    "text-red-600",
                    ""
                  )}
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </button>
                <span>{data?.tweet?._count?.likes}</span>
              </div>
              <div className="flex space-x-1">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                  />
                </svg>
                <span>1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
