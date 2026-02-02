"use client";
import { useEffect, useState } from "react";
import { fetchAPI } from "../../../../../lib/api";
import { useParams, useRouter } from "next/navigation";

export default function EditProduct() {
  const { id } = useParams();
  const router = useRouter();
  const [item, setItem] = useState<any>(null);

  useEffect(() => {
    fetchAPI(`/inventory/${id}`).then(setItem);
  }, [id]);

  const submit = async (e: any) => {
    e.preventDefault();
    await fetchAPI(`/inventory/${id}`, {
      method: "PUT",
      body: JSON.stringify(item),
    });
    router.push(`/inventory/${id}`);
  };

  if (!item) return null;

  return (
    <form onSubmit={submit}>
      <input value={item.productName} onChange={e => setItem({ ...item, productName: e.target.value })} />
      <button>Update</button>
    </form>
  );
}
