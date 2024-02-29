const Shimmer = () => {
    return (
        <div className="w-full overflow-hidden">
            <div className="flex flex-col gap-4 p-4">
                {/* Shimmer Header */}
                <div className="bg-custom-defaultLight rounded-full h-20 animate-pulse"></div>

                {/* Shimmer Carousel */}
                <div className="bg-custom-defaultLight rounded-full h-64 animate-pulse"></div>

                {/* Shimmer Top Restaurants */}
                <div className="bg-custom-defaultLight rounded-full h-64 animate-pulse"></div>

                {/* Shimmer Restaurants */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {/* Restaurant Card Shimmer */}
                    {Array.from({ length: 10 }).map((_, index) => (
                        <div key={index} className="bg-blue-300 rounded-lg h-64 animate-pulse"></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shimmer;
