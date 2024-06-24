"use client";
import CategoryItems from "@/compoinents/category-items/category-items";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Page() {
  //get params
  const params = useParams();

  const [meal, setMeal] = useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.slug}`
        );
        console.log("🚀 ~ fetchData ~ response:", response);
        setMeal(response.data.meals); // assuming the response contains 'meals' instead of 'categories'
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [params]);
  console.log("🚀 ~ page ~ params:", params);

  return (
    <div>
      {" "}
      <h1 className="mx-auto mb-10 font-bold">Category: {params.slug}</h1>
      <div className="w-5/12">
        <CategoryItems meals={meal} />
      </div>
    </div>
  );
}
