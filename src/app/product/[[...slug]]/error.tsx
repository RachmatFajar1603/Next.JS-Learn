"use client";

import { useEffect } from "react";
import { error } from "console";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong </h2>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
}
