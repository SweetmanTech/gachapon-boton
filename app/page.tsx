"use client";

import { Input } from "@/components/ui/Input";
import ShareButton from "@/components/ui/ShareButton";
import { useState } from "react";
import { Address } from "viem";

export default function Home() {
  const [collectionAddress, setCollectionAddress] = useState<Address>(
    "0xe88035cbc6703b18e2899fe2b5f6e435f00ade41"
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 bg-white">
      <Input
        placeholder="Collection Address"
        onChange={(e) => setCollectionAddress(e.target.value as Address)}
      />
      <ShareButton collection={collectionAddress} />
    </main>
  );
}
