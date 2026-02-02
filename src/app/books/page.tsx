"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchAPI } from "../../lib/api";

export default function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchAPI("/books").then(setBooks);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Books</h2>

      {books.map((b: any) => (
        <div key={b._id}>
          <h4>{b.title}</h4>
          <p>{b.author}</p>
          <Link href={`/books/${b._id}`}>View</Link>
        </div>
      ))}
    </div>
  );
}
