"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchAPI } from "../../lib/api";

export default function InventoryList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchAPI("/inventory").then(setItems);
  }, []);

  return (
    <div>
      {items.map((p: any) => (
        <div key={p._id}>
          <h4>{p.productName}</h4>
          <Link href={`/inventory/${p._id}`}>View</Link>
        </div>
      ))}
    </div>
  );
}
