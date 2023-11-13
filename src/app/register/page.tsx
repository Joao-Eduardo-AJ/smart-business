import Link from "next/link";
import RootLayout from "../layout";

export const Register = () => {
  return (
    <RootLayout>
      <main>
        <h1>Register / Login</h1>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </main>
    </RootLayout>
  );
};

export default Register;
