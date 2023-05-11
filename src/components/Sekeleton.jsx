import React from "react";

export default function Sekeleton() {
  return (
    // <div className='flex min-h-screen items-center justify-center bg-white'>
    <div className="flex gap-5">
      <div className="relative w-80 space-y-3 overflow-hidden rounded-lg bg-neutral-100 p-3 before:absolute before:inset-0 before:-translate-x-3/4 before:bg-gradient-to-t before:from-transparent before:via-white/50  before:animate-[shimmer_1.5s_infinite]">
        <div className=" h-72 w-full rounded-lg bg-neutral-200"></div>
        <div className="space-y-3">
          <div className="h-5 w-8/12 rounded-full bg-neutral-200"></div>
          <div className="space-y-1">
            <div className="h-4 w-full rounded-full bg-neutral-200 shadow"></div>
            <div className="h-4 w-full rounded-full bg-neutral-200 shadow"></div>
          </div>
          <div className="flex gap-2">
            <div className="h-5 w-16 rounded-full bg-neutral-200"></div>
          </div>
        </div>
      </div>
    </div>
    //  </div>
  );
}
