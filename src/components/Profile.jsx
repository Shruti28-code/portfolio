import React from 'react';

const Profile = () => {
    return (
        <div className="flex flex-col  font-serif items-center justify-center min-h-screen bg-gray-900 text-white p-6">
            <div
                className="bg-gray-800 shadow-2xl rounded-2xl p-8 flex flex-col md:flex-row items-center max-w-4xl w-full transition-all duration-700 ease-in-out transform hover:scale-105"
            >
                <div className="flex flex-col items-center text-center md:items-start md:text-left md:w-1/2">
                    <div
                        className="text-lg font-semibold text-gray-300 animate-fadeInLeft"
                    >
                        Hello, I am <span className="text-blue-400">Shruti Khadatkar</span>
                    </div>
                    <h1
                        className="text-4xl font-bold text-white mt-2 animate-fadeInUp"
                    >
                        Engineering Student👩‍🎓
                    </h1>
                    <p
                        className="text-gray-400 mt-2 animate-fadeInUp"
                    >
                        Knack of building applications with front and back operations.
                    </p>
                    <div
                        className="flex mt-4 space-x-4 animate-fadeInUp"
                    >
                        <button className="bg-blue-500 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition transform hover:scale-105">
                            Hire Me
                        </button>
                        <a href="Resume SK.pdf" download="Resume SK">
                            <button className="border border-blue-400 text-blue-400 px-5 py-2 rounded-lg shadow-lg hover:bg-blue-400 hover:text-white transition transform hover:scale-105">
                                Get Resume
                            </button>
                        </a>
                    </div>
                </div>
                <div
                    className="mt-6 md:mt-0 md:ml-6 md:w-1/2 flex justify-center animate-fadeInRight"
                >

                </div>
            </div>
        </div>
    );
};

export default Profile;
