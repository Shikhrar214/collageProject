"use client";
import { useState } from "react";
import { fetchAPI } from "../../../../lib/api";
import { useRouter } from "next/navigation";

export default function AddProduct() {
  const router = useRouter();
  const [form, setForm] = useState({ productName: "", category: "", price: 0, stock: 0 });

  const submit = async (e: any) => {
    e.preventDefault();
    await fetchAPI("/inventory", {
      method: "POST",
      body: JSON.stringify(form),
    });
    router.push("/inventory");
  };

  return (
    <form onSubmit={submit}>
      <input placeholder="Name" onChange={e => setForm({ ...form, productName: e.target.value })} />
      <input placeholder="Category" onChange={e => setForm({ ...form, category: e.target.value })} />
      <button>Add</button>
    </form>
  );
}
