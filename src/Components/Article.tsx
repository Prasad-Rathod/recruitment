import { Calendar, ChevronRight, User } from "lucide-react";
import Hiring from '../assets/Hiring.jpg'
const Article = () => {
  return (
        <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white border border-gray-200 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="bg-gray-100 h-64 lg:h-auto flex items-center justify-center">
              <img src={Hiring} alt=""  />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                Featured Article
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                Beyond Bias: Practical Steps for Reducing Ageism in Recruiting
              </h1>
              <p className="text-gray-600 mb-6 leading-relaxed">
                In an AI-driven world, ageism in hiring isn't just bias—it's a business risk. Talent leader offers guidance for recognizing bias and building more inclusive recruiting practices.
              </p>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                  <User className="h-5 w-5 text-gray-500" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Anne Royse</div>
                  <div className="text-xs text-gray-500 flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    March 15, 2025
                  </div>
                </div>
              </div>
              <button className="inline-flex items-center text-sm font-semibold hover:underline">
                Read Article <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article;