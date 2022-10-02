import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ChangePassword() {
    const notify = () => toast.success("Wow so easy!");
    const timeOut = 1500;


    return (
        <div>
            <button onClick={notify}>Notify!</button>
            <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                theme="colored"
                newestOnTop
                closeOnClick
                rtl={false}
                draggable={false}
            />
        </div>
    );
}