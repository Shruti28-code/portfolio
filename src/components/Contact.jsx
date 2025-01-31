import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_navawzj',   // Replace with your EmailJS Service ID
            'template_fs1op88',  // Replace with your EmailJS Template ID
            form,
            'Z8mn1qtWXLFaVmhEg'    // Replace with your EmailJS Public Key
        ).then(
            () => setStatus('Message sent successfully!'),
            (error) => setStatus('Failed to send message. Try again.')
        );

        // Clear form after submission
        setForm({ name: '', email: '', message: '' });
    };
    return (
        <div className="flex flex-col font-serif items-center justify-center min-h-screen bg-gray-900 text-white p-6">
            {/* Heading Section */}
            <div className="text-center mb-8">
                <h6 className="text-3xl font-bold text-blue-400">Contact Me</h6>
                <span className="text-gray-300">Let's keep in touch!</span>
            </div>

            {/* Contact Section with Fixed Width */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-10  bg-gray-800 p-6 rounded-2xl shadow-2xl max-w-4xl w-full transition-all duration-700 ease-in-out transform hover:scale-105"
            >

                {/* Image & Social Section */}
                <div className="flex flex-col items-center space-y-6">
                    <span className="text-lg text-gray-300 font-semibold">Get in touch</span>
                    <a href="https://www.linkedin.com/in/shruti-khadatkar-454293245/" target="_blank" rel="noopener noreferrer">
                        <i className="devicon-linkedin-plain colored text-5xl transition-transform transform hover:scale-110"></i>
                    </a>
                    <img
                        src="https://www.bankatfirst.com/business/resources/flourish/email-marketing-to-get-qualified-leads/_jcr_content/root/responsivegrid/container/responsiveimage/mobile-image.coreimg.jpeg/1666280108401/email-marketing-blog-1536x635.jpeg"
                        alt="Contact"
                        className="w-80 md:w-[250px] lg:w-[300px] rounded-lg shadow-lg h-auto"
                    />
                </div>

                {/* Contact Form */}
                <form
                    className="flex flex-col space-y-4 w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg"
                    onSubmit={handleSubmit}
                >
                    <label className="text-gray-300 font-semibold">Your Name</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required
                        className="p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />

                    <label className="text-gray-300 font-semibold">Your Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required
                        className="p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />

                    <label className="text-gray-300 font-semibold">Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required
                        className="p-2 h-24 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>

                    <button type="submit"
                        className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105">
                        Send Message
                    </button>

                    {status && <p className="text-green-400 text-sm mt-2">{status}</p>}
                </form>
            </div>
        </div >
    );
}
