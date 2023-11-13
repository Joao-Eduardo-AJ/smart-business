import Link from "next/link";

const Home = () => {
  return (
    <main>
      <h1>Home</h1>
      <ul>
        <li>
          <Link href="/register">Register</Link>
        </li>
      </ul>
    </main>
  );
};

export default Home;
