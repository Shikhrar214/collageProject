import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Library & Inventory System</h1>

      <ul>
        <li><Link href="/books">Books (Task 1)</Link></li>
        <li><Link href="/inventory">Inventory (Task 2)</Link></li>
      </ul>
    </main>
  );
}
