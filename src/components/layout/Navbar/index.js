import styles from "./styles.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Kleia</div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/routes/about">About</Link>
        </li>
        <li>
          <Link href="/routes/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}