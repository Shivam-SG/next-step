import JobCategorySlider from "./JobCategorySlider";

const BrowsebyCategories = () => {
    return (
      <div className="py-10 ">
        <div className="space-y-5">
          <h1 className="text-3xl md:text-[40px] text-center font-semibold text-[#262a2e]">
            Browse by category
          </h1>
          <p className="text-[#383e44] text-center md:text-2xl">
            Find the job that&apos;s perfect for you. about 800+ new jobs everyday
          </p>
        </div>
        <div className="container mx-auto p-3 md:p-10">
        <JobCategorySlider />
        </div>
      </div>
    );
  };
  
  export default BrowsebyCategories;
  