import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col  font-serif items-center justify-center min-h-screen bg-gray-900 text-white p-5">
      <div className="bg-gray-800 shadow-2xl rounded-2xl p-8 max-w-4xl w-full transition-all duration-700 ease-in-out transform hover:scale-105 font-times">

        {/* Education Section */}
        <div className="mb-8 animate-fadeInUp">
          <h4 className="text-2xl font-bold text-blue-400 text-center mb-4">
            Education 🎓
          </h4>
          <div className="bg-gray-700 p-4 mb-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <p className="text-l font-semibold text-blue-300">
              B.Tech in Electronics and Computer Science
            </p>
            <p className="text-gray-300 text-sm">
              Shri Ramdeobaba College of Engineering and Management
            </p>
            <span className="font-medium text-gray-400">CGPA: 9.53</span>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <p className="text-l font-semibold text-blue-300">
              Higher Secondary School
            </p>
            <p className="text-gray-300 text-sm">
              St.Paul Junior College, Nagpur
            </p>
            <span className="font-medium text-gray-400">percentage :95.60</span>
          </div>


        </div>

        {/* Technologies Section */}
        <div className="text-center animate-fadeInUp">
          <h6 className="text-2xl font-semibold text-blue-400 mb-8">
            Technologies I Know 💻
          </h6>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-5 justify-center items-center">
            <i className="devicon-html5-plain colored text-5xl transition-transform transform hover:scale-110"></i>
            <i className="devicon-css3-plain colored text-5xl transition-transform transform hover:scale-110"></i>
            <i className="devicon-javascript-plain colored text-5xl transition-transform transform hover:scale-110"></i>
            <i className="devicon-react-original colored text-5xl transition-transform transform hover:scale-110"></i>
            <i className="devicon-github-original colored text-5xl transition-transform transform hover:scale-110"></i>
          </div>
        </div>
      </div>
    </div >
  );
};

export default About;
