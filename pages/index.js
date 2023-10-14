import Link from 'next/link';
import { useEffect, useState } from 'react';
import Seo from '../components/Seo';

export default function Home() {
  const [bestSellerList, setBestSellerList] = useState([]);
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch('https://books-api.nomadcoders.workers.dev/lists')
      ).json();
      setBestSellerList(results);
    })();
  }, []);
  return (
    <div>
      <Seo title='Home' />
      <div className='container'>
        <h1>The New York Times Best Seller Explorer 📚</h1>
        {!bestSellerList && <h4>Loading...</h4>}
        {bestSellerList?.map((item) => (
          <Link href={`list/${item.list_name_encoded}`} key={item.list_name}>
            <a>
              <div className='item-box' key={item.list_name}>
                <h4>{item.list_name} 👉</h4>
              </div>
            </a>
          </Link>
        ))}
      </div>
      <style jsx>{`
        h1 {
          width: 100vw;
          text-align: center;
        }
        .container {
          display: flex;
          margin-top: 4rem;
          padding: 1.5rem 3rem;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }
        .item-box {
          border: 1px solid #666;
          border-radius: 18px;
          padding: 0rem 1rem;
          transition: transform 0.2s ease-in-out;
        }
        .item-box:hover {
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          transform: scale(1.05) translateY(-5px);
        }
      `}</style>
    </div>
  );
}
