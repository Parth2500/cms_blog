import React, { useState, useEffect } from 'react'
import moment from 'moment';
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '../services';

const PostWidget = ({categories, slug}) => {
    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {
        if(slug){
            getSimilarPosts(categories, slug)
                .then((result) => setRelatedPosts(result))
        } else {
            getRecentPosts()
                .then((result) => setRelatedPosts(result))
        }
    }, [slug])

    return (
        <div className = " bg-white shadow-lg rounded-lg p-8 mb-8">
            <h3 className = "text-xl mb-8 font-bold text-regal-blue border-b pb-4">
                {slug ? 'Related Posts' : 'Recent Posts'}
            </h3>
            {relatedPosts.map((post) => (
                <div key = {post.title} className = "flex items-center w-full mb-4">
                    <div className = "w-16 flex-none">
                        <img alt = {post.title} className = "align-middle rounded-full h-14 w-14" src = {post.featuredimage.url}/>
                    </div>
                    <div className = " flex-grow ml-4">
                        <p className = " text-regal-blue text-xs">
                            {moment(post.createdAt).format('MMM DD, YYYY')}
                        </p>
                        <Link href = {`/post/${post.slug}`} key = {post.title}>
                            <span className = "text-regal-blue hover:text-gold-orange text-xl duration-500 cursor-pointer w-full">
                                {post.title}
                            </span>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PostWidget;
