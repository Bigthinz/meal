"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Page() {
  const [category, setCategory] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        console.log("🚀 ~ fetchData ~ response:", response);
        setCategory(response.data.categories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mx-auto">
      <h1 className="mx-auto mb-10 font-bold text-center">Menu</h1>

      <div className="grid w-5/12 grid-cols-2 gap-6 mx-auto">
        {category &&
          category.map((item: any) => (
            <Link
              key={item.idCategory}
              href={`/menu/${item.strCategory}`}
              className="p-4 text-black bg-gray-200 rounded-md hover:bg-50"
            >
              <button key={item.idCategory}>{item.strCategory}</button>
            </Link>
          ))}
      </div>
    </div>
  );
}
