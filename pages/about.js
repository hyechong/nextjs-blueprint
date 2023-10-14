import Seo from '../components/Seo';

export default function Potato() {
  return (
    <div>
      <Seo title='About' />
      <div className='container'>
        <h1>About us</h1>
        <span>
          Welcome to the official explorer for the New York Times Best Seller
          list explorer.
        </span>
        <br />
        <span>We hope you enjoy your stay!</span>
        <style jsx>{`
          h1 {
            width: 100vw;
          }
          .container {
            display: flex;
            margin-top: 4rem;
            padding: 1.5rem 3rem;
            flex-wrap: wrap;
            gap: 1rem;
          }
        `}</style>
      </div>
    </div>
  );
}
