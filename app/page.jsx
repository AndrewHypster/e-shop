import Image from 'next/image';
import './page.css'
import Link from 'next/link';
import shop from '../shop-db.json'

export default function Home() {
  return (
    <main className="home-main">
      <ul className="categories">
        {
          Object.entries(shop).map(([title, details]) =>
            <Link href={`/shop?category=${title}`} key={title}>
              <li className="category">
                <div className="category-text">
                  <h2 className="category-title">{title}</h2>
                  <p className="category-desc">{details.desc}</p>
                </div>
                <Image src={details.mainImg} alt={title} width={100} height={100} className="category-img" />
              </li>
            </Link>
          )
        }
      </ul>
    </main>
  );
}
