import Link from "next/link";

import React from "react";
import { productData } from "../../data";

export default function ProductPage() {
  let categories = Object.keys(productData);
  return (
    <div className="text-center">
      <h1 className="font-bold text-3xl">
        <Link href="/">back to home</Link>
      </h1>
      <ul>
        {categories.map((category) => (
          <li>
            <Link
              className="text-orange-700"
              href={`/productPage/${category}`}
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
