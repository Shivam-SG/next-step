const jobCategories = [
    { icon: "📊", title: "Management", jobs: "965 Jobs Available" },
    { icon: "🛍️", title: "Retail & Products", jobs: "563 Jobs Available" },
    { icon: "🔒", title: "Security Analyst", jobs: "254 Jobs Available" },
    { icon: "📄", title: "Content Writer", jobs: "142 Jobs Available" },
    { icon: "🔍", title: "Market Research", jobs: "532 Jobs Available" },
    { icon: "💸", title: "Finance", jobs: "168 Jobs Available" },
  ];
  
  const JoboftheDay = () => {
    return (
      <div className="mx-4 md:mx-10 lg:mx-20 xl:mx-40 my-10 md:my-20">
        <div className="flex items-center justify-center">
          <div className="space-y-4">
            <h1 className="text-[#262a2e] text-3xl md:text-[40px] font-semibold text-center">
              Jobs of the day
            </h1>
            <p className="text-[#383e44] text-base md:text-2xl text-center">
              Search and connect with the right candidates faster.
            </p>
          </div>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-7">
          {jobCategories.map((category, index) => (
            <div
              key={index}
              className={`flex items-center p-4 bg-white rounded-lg shadow-md border border-gray-200 hover:border-[#1b4b8b] transition ease-in-out duration-300 transform hover:scale-105 hover:shadow-lg ${
                index >= 4 ? "lg:col-span-2 lg:justify-center" : ""
              }`}
            >
              <div className="text-2xl mr-3">{category.icon}</div>
              <div>
                <h3 className="text-base font-semibold">{category.title}</h3>
                <p className="text-xs text-gray-500">{category.jobs}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default JoboftheDay;
  