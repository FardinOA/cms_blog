import React, { Fragment } from "react";
import moment from "moment";
import Head from "next/head";
const PostDetail = ({ post }) => {
    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text;
        if (obj) {
            if (obj.bold) {
                modifiedText = <b key={index}>{text}</b>;
            }
            if (obj.italic) {
                modifiedText = <em key={index}>{text}</em>;
            }
            if (obj.underline) {
                modifiedText = <u key={index}>{text}</u>;
            }
        }
        switch (type) {
            case "heading-three":
                return (
                    <h3 key={index} className="text-xl font-semibold mb-4">
                        {modifiedText.map((item, i) => (
                            <Fragment key={i}>{item}</Fragment>
                        ))}
                    </h3>
                );
            case "paragraph":
                return (
                    <p key={index} className="mb-8">
                        {modifiedText.map((item, i) => (
                            <Fragment key={i}>{item}</Fragment>
                        ))}
                    </p>
                );
            case "heading-four":
                return (
                    <h4 key={index} className="text-md font-semibold mb-4">
                        {modifiedText.map((item, i) => (
                            <Fragment key={i}>{item}</Fragment>
                        ))}
                    </h4>
                );
            case "image":
                return (
                    <img
                        key={index}
                        alt={obj.title}
                        height={obj.height}
                        width={obj.width}
                        src={obj.src}
                    />
                );
            default:
                return modifiedText;
        }
    };
    return (
        <div className="shadow-white shadow-md rounded-lg lg:p-8 pb-12 mb-8">
            <Head>
                <title>{post?.title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="relative overflow-hidden shadow-md mb-6">
                <img
                    src={post?.featuredImage.url}
                    alt={post?.title}
                    className="object-top h-full w-full rounded-t-lg"
                />
            </div>
            <div className="px-4 lg:px-0 ">
                <div className="flex items-center justify-between mb-8 w-full">
                    <div className="flex item-center mb-4 mt-7 mr-8 lg:mb-0 lg:w-auto">
                        <img
                            src={post?.author.photo.url}
                            alt={post?.author.name}
                            height="30px"
                            width="30px"
                            className="align-middle rounded-full "
                        />
                        <p className="inline align-middle text-white ml-2 text-lg">
                            {post?.author.name}
                        </p>
                    </div>
                    <div className="text-blue-400 font-midume flex flex-row  justify-center">
                        <svg
                            className="w-6 h-7 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            ></path>
                        </svg>
                        <span className="mt-1">
                            {moment(post?.createdAt).format("MMM DD,YYYY")}
                        </span>
                    </div>
                </div>
                <h1 className="text-3xl font-semibold mb-6">{post?.title}</h1>
                {post?.content.raw.children.map((typeObj, ind) => {
                    const children = typeObj.children.map((item, itemInd) =>
                        getContentFragment(itemInd, item.text, item)
                    );
                    return getContentFragment(
                        ind,
                        children,
                        typeObj,
                        typeObj.type
                    );
                })}
            </div>
        </div>
    );
};

export default PostDetail;
