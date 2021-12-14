import React, { useEffect, useState } from "react";

import Link from "next/link";
import { getCategories } from "../services";
const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then((res) => setCategories(res));
    }, []);
    return (
        <div className="bg-white   rounded-lg p-8 mb-8 pb-12">
            <h3 className=" text-center font-semibold text-lg  mb-8 border-b pb-4 ">
                Categories
            </h3>
            {categories.map((ele, ind) => (
                <Link key={ind + 1} href={`/category/${ele.slug}`}>
                    <span className="cursor-pointer block pb-3 mb-3 font-semibold">
                        {" "}
                        {ele.name}
                    </span>
                </Link>
            ))}
        </div>
    );
};

export default Categories;
