import { Suspense } from "react";
import ShopPage from "./shopPage";


export default function Page() {
  return (
    <Suspense fallback={<div>Завантаження...</div>}>
      <ShopPage />
    </Suspense>
  );
}