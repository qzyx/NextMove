import PageLoadingSpinner from "@/app/_Components/UI/PageLoadingSpinner";
import { Suspense } from "react";

export default function GameLayout({ children }) {
  return (
    <div className="h-screen">
      <Suspense fallback={<PageLoadingSpinner></PageLoadingSpinner>}>
        {children}
      </Suspense>
    </div>
  );
}
