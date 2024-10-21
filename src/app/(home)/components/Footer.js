export default function Footer() {
  return (
    <footer className="bg-white py-10 border-t border-gray-200">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          {/* Left Section */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
            <img
                src="/logo.png" // Replace with your logo path
                alt="JobBox Logo"
                className="w-20 mr-2"
              />
              <span className="text-2xl font-bold text-gray-800">Next Step</span>
            </div>
            <p className="text-sm text-gray-500 max-w-xs leading-6">
            Next-Step is the heart of the design community and the best resource
              to discover and connect with designers and jobs worldwide.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-700">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Link Sections */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-800">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-800">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-800">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-800">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800">Community</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-800">
                    Feature
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-800">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-800">
                    Credit
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-800">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-800">
                    iOS
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-800">
                    Android
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-800">
                    Microsoft
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-800">
                    Desktop
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800">More</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-800">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-800">
                    Help
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-800">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-800">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Download App Section */}
          <div className="mt-8 md:mt-0">
            <h3 className="text-lg font-semibold text-gray-800">
              Download App
            </h3>
            <p className="mt-4 text-sm text-gray-500">
              Download our Apps and get extra 15% Discount on your first
              Order...!
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="w-29"
                />
              </a>
              <a href="#">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="w-32"
                />
              </a>
            </div>
          </div>
        </div>

        <hr className="mt-16"/>

        {/* Footer Bottom */}
        <div className="mt-8 flex flex-col md:flex-row md:justify-between md:items-center">
          <p className="text-sm text-gray-500">
            Copyright © 2022. Next-Step all rights reserved.
          </p>
          <div className="mt-4 md:mt-0 md:flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-800">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-800">
              Terms & Conditions
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-800">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
