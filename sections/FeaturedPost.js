import React, { useEffect, useState } from "react";
import { getFeaturePost } from "../services";
import Carousel from "react-material-ui-carousel";
import Link from "next/Link";
const FeaturedPost = () => {
    const [featuredPost, setFeaturedPost] = useState([]);

    useEffect(() => {
        getFeaturePost().then((res) => setFeaturedPost(res));
    }, []);

    return (
        <>
            <h3 className="text-white font-bold text-4xl text-center mb-4">
                Featured Posts
            </h3>
            <Carousel className="  shadow-md  mb-8 ">
                {featuredPost.map((post) => (
                    <Link
                        href={`/post/${post.slug}`}
                        key={post.featuredImage.url}
                        className=""
                    >
                        <>
                            <img
                                src={post.featuredImage?.url}
                                alt={post.title}
                                className=" h-80 w-full object-cover  object-top  "
                            />
                            <h2 className="   text-white text-center font-semibold text-xl">
                                {post.title} <span>By</span>{" "}
                                <span className="text-black ml-8">
                                    {post.author.name}
                                </span>
                            </h2>
                        </>
                    </Link>
                ))}
            </Carousel>
        </>
    );
};

export default FeaturedPost;