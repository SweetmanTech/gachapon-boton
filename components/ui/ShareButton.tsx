"use client";

import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShareButton = () => {
  const text = "el gachapon de @energyonchain";

  const shareUrl = `https://warpcast.com/~/compose?text=${text}&embeds%5B%5D=https://gachapon.vercel.app?gachapon=true`;
  const handleClick = async (e: any) => {
    e.preventDefault();
    if (e.ctrlKey || e.metaKey) {
      window.open(shareUrl);
    } else {
      toast.error('Please hold "Ctrl" / "Cmd" and click to share.');
    }
  };

  return (
    <a
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
    </a>
  );
};

export default ShareButton;
