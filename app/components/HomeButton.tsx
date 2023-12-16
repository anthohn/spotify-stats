'use client'
import { signIn, useSession  } from "next-auth/react";
import Link from "next/link";

export default function HomeButton() {
    const { data: session } = useSession();
    const linkClasses = "w-1/3 hover:scale-105 transition bg-green-600 text-white text-sm font-semibold py-4 rounded-2xl hover:bg-green-700 shadow-2xl";
  
    if (!session) {
      return (
        <>
          <p className="mt-4">Please login with your spotify account, to see your track or artist ranking!</p>
          <button className="mt-4 bg-green-600 text-white py-2 px-3 rounded-2xl hover:bg-green-700 w-60" onClick={() => signIn("spotify")}>Login with Spotify</button>
        </>
      );
    }
    return (
      <>
        <div className="flex space-x-1">
          <p className="text-xl">Hi </p>
          <p className="text-xl font-bold">{session.user?.name} 👋</p>
        </div>
        <p className="mt-2 text-lg ">Choose what you want to see :</p>
        <div className="flex w-8/12 space-x-4 m-4 text-center">
          <Link className={linkClasses} href="/TopArtists">Top Artists 👨‍🎤</Link>
          <Link className={linkClasses} href="/TopTracks">Top Tracks 🎵</Link>
          <Link className={linkClasses} href="/RecentlyPlayed">Recently Played 🕐</Link>
        </div>
      </>
    )
}