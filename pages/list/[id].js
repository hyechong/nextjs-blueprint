import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Detail({ bookList }) {
  const router = useRouter();

  return (
    <div className='container'>
      <h1>{bookList.list_name}📕</h1>
      <div className='book-list-wrapper'>
        {!bookList.books && <h4>Loading...</h4>}
        {bookList.books?.map((item, idx) => (
          <div className='item-box' key={idx}>
            <div className='book-img-wrapper'>
              <img src={item.book_image} />
            </div>
            <div className='txt-wrapper'>
              <h2>{item.title}</h2>
              <span>{item.author}</span>
            </div>
            <Link href={item.buy_links[0].url} key={item.title}>
              <a>
                <div className='buy-btn' key={item.list_name}>
                  <h3>Buy now 👉</h3>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
      <style jsx>{`
        h1 {
          padding-bottom: 0.5rem;
          text-align: center;
        }
        .container {
          margin-top: 4rem;
          padding: 1.5rem 3rem;
        }
        .book-list-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 2.5rem 1.25rem;
        }
        .item-box {
          border: 1px solid #666;
          border-radius: 18px;
          padding: 0rem 1rem;
          transition: transform 0.2s ease-in-out;
          overflow: hidden;
          background: whitesmoke;
          height: 550px;
        }
        .item-box:hover {
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          transform: scale(1.05) translateY(-5px);
        }
        .book-img-wrapper {
          width: 100%;
          padding: 1rem 0 0 0;
          overflow: hidden;
          height: 70%;
        }
        img {
          width: 100%;
          height: 100%;
        }

        h3 {
          display: inline-block;
        }
        h3:after {
          display: block;
          content: '';
          border-bottom: solid 2px #ea2129;
          transform: scaleX(0);
          transition: transform 250ms ease-in-out;
        }
        h3:hover:after {
          transform: scaleX(1);
          transform-origin: 0% 50%;
        }
        span {
          color: #777;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const response = await fetch(
    `https://books-api.nomadcoders.workers.dev/list?name=${query.id}`
  );
  const { results } = await response.json();
  const bookList = results;

  return {
    props: {
      bookList,
    },
  };
}
