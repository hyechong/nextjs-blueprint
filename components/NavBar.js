import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href='/'>
        <a className={router.pathname === '/' ? 'active' : ''}>Home</a>
      </Link>
      <Link href='/about'>
        <a className={router.pathname === '/about' ? 'active' : ''}>About</a>
      </Link>
      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
          box-shadow: 0 0 10px #ddd;
          padding: 1.5rem 3rem;
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          z-index: 999;
          background: whitesmoke;
        }
        a {
          text-decoration: none;
          font-size: 20px;
          color: #999;
          transition: all 0.5s;
        }
        .active {
          text-decoration: underline;
          text-underline-position: under;
          color: black;
        }
      `}</style>
    </nav>
  );
}
