const Categories = () => {
  const categories = [
    { name: 'Process', count: 45 },
    { name: 'Tools', count: 32 },
    { name: 'Future', count: 28 },
    { name: 'Remote', count: 24 },
    { name: 'Employer Branding', count: 38 },
    { name: 'MNC', count: 38 },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className="bg-white border border-gray-200 p-6 hover:border-black transition-all duration-300 text-left group"
            >
              <div className="text-sm font-semibold mb-1 group-hover:underline">
                {category.name}
              </div>
              <div className="text-xs text-gray-500">{category.count} articles</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories