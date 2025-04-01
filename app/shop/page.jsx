import { Suspense } from "react";
import ShopPage from "./ShopPage";

export default function Page() {
  return (
    <Suspense fallback={<div>Завантаження...</div>}>
      <ShopPage />
    </Suspense>
  );
}