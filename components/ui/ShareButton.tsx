"use client";

import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShareButton = () => {
  const url = "el gachapon de @energyonchain https://gachapon.vercel.app?gachapon=true";
  const handleClick = async () => {
    await navigator.clipboard.writeText(url);

    toast.success("copied frame to clipboard!");
  };

  return (
    <button
      style={{
        width: 200,
        height: 200,
        position: "relative",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={handleClick}
    >
      <Image
        src="/warpcast.png"
        alt="logo"
        layout="fill"
        objectFit="cover"
        className="rounded-full"
      />
      <ToastContainer />
    </button>
  );
};

export default ShareButton;
