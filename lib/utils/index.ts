import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export * from "./account";
export * from "./nft";
export * from "./shortenAddress";
export * from "./getAlchemyImageSrc";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
