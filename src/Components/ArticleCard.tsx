import { User } from "lucide-react";

interface ArticleCardProps {
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  featured?: boolean;
}

const ArticleCard = ({ category, title, excerpt, author, date,image, featured = false }:ArticleCardProps) => {
  return (
    <article className={`bg-white border border-gray-200 hover:border-black transition-all duration-200 group ${featured ? 'lg:col-span-2' : ''}`}>
      <div className={`grid ${featured ? 'lg:grid-cols-2' : 'grid-cols-1'}`}>
        <div className={`bg-gray-100 ${featured ? 'h-64 lg:h-full' : 'h-48'} flex items-center justify-center overflow-hidden`}>
            <img 
            src={image} 
            alt={title}
            className="group-hover:scale-101 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
            {category}
          </div>
          <h2 className={`${featured ? 'text-2xl' : 'text-xl'} font-bold mb-3 leading-tight group-hover:underline`}>
            {title}
          </h2>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {excerpt}
          </p>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">
              <User className="h-4 w-4 text-gray-500" />
            </div>
            <div className="flex-1">
              <div className="text-xs font-semibold">{author}</div>
              <div className="text-xs text-gray-500">{date}</div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard