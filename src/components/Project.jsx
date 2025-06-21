import React from 'react';

export default function Project() {
    return (
        <div className="flex flex-col  font-serif items-center justify-center min-h-screen bg-gray-900 text-white p-6">
            {/* Heading */}
            <h1 className="text-3xl font-bold text-blue-400 mb-6">Projects</h1>

            {/* Projects Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-gray-800 p-8 rounded-2xl shadow-2xl  transition-all duration-700 ease-in-out transform hover:scale-105
            
 gap-8 max-w-4xl w-full">

                


              
                <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform">
                    <img src="bloggr.png" alt="Bloggr" className="w-full h-40 object-cover rounded-md" />
                    <h6 className="text-xl font-semibold text-blue-400 mt-3">Bloggr</h6>
                    <p className="text-gray-300 text-sm mt-2">
                        Bloggr is a modern blogging platform where users can share their memories and stories with images and captions.
                    </p>
                    <a href="https://bloggr-woad.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <button className="bg-blue-500 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105">
                            Get Link
                        </button>
                    </a>
                </div>

                {/* Project 3 -Web chat */}
                <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform">
                    <img src="connect.png" alt="connect" className="w-full h-40 object-cover rounded-md" />
                    <h6 className="text-xl font-semibold text-blue-400 mt-3">Connect</h6>
                    <p className="text-gray-300 text-sm mt-2">
                        Connect is a real-time web chat app that lets users instantly message, share updates, and stay connected with friends securely and seamlessly.
                    </p>
                    <a href="https://connect-puce-rho.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <button className="bg-blue-500 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105">
                            Get Link
                        </button>
                    </a>

                </div>
                <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform">
                    <img src="signatureApp.jpeg" alt="Quick Sign" className="w-full h-40 object-cover rounded-md" />
                    <h6 className="text-xl font-semibold text-blue-400 mt-3">Quick Sign Web App</h6>
                    <p className="text-gray-300 text-sm mt-2">
                        This application allows users to draw a signature on canvas and save it in local storage for reuse.
                    </p>
                    <a href="https://shruti28-code.github.io/Quick-sign-web-application/" target="_blank" rel="noopener noreferrer">
                        <button className="bg-blue-500 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105">
                            Get Link
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}
