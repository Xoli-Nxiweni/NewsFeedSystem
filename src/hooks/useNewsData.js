// import { useState, useEffect } from "react";

// const useNewsData = (category, searchTerm) => {
//   const [newsData, setNewsData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchNewsData = async () => {
//       try {
//         setLoading(true);

//         const apiKey = process.env.REACT_APP_GNEWS_API_KEY;
//         if (!apiKey) {
//           throw new Error("API key is missing.");
//         }

//         const apiUrl = `https://gnews.io/api/v4/top-headlines?token=${apiKey}`;
//         const categoryParam = category ? `&topic=${category}` : "";
//         const searchParam = searchTerm ? `&q=${searchTerm}` : "";
//         const url = apiUrl + categoryParam + searchParam;
        
//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error(`Error: ${response.statusText}`);
//         }
        
//         const data = await response.json();

//         setNewsData(data.articles || []);
//       } catch (error) {
//         setError(error.message || "An error occurred.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNewsData();
//   }, [category, searchTerm]);

//   return { newsData, loading, error };
// };

// export default useNewsData;





import { useState, useEffect } from "react";

const useNewsData = (category, searchTerm) => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        setLoading(true);

        const apiKey = `ffe013dc507941f7bffdff3e9202bd5d`;
        console.log("API Key:", apiKey);
        if (!apiKey) {
          throw new Error("API key is missing.");
        }

        const apiUrl = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=ffe013dc507941f7bffdff3e9202bd5d`;
        const categoryParam = category ? `&category=${category}` : "";
        const searchParam = searchTerm ? `&q=${searchTerm}` : "";
        const url = apiUrl + categoryParam + searchParam;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        setNewsData(data.articles || []);
      } catch (error) {
        setError(error.message || "An error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchNewsData();
  }, [category, searchTerm]);

  return { newsData, loading, error };
};

export default useNewsData;
