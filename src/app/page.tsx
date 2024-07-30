"use client";

import { FEMALE, MALE } from "@/constant/constant";
import clsx from "clsx";
import { Dispatch, ReactNode, SetStateAction, useRef, useState } from "react";

export default function Home() {
  const [gender, setGender] = useState(FEMALE);

  const womanImages: JSX.Element[] = [];
  const manImages: JSX.Element[] = [];

  for (let index = 0; index < 20; index++) {
    if (gender == FEMALE) {
      womanImages.push(<Item key={index} image_path={"/woman.jpg"} />);
    } else {
      manImages.push(<Item key={index} image_path={"/man.jpg"} />);
    }
  }

  const listRef = useRef<HTMLDivElement | null>(null);
  const scrollToStart = () => {
    if (listRef.current) {
      listRef.current.scrollLeft = 0;
    }
  };

  return (
    <main className="flex min-h-screen min-w-screen flex-col justify-center bg-white">
      <div className="flex gap-x-5 pb-3 pl-5 sm:pl-10">
        <Button
          value={FEMALE}
          setGender={setGender}
          gender={gender}
          scrollToStart={scrollToStart}
        >
          WOMAN
        </Button>
        <Button
          value={MALE}
          setGender={setGender}
          gender={gender}
          scrollToStart={scrollToStart}
        >
          MAN
        </Button>
      </div>
      <div
        className="flex gap-x-2.5 overflow-x-auto hide-scrollbar pl-5 sm:pl-10"
        ref={listRef}
      >
        {gender == FEMALE && womanImages}
        {gender == MALE && manImages}
      </div>
    </main>
  );
}

function Button({
  children,
  value,
  gender,
  setGender,
  scrollToStart,
}: {
  children: ReactNode;
  value: string;
  gender: string;
  setGender: Dispatch<SetStateAction<string>>;
  scrollToStart: () => void;
}) {
  return (
    <button
      className={clsx("rounded-full px-4 py-2 text-[13px]", {
        "bg-black text-white": gender == value,
        "bg-[#F0F0F0]": gender != value,
      })}
      onClick={() => {
        setGender(value);
        scrollToStart();
      }}
    >
      {children}
    </button>
  );
}

function Item({ image_path }: { image_path: string }) {
  return (
    <div>
      <div className="w-[164px] sm:w-56 flex flex-col">
        <img
          src={image_path}
          alt={""}
          className="w-full sm:h-full object-fil pb-2"
        />
        <p>{`[BB665/Rain 33]`}</p>
        <p className="truncate pb-1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat,
          veritatis.
        </p>
        <div className="flex items-center text-[14px]">
          <p className="font-semibold pr-2">₩29,000</p>
          <p className="text-red-500 font-semibold"> 62%</p>
          <img src="/arrow-down.png" alt="" className="w-fit h-4" />
        </div>
      </div>
    </div>
  );
}
