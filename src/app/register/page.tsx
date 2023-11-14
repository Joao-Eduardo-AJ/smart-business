import Link from "next/link";
import RootLayout from "../layout";

export const Register = () => {
  return (
    <RootLayout>
      <h1>Register / Login</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </RootLayout>
  );
};

export default Register;
