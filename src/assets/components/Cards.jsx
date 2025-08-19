import { useEffect, useState } from "react";

const Cards = () => {
  const [articles, setArticles] = useState([]);
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&pageSize=12&apiKey=${apiKey}`
        );
        const data = await response.json();
        setArticles(data.articles || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchData();
  }, [apiKey]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">🔋 Tesla News Highlights</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 hover:scale-[1.01] flex flex-col"
            >
              <div className="relative">
                <img
                  src={article.urlToImage || "https://via.placeholder.com/400x250?text=No+Image"}
                  alt={article.title}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                  {article.title || "Untitled Article"}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.description || "No description available."}
                </p>

                <div className="mt-auto flex items-center justify-between">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
                  >
                    Read More
                  </a>
                  <span className="text-xs text-gray-400">
                    {new Date(article.publishedAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-lg text-gray-500">
            ⏳ Loading Tesla news...
          </div>
        )}
      </div>
    </section>
  );
};

export default Cards;
