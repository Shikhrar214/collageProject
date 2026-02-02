"use client";
import { useEffect, useState } from "react";
import { fetchAPI } from "../../../lib/api";
import { useParams } from "next/navigation";

export default function ProductDetail() {
  const { id } = useParams();
  const [item, setItem] = useState<any>(null);

  useEffect(() => {
    fetchAPI(`/inventory/${id}`).then(setItem);
  }, [id]);

  if (!item) return null;

  return (
    <div>
      <h2>{item.productName}</h2>
      <p>Price: ₹{item.price}</p>
      <p>Stock: {item.stock}</p>
    </div>
  );
}

