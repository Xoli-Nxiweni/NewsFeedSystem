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





// import { useState, useEffect } from "react";

// const useNewsData = (category, searchTerm) => {
//   const [newsData, setNewsData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     const fetchNewsData = async () => {
//       try {
//         setLoading(true);

//         // const apiKey = `ffe013dc507941f7bffdff3e9202bd5d`;
//         // const apiKey2 = `c23004fe1d4244a8824014b311789377`;
//         const apiKey = process.env.REACT_APP_NEWS_API_KEY;
//         const apiKey2 = process.env.REACT_APP_GNEWS_API_KEY;
//         console.log("News API Key:", apiKey);
//         // console.log("GNews API Key:", apiKey2);

//         if (!apiKey) {
//           throw new Error("API key is missing.");

//         }

//         // const apiUrl = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`;
//         const apiUrl = `https://newsapi.org/v2/top-headlines?country=za&apiKey=${apiKey}`;
//         // const apiUrl = `https://newsapi.org/v2/everything?q=keyword&apiKey=${apiKey}`;
//         // const apiUrl = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`;
//         const apiUrl2 = `https://gnews.io/api/v4/top-headlines?token=${apiKey2}&lang=en`;
//         const categoryParam = category ? `&category=${category}` : "";
//         const searchParam = searchTerm ? `&q=${searchTerm}` : "";
//         const url = apiUrl2 + categoryParam + searchParam;

//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error(`Error: ${response.statusText}`);
//         }

//         const southAfricanArticles = response.data.articles.filter(article => 
//           article.title.includes('South Africa') || article.description.includes('South Africa')
//         );
//         setArticles(southAfricanArticles);
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


// import { useState, useEffect } from "react";

// const useNewsData = (category, searchTerm) => {
//   const [newsData, setNewsData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchNewsData = async () => {
//       try {
//         setLoading(true);

//         const apiKey = process.env.REACT_APP_NEWS_API_KEY;
//         const apiKey2 = process.env.REACT_APP_GNEWS_API_KEY;

//         if (!apiKey || !apiKey2) {
//           throw new Error("API key is missing.");
//         }

//         // Choose the API URL based on your requirement
//         const apiUrl = `https://newsapi.org/v2/top-headlines?country=za&apiKey=${apiKey || apiKey2}`;
//         // const apiUrl2 = `https://gnews.io/api/v4/top-headlines?token=${apiKey2}&lang=en`;
//         const categoryParam = category ? `&category=${category}` : "";
//         const searchParam = searchTerm ? `&q=${searchTerm}` : "";
//         const url = apiUrl + categoryParam + searchParam;

//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error(`Error: ${response.statusText}`);
//         }

//         const data = await response.json();
        
//         // Filter articles to include only those relevant to South Africa
//         const southAfricanArticles = data.articles.filter(article => 
//           article.title.includes('South Africa') || article.description.includes('South Africa')
//         );

//         setNewsData(southAfricanArticles);
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


// import { useState, useEffect } from "react";

// const useNewsData = (category, searchTerm) => {
//   const [newsData, setNewsData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchNewsData = async () => {
//       try {
//         setLoading(true);

//         const apiKey = process.env.REACT_APP_NEWS_API_KEY;
//         const apiKey2 = process.env.REACT_APP_GNEWS_API_KEY;

//         if (!apiKey || !apiKey2) {
//           throw new Error("API key is missing.");
//         }

//         // Choose the API URL based on available API keys
//         const isUsingNewsAPI = apiKey && !apiKey2; // Use News API if apiKey is available and apiKey2 is not
//         const isUsingGNewsAPI = !apiKey && apiKey2; // Use GNews API if apiKey2 is available and apiKey is not
//         console.log(isUsingGNewsAPI);
//           console.log(isUsingNewsAPI);
          
//         let apiUrl;
//         if (isUsingNewsAPI) {
//           apiUrl = `https://newsapi.org/v2/top-headlines?country=za&apiKey=${apiKey}`;
//         } else if (isUsingGNewsAPI) {
//           apiUrl = `https://gnews.io/api/v4/top-headlines?token=${apiKey2}&lang=en`;
//         } else {
//           console.log(isUsingGNewsAPI);
//           console.log(isUsingNewsAPI);
//           throw new Error("No valid API key found.");
//         }

//         const categoryParam = category ? `&category=${category}` : "";
//         const searchParam = searchTerm ? `&q=${searchTerm}` : "";
//         const url = apiUrl + categoryParam + searchParam;

//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error(`Error: ${response.statusText}`);
//         }

//         const data = await response.json();

//         // Filter articles to include only those relevant to South Africa
//         const southAfricanArticles = data.articles?.filter(article => 
//           article.title?.includes('South Africa') || article.description?.includes('South Africa')
//         ) || [];

//         setNewsData(southAfricanArticles);
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

// import { useState, useEffect } from "react";

// const useNewsData = (category, searchTerm) => {
//   const [newsData, setNewsData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchNewsData = async () => {
//       try {
//         setLoading(true);

//         const apiKey = process.env.REACT_APP_NEWS_API_KEY;
//         const apiKey2 = process.env.REACT_APP_GNEWS_API_KEY;

//         console.log('API Key for News API:', apiKey);
//         console.log('API Key for GNews API:', apiKey2);

//         if (!apiKey && !apiKey2) {
//           throw new Error("API key is missing.");
//         }

//         // Determine which API to use based on available API keys
//         const isUsingNewsAPI = apiKey && !apiKey2;
//         const isUsingGNewsAPI = !apiKey && apiKey2;

//         console.log('Using News API:', isUsingNewsAPI);
//         console.log('Using GNews API:', isUsingGNewsAPI);

//         let apiUrl;
//         if (isUsingNewsAPI) {
//           apiUrl = `https://newsapi.org/v2/top-headlines?country=za&apiKey=${apiKey}`;
//         } else if (isUsingGNewsAPI) {
//           apiUrl = `https://gnews.io/api/v4/top-headlines?token=${apiKey2}&lang=en`;
//         } else {
//           throw new Error("No valid API key found.");
//         }

//         console.log('Constructed API URL:', apiUrl);

//         const categoryParam = category ? `&category=${category}` : "";
//         const searchParam = searchTerm ? `&q=${searchTerm}` : "";
//         const url = apiUrl + categoryParam + searchParam;

//         console.log('Final URL:', url);

//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error(`Error: ${response.statusText}`);
//         }

//         const data = await response.json();
        
//         console.log('Fetched Data:', data);

//         // Filter articles to include only those relevant to South Africa
//         const southAfricanArticles = data.articles?.filter(article => 
//           article.title?.includes('South Africa') || article.description?.includes('South Africa')
//         ) || [];

//         console.log('Filtered South African Articles:', southAfricanArticles);

//         setNewsData(southAfricanArticles);
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


// import { useState, useEffect } from "react";

// const useNewsData = (category, searchTerm) => {
//   const [newsData, setNewsData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchNewsData = async () => {
//       try {
//         setLoading(true);

//         const apiKey = process.env.REACT_APP_NEWS_API_KEY;
//         const apiKey2 = process.env.REACT_APP_GNEWS_API_KEY;

//         console.log('API Key for News API:', apiKey);
//         console.log('API Key for GNews API:', apiKey2);

//         // Ensure one API key is available for selection
//         if (!apiKey && !apiKey2) {
//           throw new Error("Both API keys are missing.");
//         }

//         // Determine which API to use based on available API keys
//         let apiUrl;
//         if (apiKey && !apiKey2) {
//           // Use News API if apiKey is available and apiKey2 is not
//           apiUrl = `https://newsapi.org/v2/top-headlines?country=za&apiKey=${apiKey}`;
//         } else if (!apiKey && apiKey2) {
//           // Use GNews API if apiKey2 is available and apiKey is not
//           apiUrl = `https://gnews.io/api/v4/top-headlines?token=${apiKey2}&lang=en`;
//         } else {
//           throw new Error("Invalid configuration: Both API keys are set or none is set.");
//         }

//         console.log('Constructed API URL:', apiUrl);

//         const categoryParam = category ? `&category=${category}` : "";
//         const searchParam = searchTerm ? `&q=${searchTerm}` : "";
//         const url = apiUrl + categoryParam + searchParam;

//         console.log('Final URL:', url);

//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error(`Error: ${response.statusText}`);
//         }

//         const data = await response.json();
        
//         console.log('Fetched Data:', data);

//         // Filter articles to include only those relevant to South Africa
//         const southAfricanArticles = data.articles?.filter(article => 
//           article.title?.includes('South Africa') || article.description?.includes('South Africa')
//         ) || [];

//         console.log('Filtered South African Articles:', southAfricanArticles);

//         setNewsData(southAfricanArticles);
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


// import { useState, useEffect } from "react";

// const useNewsData = (category, searchTerm) => {
//   const [newsData, setNewsData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchNewsData = async () => {
//       try {
//         setLoading(true);

//         const apiKey = process.env.REACT_APP_NEWS_API_KEY;
//         const apiKey2 = process.env.REACT_APP_GNEWS_API_KEY;

//         console.log('API Key for News API:', apiKey);
//         console.log('API Key for GNews API:', apiKey2);

//         // Check if API keys are non-empty strings
//         const isUsingNewsAPI = typeof apiKey === 'string' && apiKey.trim() !== '';
//         const isUsingGNewsAPI = typeof apiKey2 === 'string' && apiKey2.trim() !== '';

//         console.log('Using News API:', isUsingNewsAPI);
//         console.log('Using GNews API:', isUsingGNewsAPI);

//         let apiUrl;
//         if (isUsingNewsAPI) {
//           apiUrl = `https://newsapi.org/v2/top-headlines?country=za&apiKey=${apiKey}`;
//         } else if (isUsingGNewsAPI) {
//           apiUrl = `https://gnews.io/api/v4/top-headlines?token=${apiKey2}&lang=en`;
//         } else {
//           throw new Error("Both API keys are missing or invalid.");
//         }

//         console.log('Constructed API URL:', apiUrl);

//         const categoryParam = category ? `&category=${category}` : `&category=general`;
//         const searchParam = searchTerm ? `&q=${searchTerm}` : "";
//         const url = apiUrl + categoryParam + searchParam;

//         console.log('Final URL:', url);

//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error(`Error: ${response.statusText}`);
//         }

//         const data = await response.json();
        
//         console.log('Fetched Data:', data);

//         // Filter articles to include only those relevant to South Africa
//         // const southAfricanArticles = data.articles?.filter(article => 
//         //   article.title?.includes('South Africa') || article.description?.includes('South Africa')
//         // ) || [];

//         // console.log('Filtered South African Articles:', southAfricanArticles);

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

// import { useState, useEffect } from "react";

// const useNewsData = (category = "general", searchTerm = "") => {
//   const [newsData, setNewsData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchNewsData = async () => {
//       try {
//         setLoading(true);

//         const apiKey = process.env.REACT_APP_NEWS_API_KEY;
//         const apiKey2 = process.env.REACT_APP_GNEWS_API_KEY;

//         console.log('API Key for News API:', apiKey);
//         console.log('API Key for GNews API:', apiKey2);

//         // Check if API keys are non-empty strings
//         const isUsingNewsAPI = typeof apiKey === 'string' && apiKey.trim() !== '';
//         const isUsingGNewsAPI = typeof apiKey2 === 'string' && apiKey2.trim() !== '';

//         console.log('Using News API:', isUsingNewsAPI);
//         console.log('Using GNews API:', isUsingGNewsAPI);

//         let apiUrl;
//         if (isUsingNewsAPI) {
//           apiUrl = `https://newsapi.org/v2/top-headlines?country=za&apiKey=${apiKey}`;
//         } else if (isUsingGNewsAPI) {
//           apiUrl = `https://gnews.io/api/v4/top-headlines?token=${apiKey2}&lang=en`;
//         } else {
//           throw new Error("Both API keys are missing or invalid.");
//         }

//         console.log('Constructed API URL:', apiUrl);

//         const categoryParam = category ? `&category=${category}` : "&category=general";
//         const searchParam = searchTerm ? `&q=${searchTerm}` : "";
//         const url = apiUrl + categoryParam + searchParam;

//         console.log('Final URL:', url);

//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error(`Error: ${response.statusText}`);
//         }

//         const data = await response.json();

//         console.log('Fetched Data:', data);

//         // Directly use the fetched data without additional filtering
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

// import { useState, useEffect } from "react";

// const useNewsData = (category, searchTerm) => {
//   const [newsData, setNewsData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchNewsData = async () => {
//       const getOfflineArticles = () => {
//         const offlineArticles = JSON.parse(localStorage.getItem('offlineArticles')) || [];
//         return offlineArticles;
//       };

//       try {
//         setLoading(true);

//         const apiKey = process.env.REACT_APP_NEWS_API_KEY;
//         const apiKey2 = process.env.REACT_APP_GNEWS_API_KEY;

//         if (!apiKey && !apiKey2) {
//           throw new Error("Both API keys are missing.");
//         }

//         const isUsingNewsAPI = apiKey && !apiKey2;
//         const isUsingGNewsAPI = !apiKey && apiKey2;

//         let apiUrl;
//         if (isUsingNewsAPI) {
//           apiUrl = `https://newsapi.org/v2/top-headlines?country=za&apiKey=${apiKey}`;
//         } else if (isUsingGNewsAPI) {
//           apiUrl = `https://gnews.io/api/v4/top-headlines?token=${apiKey2}&lang=en`;
//         } else {
//           throw new Error("No valid API key found.");
//         }

//         const categoryParam = category ? `&category=${category}` : ``;
//         const searchParam = searchTerm ? `&q=${searchTerm}` : "";
//         const url = apiUrl + categoryParam + searchParam;

//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error(`Error: ${response.statusText}`);
//         }

//         const data = await response.json();
//         const southAfricanArticles = data.articles?.filter(article => 
//           article.title?.includes('South Africa') || article.description?.includes('South Africa')
//         ) || [];

//         // Store fetched articles in local storage for offline use
//         localStorage.setItem('offlineArticles', JSON.stringify(southAfricanArticles));

//         setNewsData(southAfricanArticles);
//       } catch (error) {
//         // Check if offline articles are available
//         const offlineArticles = getOfflineArticles();
//         if (offlineArticles.length > 0) {
//           setNewsData(offlineArticles);
//           setError(null); // Clear the error if offline articles are available
//         } else {
//           setError(error.message || "An error occurred.");
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNewsData();
//   }, [category, searchTerm]);

//   return { newsData, loading, error };
// };

// export default useNewsData;


// import { useState, useEffect } from "react";

// const useNewsData = (category, searchTerm) => {
//   const [newsData, setNewsData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchNewsData = async () => {
//       const getOfflineArticles = () => {
//         const offlineArticles = JSON.parse(localStorage.getItem('offlineArticles')) || [];
//         return offlineArticles;
//       };

//       try {
//         setLoading(true);

//         const apiKey = process.env.REACT_APP_NEWS_API_KEY;
//         const apiKey2 = false;

//         if (!apiKey && !apiKey2) {
//           throw new Error("Both API keys are missing.");
//         }

//         const isUsingNewsAPI = apiKey && !apiKey2; // News API supports categories
//         const isUsingGNewsAPI = !apiKey && apiKey2; // GNews API does not support categories

//         let apiUrl;
//         if (isUsingNewsAPI) {
//           apiUrl = `https://newsapi.org/v2/everything?country=za&apiKey=${apiKey}`;
//         } else if (isUsingGNewsAPI) {
//           apiUrl = `https://gnews.io/api/v4/top-headlines?token=${apiKey2}&lang=en`;
//         } else {
//           throw new Error("No valid API key found.");
//         }

//         const searchParam = searchTerm ? `&q=${searchTerm}` : "";
//         const url = apiUrl + searchParam;

//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error(`Error: ${response.statusText}`);
//         }

//         const data = await response.json();

//         let articles = data.articles || [];

//         if (isUsingNewsAPI && category) {
//           // Filter articles by category when using News API
//           articles = articles.filter(article => article.category === category);
//         }

//         // Store fetched articles in local storage for offline use
//         localStorage.setItem('offlineArticles', JSON.stringify(articles));

//         setNewsData(articles);
//       } catch (error) {
//         // Check if offline articles are available
//         const offlineArticles = getOfflineArticles();
//         if (offlineArticles.length > 0) {
//           setNewsData(offlineArticles);
//           setError(null); // Clear the error if offline articles are available
//         } else {
//           setError(error.message || "An error occurred.");
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNewsData();
//   }, [category, searchTerm]);

//   return { newsData, loading, error };
// };

// export default useNewsData;

// import { useState, useEffect } from "react";

// const useNewsData = (category, searchTerm) => {
//   const [newsData, setNewsData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchNewsData = async () => {
//       const getOfflineArticles = () => {
//         const offlineArticles = JSON.parse(localStorage.getItem('offlineArticles')) || [];
//         return offlineArticles;
//       };

//       try {
//         setLoading(true);

//         const apiKey = process.env.REACT_APP_NEWS_API_KEY;
//         const apiKey2 = process.env.REACT_APP_GNEWS_API_KEY;

//         if (!apiKey && !apiKey2) {
//           throw new Error("Both API keys are missing.");
//         }

//         const isUsingNewsAPI = apiKey && !apiKey2; // News API supports categories
//         const isUsingGNewsAPI = !apiKey && apiKey2; // GNews API does not support categories

//         let apiUrl;
//         if (isUsingNewsAPI) {
//           apiUrl = `https://newsapi.org/v2/top-headlines?country=za&apiKey=${apiKey}`;
//         } else if (isUsingGNewsAPI) {
//           // GNews API search endpoint
//           apiUrl = `https://gnews.io/api/v4/search?q=${searchTerm || 'general'}&lang=en&country=za&max=10&apikey=${apiKey2}`;
//         } else {
//           throw new Error("No valid API key found.");
//         }

//         const response = await fetch(apiUrl);
//         if (!response.ok) {
//           throw new Error(`Error: ${response.statusText}`);
//         }

//         const data = await response.json();
//         const articles = data.articles || [];

//         // Store fetched articles in local storage for offline use
//         localStorage.setItem('offlineArticles', JSON.stringify(articles));

//         // Filter articles by category for the News API
//         let filteredArticles = articles;
//         if (isUsingNewsAPI && category) {
//           filteredArticles = articles.filter(article => article.category === category);
//         }

//         setNewsData(filteredArticles);
//       } catch (error) {
//         // Check if offline articles are available
//         const offlineArticles = getOfflineArticles();
//         if (offlineArticles.length > 0) {
//           setNewsData(offlineArticles);
//           setError(null); // Clear the error if offline articles are available
//         } else {
//           setError(error.message || "An error occurred.");
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNewsData();
//   }, [category, searchTerm]);

//   return { newsData, loading, error };
// };

// export default useNewsData;

// import { useState, useEffect } from "react";

// const useNewsData = (category, searchTerm) => {
//   const [newsData, setNewsData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchNewsData = async () => {
//       const getOfflineArticles = () => {
//         const offlineArticles = JSON.parse(localStorage.getItem('offlineArticles')) || [];
//         return offlineArticles;
//       };

//       try {
//         setLoading(true);

//         const apiKey = process.env.REACT_APP_NEWS_API_KEY;
//         // const apiKey = false;
//         // const apiKey2 = process.env.REACT_APP_GNEWS_API_KEY;
//         const apiKey2 = false;

//         if (!apiKey && !apiKey2) {
//           throw new Error("Both API keys are missing.");
//         }

//         let apiUrl;

//         // Construct API URL based on the available API key
//         if (apiKey) {
//           // News API
//           apiUrl = `https://newsapi.org/v2/top-headlines?country=za&apiKey=${apiKey}`;
//           if (category) {
//             apiUrl += `&category=${category}`;
//           }
//           if (searchTerm) {
//             apiUrl += `&q=${searchTerm}`;
//           }
//         } else if (apiKey2) {
//           // GNews API
//           apiUrl = `https://gnews.io/api/v4/search?q=${searchTerm || 'general'}&lang=en&country=za&max=10&apikey=${apiKey2}`;
//         } else {
//           throw new Error("No valid API key found.");
//         }

//         console.log('Constructed API URL:', apiUrl);

//         const response = await fetch(apiUrl);
//         if (!response.ok) {
//           throw new Error(`Error: ${response.statusText}`);
//         }

//         const data = await response.json();
//         const articles = data.articles || [];

//         // Store fetched articles in local storage for offline use
//         localStorage.setItem('offlineArticles', JSON.stringify(articles));

//         // Filter articles by category if using News API
//         let filteredArticles = articles;
//         if (apiKey && category) {
//           filteredArticles = articles.filter(article => article.category === category);
//         }

//         setNewsData(filteredArticles);
//       } catch (error) {
//         // Check if offline articles are available
//         const offlineArticles = getOfflineArticles();
//         if (offlineArticles.length > 0) {
//           setNewsData(offlineArticles);
//           setError(null); // Clear the error if offline articles are available
//         } else {
//           setError(error.message || "An error occurred.");
//         }
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
      const getOfflineArticles = () => {
        const offlineArticles = JSON.parse(localStorage.getItem('offlineArticles')) || [];
        return offlineArticles;
      };

      try {
        setLoading(true);

        const apiKey = process.env.REACT_APP_NEWS_API_KEY;
        const apiKey2 = process.env.REACT_APP_GNEWS_API_KEY;

        if (!apiKey && !apiKey2) {
          throw new Error("Both API keys are missing.");
        }

        let apiUrl;

        // Construct API URL based on the available API key
        if (apiKey) {
          // News API /v2/everything endpoint
          apiUrl = `https://newsapi.org/v2/everything?q=${encodeURIComponent(searchTerm || 'general')}&apiKey=${apiKey}`;
          if (category) {
            // Optionally use the category parameter to refine search
            apiUrl += `&category=${category}`;
          }
        } else if (apiKey2) {
          // GNews API
          apiUrl = `https://gnews.io/api/v4/search?q=${encodeURIComponent(searchTerm || 'general')}&lang=en&country=za&max=10&apikey=${apiKey2}`;
        } else {
          throw new Error("No valid API key found.");
        }

        console.log('Constructed API URL:', apiUrl);

        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        const articles = data.articles || [];

        // Store fetched articles in local storage for offline use
        localStorage.setItem('offlineArticles', JSON.stringify(articles));

        // Filter articles by category if using News API
        let filteredArticles = articles;
        if (apiKey && category) {
          filteredArticles = articles.filter(article => {
            // Assuming category is in the article source or description; adjust as needed
            return article.description && article.description.includes(category);
          });
        }

        setNewsData(filteredArticles);
      } catch (error) {
        // Check if offline articles are available
        const offlineArticles = getOfflineArticles();
        if (offlineArticles.length > 0) {
          setNewsData(offlineArticles);
          setError(null); // Clear the error if offline articles are available
        } else {
          setError(error.message || "An error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNewsData();
  }, [category, searchTerm]);

  return { newsData, loading, error };
};

export default useNewsData;
