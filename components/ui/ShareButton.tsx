"use client";

import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Address } from "viem";

const ShareButton = ({ collection }: { collection: Address }) => {
  const text = "el gachapon de @energyonchain";
  const shareUrl = `https://warpcast.com/~/compose?text=${text}&embeds%5B%5D=https://gachapon-energy.vercel.app?collection=${collection}`;
  const handleClick = async (e: any) => {
    if (!(e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      toast.error('Please hold "Ctrl" / "Cmd" and click to share.');
    }
  };

  return (
    <a
      style={{
        width: 333,
        height: 333,
        position: "relative",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={handleClick}
      href={shareUrl}
    >
      <Image src="/button.webp" alt="logo" layout="fill" objectFit="cover" />
      <ToastContainer limit={1} />
    </a>
  );
};

export default ShareButton;
