import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto flex flex-wrap justify-center">
                <div className="w-full sm:w-1/3">
                    
                    <div className="flex justify-center gap-3">
                        <a href="https://github.com/sorre1234" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-green-600 inline-block mx-2 my-2">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://x.com/MayyaSourab" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-400 inline-block mx-2 my-2">
                            <i className="fab fa-twitter"></i>
                        </a>
                        {/* <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-pink-500 inline-block mx-2 my-2">
                            <i className="fab fa-instagram"></i>
                        </a> */}
                        <a href="https://www.linkedin.com/in/sourab-mayya-531719236/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-700 inline-block mx-2 my-2">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
