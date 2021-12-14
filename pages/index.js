import Head from "next/head";
import Categories from "../components/Categories";
import PostCard from "../components/PostCard";
import PostWidget from "../components/PostWidget";
import { getPosts } from "../services";
import FeaturedPost from "../sections/FeaturedPost";
export default function Home({ posts }) {
    return (
        <div className="container mx-auto px-10 mb-8 z-0 ">
            <Head>
                <title>CMS Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <FeaturedPost />
            </div>
            <div className=" grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8 col-span-1 ">
                    {posts.map((ele, ind) => (
                        <div key={ind + 1}>
                            <PostCard post={ele.node} />
                        </div>
                    ))}
                </div>

                <div className="col-span--1 lg:col-span-4  ">
                    <div className="relative lg:sticky  top-8">
                        <PostWidget />
                        <Categories />
                    </div>
                </div>
            </div>
        </div>
    );
}

export const getStaticProps = async () => {
    const posts = (await getPosts()) || [];

    return {
        props: {
            posts,
        },
    };
};
