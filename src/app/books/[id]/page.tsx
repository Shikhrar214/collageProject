"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchAPI } from "../../../lib/api";

export default function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState<any>(null);

  useEffect(() => {
    fetchAPI(`/books/${id}`).then(setBook);
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Category: {book.category}</p>
      <p>Available: {book.available ? "Yes" : "No"}</p>
    </div>
  );
}
