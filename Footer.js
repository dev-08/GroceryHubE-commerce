import React from 'react';

function Footer() {
  return (
    <footer className="text-gray-600 bg-purple-700 border-t-4 border-indigo-500 body-font">
      <div className="container px-0 py-2 mx-auto">
        <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
          <div className="lg:w-1/3 md:w-1/2 w-full px-4 m-10">
            <h2 className="title-font font-semibold tracking-widest text-3xl text-center text-white mb-3">Future</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white hover:text-gray-800 text-xl">Development</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800 text-xl">Research</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800 text-xl">Career</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4 m-10">
            <h2 className="title-font font-semibold text-white tracking-widest text-center text-3xl mb-3">Services</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white hover:text-gray-800 text-xl">Return order</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800 text-xl">Home</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800 text-xl">Order Status</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
          <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
            <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
              <label htmlFor="footer-field" className="leading-7 text-3xl text-white">Sign Up for newsletter</label>
              <input
                type="text"
                id="footer-field"
                name="footer-field"
                className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
              Subscribe
            </button>
          </div>
          <p className="text-gray-500 text-sm text-center mt-4">
            Stay updated with our latest news and promotions!
          </p>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © Grocery Hub{' '}
            <a
              href="https://twitter.com/knyttneve"
              className="text-gray-600 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              @Patel
            </a>
          </p>
          <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
            Enamel pin tousled raclette tacos irony
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
