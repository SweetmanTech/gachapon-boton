import Image from "next/image";

const ShareButton = () => (
  <a
    href="https://warpcast.com/~/compose?text=el+gachapon+de+@energyonchain&embeds%5B%5D=https://gachapon.vercel.app?gachapon=true"
    target="_blank"
    style={{
      width: 200,
      height: 200,
      position: "relative",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Image
      src="/warpcast.png"
      alt="logo"
      layout="fill"
      objectFit="cover"
      className="rounded-full"
    />
  </a>
);

export default ShareButton;
