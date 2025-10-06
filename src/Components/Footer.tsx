import { BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-5 w-5" />
              <span className="font-bold">lotustalents</span>
            </div>
            <p className="text-sm text-gray-600">
              Insights and strategies for modern talent acquisition
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="about" className="hover:text-black">About</a></li>
              <li><a href="contact" className="hover:text-black">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="privacy" className="hover:text-black">Privacy Policy</a></li>
              <li><a href="terms" className="hover:text-black">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2025 lotustalents.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};


export default Footer;