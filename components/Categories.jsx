import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, [])

    return (
        <div className = " bg-white shadow-lg rounded-lg p-8 mb-8">
            <h3 className = " text-xl mb-8 font-bold text-regal-blue border-b pb-4">
                Categories
            </h3>
            {categories.map((category, index) => (
                <Link key= {category.slug} href = {`/category/${category.slug}`}>
                    <span className = {`cursor-pointer ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} text-regal-blue hover:text-gold-orange text-lg block pb-3 mb-3`}>
                        {category.name}
                    </span>
                </Link>
            ))}
        </div>
    )
}

export default Categories;
