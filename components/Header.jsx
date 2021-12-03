import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, [])
    
    return (
        <div className = "container mx-auto px-10 mb-8 lg:w-5/6">
            <div className = "border-b w-full inline-block border-gold-orange py-8">
                <div className = " text-center md:float-left block">
                    <Link href = "/">
                        <span className = "cursor-pointer  hover:text-gold-orange font-bold text-4xl text-white">
                            GraphCMS
                        </span>
                    </Link>
                </div>
                <div className = "hidden md:float-left md:contents">
                    {categories.map((category, index) => (
                        <Link key = {index} href = {`/category/${category.slug}`}>
                            <span className = "md:float-right mt-2 align-middle hover:text-gold-orange text-white ml-4 font-semibold cursor-pointer">
                                {category.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Header;
