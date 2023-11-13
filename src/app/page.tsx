import Link from "next/link";
import RootLayout from "./layout";

const Home = () => {
  return (
    <RootLayout>
      <main>
        <h1>Home</h1>
        <ul>
          <li>
            <Link href="/register">Register</Link>
          </li>
        </ul>
      </main>
    </RootLayout>
  );
};

export default Home;
