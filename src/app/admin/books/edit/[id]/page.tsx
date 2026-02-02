"use client";
import { useEffect, useState } from "react";
import { fetchAPI } from "../../../../../lib/api";
import { useParams, useRouter } from "next/navigation";

export default function EditBook() {
  const { id } = useParams();
  const router = useRouter();
  const [book, setBook] = useState<any>(null);

  useEffect(() => {
    fetchAPI(`/books/${id}`).then(setBook);
  }, [id]);

  const submit = async (e: any) => {
    e.preventDefault();
    await fetchAPI(`/books/${id}`, {
      method: "PUT",
      body: JSON.stringify(book),
    });
    router.push(`/books/${id}`);
  };

  if (!book) return null;

  return (
    <form onSubmit={submit}>
      <input value={book.title} onChange={e => setBook({ ...book, title: e.target.value })} />
      <input value={book.author} onChange={e => setBook({ ...book, author: e.target.value })} />
      <button>Update</button>
    </form>
  );
}
