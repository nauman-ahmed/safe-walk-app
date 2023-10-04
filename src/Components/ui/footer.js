import Logo from './logo';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">

        {/* Top area: Blocks */}
        

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-800">

          {/* Social icons */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a href="#0" className="flex justify-center items-center hover:text-light-green-400 hover:bg-purple-600 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 11.5c-0.6 0.3-1.2 0.4-1.9 0.5 0.7-0.4 1.2-1 1.4-1.8-0.6 0.4-1.3 0.6-2.1 0.8-0.6-0.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 0.3 0 0.5 0.1 0.7-2.7-0.1-5.2-1.4-6.8-3.4-0.3 0.5-0.4 1-0.4 1.7 0 1.1 0.6 2.1 1.5 2.7-0.5 0-1-0.2-1.5-0.4 0 1.6 1.1 2.9 2.6 3.2-0.3 0.1-0.6 0.1-0.9 0.1-0.2 0-0.4 0-0.6-0.1 0.4 1.3 1.6 2.3 3.1 2.3-1.1 0.9-2.5 1.4-4.1 1.4H8c1.5 0.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-0.4c0.7-0.5 1.3-1.1 1.7-1.8z" />
                </svg>
              </a>
            </li>
            <li className="ml-4">
              <a href="#0" className="flex justify-center items-center hover:text-light-green-400 hover:bg-purple-600 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 5c-2.8 0-5 2.2-5 5v3.4H13v4h3v12h5v-12h3.8l0.2-4h-4V10c0-1.2 0.4-2 2-2h2V4h-4z"/>
                </svg>
              </a>
            </li>

            {/* Remove unwanted social icons */}
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-600">&copy; Safe Walk. All rights reserved.</div>

        </div>

      </div>
    </footer>
  );
}
