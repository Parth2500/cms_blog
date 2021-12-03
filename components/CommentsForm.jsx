import React, { useRef, useState, useEffect } from 'react'
import { submitComment} from '../services'

const CommentsForm = ({slug}) => {
    const [error, setError] = useState(false);
    const [localStorage, setLocalStorage] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const commentEl = useRef();
    const nameEl = useRef();
    const emailEl = useRef();
    const storeDataEl = useRef();

    useEffect(() => {
        nameEl.current.value = window.localStorage.getItem('name');
        emailEl.current.value = window.localStorage.getItem('email');
    }, [])


    const handleCommentSubmission = () => {
        setError(false);

        const { value: comment } = commentEl.current;
        const { value: name } = nameEl.current;
        const { value: email } = emailEl.current;
        const { checked: storeData } = storeDataEl.current;

        if(!comment || !name || !email) {
            setError(true);
            return;
        }

        const commentObj = { name, email, comment, slug};

        if(storeData) {
            window.localStorage.setItem('name', name);
            window.localStorage.setItem('email', email);
        } else {
            window.localStorage.removeItem('name', name);
            window.localStorage.removeItem('email', email);
        }

        submitComment(commentObj)
        .then((res) => {
            setShowSuccessMessage(true);

            setTimeout(() => {
                setShowSuccessMessage(false);
            },3000);
        })
    }

    return (
        <div className = "bg-white shadow-lg rounded-lg p-8 pb-18 mb-8">
            <h3 className = "text-xl mb-8 font-bold text-regal-blue border-b pb-4">
                Comment Form
            </h3>
            <div className = " grid grid-cols-1 gap-4 mb-4">
                <textarea ref = {commentEl}
                className = "bg-platinum p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gold-orange text-regal-blue"
                placeholder = "Comment" name = "comment" 
            />
            </div>
            <div className = " lg:grid-cols-2 grid grid-cols-1 gap-4 mb-4">
                <input
                    type = "text" ref = {nameEl}
                    className = "bg-platinum py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gold-orange text-regal-blue"
                    placeholder = "Name" name = "name"
                />
                <input
                    type = "text" ref = {emailEl}
                    className = "bg-platinum py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gold-orange text-regal-blue"
                    placeholder = "Email" name = "email"
                />
            </div>
            <div className = " grid grid-cols-2 gap-4 mb-4">
                <div>
                    <input className="mr-1 cursor-pointer" ref = {storeDataEl} type = "checkbox" id = "storeData" name = "storeData" value = "true"/>
                    <label className = "h-5 text-regal-blue cursor-pointer" htmlFor = "storeData">Remember Me</label>
                </div>
            </div>
            {error && <p className = " text-xs text-red-500">All fields are required.</p>}
            <div className = "mt-8 text-center">
                <button type = "button" onClick = {handleCommentSubmission} className = " transition duration-500 ease-in hover:bg-gold-orange inline-block bg-regal-blue text-base text-white px-8 py-3 cursor-pointer rounded-full">
                    Post Comment
                </button>
                <br/>
                {showSuccessMessage && <span className = " text-base font-semibold mt-3 flow-root text-green-500">Comment Submitted!</span>}
            </div>
        </div>
    )
}

export default CommentsForm;