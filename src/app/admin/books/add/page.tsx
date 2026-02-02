"use client";
import { useState } from "react";
import { fetchAPI } from "../../../../lib/api";
import { useRouter } from "next/navigation";


export default function AddBook() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    available: true,
  });

  const submit = async (e: any) => {
    e.preventDefault();
    await fetchAPI("/books", {
      method: "POST",
      body: JSON.stringify(form),
    });
    router.push("/books");
  };

  return (
    <form onSubmit={submit}>
      <input placeholder="Title" onChange={e => setForm({ ...form, title: e.target.value })} />
      <input placeholder="Author" onChange={e => setForm({ ...form, author: e.target.value })} />
      <input placeholder="Category" onChange={e => setForm({ ...form, category: e.target.value })} />
      <button>Add Book</button>
    </form>
  );
}
