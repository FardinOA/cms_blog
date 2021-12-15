import React, { useEffect, useState, Fragment } from "react";
import { getFeaturePost } from "../services";
import Carousel from "react-material-ui-carousel";
import Link from "next/link";
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
                    <Fragment key={post.featuredImage.url}>
                        <img
                            src={post.featuredImage?.url}
                            alt={post.title}
                            className=" h-80 w-full object-cover  object-top  "
                        />
                        <h2 className="   text-white text-center font-semibold text-xl">
                            {post.title} <span>By</span>{" "}
                            <Link
                                href={`/post/${post.slug}`}
                                className="text-black ml-8 cursor-pointer"
                            >
                                {post.author.name}
                            </Link>
                        </h2>
                    </Fragment>
                ))}
            </Carousel>
        </>
    );
};

export default FeaturedPost;
