'use client'
import { useSearchParams } from "next/navigation"
import './shop.css'
import Card from "@/components/card/card"
import shop from '@/shop-db.json'
import OrderForm from "@/components/order-form/form"

const Shop = () => {
  const pageParams = useSearchParams()
  const category = pageParams.get('category') //shop?search=текст
  const products = shop[category]?.products

  return (
    <main className="shop">
      <OrderForm />
      <h1 className="shop-title">{category}</h1>
      <ul className="shop-cards">
        {products?.map(prod => 
          <li key={prod.id}>
            <Card firm={prod.firm} name={prod.name} price={prod.price} img={prod.img} />
          </li>
        )}
      </ul>
    </main>
  )
}

export default Shop