"use client";

import ShareButton from "@/components/ui/ShareButton";

export default function Home() {
  const BUENOS_AIRES_SONG_CAMP = "0xe88035cbc6703b18e2899fe2b5f6e435f00ade41";

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5">
      <ShareButton collection={BUENOS_AIRES_SONG_CAMP} />
    </main>
  );
}
