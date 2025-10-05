import { useState } from "react";

const CategoryTabs = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'process', label: 'lotustalents Process' },
    { id: 'branding', label: 'Employer Branding' },
    { id: 'remote', label: 'Hiring Remote Talent' },
    { id: 'future', label: 'The Future of lotustalents' },
    { id: 'tools', label: 'Tools and Tech' },
  ];

  return (
    <section className="sticky top-16 bg-white border-b border-gray-200 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto no-scrollbar">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`flex-shrink-0 px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === category.id
                  ? 'text-black border-b-2 border-black'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};


export default CategoryTabs;