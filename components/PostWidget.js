import React, { useEffect, useState } from "react";
import moment from "moment";
import Link from "next/link";
import { getRecentPosts, getSimilarPosts } from "../services";
const PostWidget = ({ categories, slug }) => {
    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {
        if (slug) {
            getSimilarPosts(categories, slug).then((res) =>
                setRelatedPosts(res)
            );
        } else {
            getRecentPosts().then((res) => setRelatedPosts(res));
        }
    }, [slug]);

    return (
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
            <h3 className=" text-center font-semibold text-lg  mb-8 border-b pb-4 ">
                {slug ? "Related Posts" : "Recent Posts"}
            </h3>
            {relatedPosts?.map((ele, ind) => (
                <div key={ind + 1} className="flex items-center w-full mb-3">
                    <div className="w-16 flex-none">
                        <img
                            src={ele.featuredImage.url}
                            height="60px"
                            width="60px"
                            alt={ele.title}
                            className="rounded-full"
                        />
                    </div>
                    <div className="flex   w-full ml-2">
                        <p className="text-blue-500 font-xs mr-12">
                            {moment(ele.createdAt).format("MMM DD,YYYY")}
                        </p>
                        <Link
                            className="text-md  justify-end"
                            href={`/posts/${ele.slug}`}
                        >
                            {ele.title}
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostWidget;
