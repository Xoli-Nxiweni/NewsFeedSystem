// import { useState, useEffect } from "react";
// import NewsList from "./Components/NewsList";
// import "./App.css";
// import { FaMagnifyingGlass } from "react-icons/fa6";

// function App() {
//   const [category, setCategory] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [bookmarks, setBookmarks] = useState(() => {
//     const savedBookmarks = JSON.parse(localStorage.getItem('bookmarks'));
//     return savedBookmarks || [];
//   });
//   const [offlineArticles, setOfflineArticles] = useState(() => {
//     const savedOfflineArticles = JSON.parse(localStorage.getItem('offlineArticles'));
//     return savedOfflineArticles || [];
//   });

//   useEffect(() => {
//     const requestNotificationPermission = async () => {
//       if ('Notification' in window) {
//         const permission = await Notification.requestPermission();
//         if (permission === 'granted') {
//           console.log('Notification permission granted.');
//         }
//       }
//     };

//     requestNotificationPermission();
//   }, []);

//   const handleCategoryClick = (category) => {
//     setCategory(category);
//     setSearchTerm("");
//   };

//   const handleSearch = (event) => {
//     event.preventDefault();
//     setCategory("");
//     setSearchTerm(event.target.search.value);
//   };

//   const toggleBookmark = (article) => {
//     setBookmarks((prevBookmarks) => {
//       const newBookmarks = prevBookmarks.includes(article.url)
//         ? prevBookmarks.filter((url) => url !== article.url)
//         : [...prevBookmarks, article.url];
//       localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
//       return newBookmarks;
//     });
//   };

//   const cacheArticleForOffline = (article) => {
//     setOfflineArticles((prevOfflineArticles) => {
//       const newOfflineArticles = prevOfflineArticles.some((cachedArticle) => cachedArticle.url === article.url)
//         ? prevOfflineArticles
//         : [...prevOfflineArticles, article];
//       localStorage.setItem('offlineArticles', JSON.stringify(newOfflineArticles));
//       return newOfflineArticles;
//     });
//   };

//   const handleShare = (url) => {
//     if (navigator.share) {
//       navigator.share({
//         title: 'Check out this news article',
//         url: url,
//       }).catch((error) => console.error('Error sharing:', error));
//     } else {
//       console.log('Web Share API not supported');
//     }
//   };

//   return (
//     <div className="app-container">
//       <nav className="navbar">
//         <div className="navbar-content">
//           <a href="/" className="navbar-brand">NEWSIPEDIA</a>

//           <form onSubmit={handleSearch} className="search-form">
//             <input
//               type="text"
//               placeholder="Search"
//               name="search"
//               className="search-input"
//             />
//             <button type="submit" className="search-button">
//               <FaMagnifyingGlass />
//             </button>
//           </form>
//         </div>
//       </nav>

//       <div className="content-container">
//         <div className="content-layout">
//           <div className="sidebar">
//             <h5 className="sidebar-title">Categories</h5>
//             <nav className="sidebar-nav">
//               {["business", "technology", "sports", "entertainment"].map((cat) => (
//                 <button
//                   key={cat}
//                   className="sidebar-link"
//                   onClick={() => handleCategoryClick(cat)}
//                 >
//                   {cat.charAt(0).toUpperCase() + cat.slice(1)}
//                 </button>
//               ))}
//             </nav>
//           </div>

//           <div className="main-content">
//             <NewsList
//               category={category}
//               searchTerm={searchTerm}
//               bookmarks={bookmarks}
//               toggleBookmark={toggleBookmark}
//               handleShare={handleShare}
//               cacheArticleForOffline={cacheArticleForOffline}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;



// import { useState, useEffect } from "react";
// import NewsList from "./Components/NewsList";
// import "./App.css";
// import { FaMagnifyingGlass } from "react-icons/fa6";

// function App() {
//   const [category, setCategory] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [bookmarks, setBookmarks] = useState(() => {
//     const savedBookmarks = JSON.parse(localStorage.getItem('bookmarks'));
//     return savedBookmarks || [];
//   });
//   const [offlineArticles, setOfflineArticles] = useState(() => {
//     const savedOfflineArticles = JSON.parse(localStorage.getItem('offlineArticles'));
//     return savedOfflineArticles || [];
//   });

//   useEffect(() => {
//     const requestNotificationPermission = async () => {
//       if ('Notification' in window) {
//         const permission = await Notification.requestPermission();
//         if (permission === 'granted') {
//           console.log('Notification permission granted.');
//         }
//       }
//     };

//     requestNotificationPermission();
//   }, []);

//   const handleCategoryClick = (category) => {
//     setCategory(category);
//     setSearchTerm(""); // Clear search term when category changes
//   };

//   const handleSearch = (event) => {
//     event.preventDefault();
//     setCategory(""); // Clear category when performing a search
//     setSearchTerm(event.target.search.value);
//   };

//   const toggleBookmark = (article) => {
//     setBookmarks((prevBookmarks) => {
//       const newBookmarks = prevBookmarks.includes(article.url)
//         ? prevBookmarks.filter((url) => url !== article.url)
//         : [...prevBookmarks, article.url];
//       localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
//       return newBookmarks;
//     });
//   };

//   const cacheArticleForOffline = (article) => {
//     setOfflineArticles((prevOfflineArticles) => {
//       const newOfflineArticles = prevOfflineArticles.some((cachedArticle) => cachedArticle.url === article.url)
//         ? prevOfflineArticles
//         : [...prevOfflineArticles, article];
//       localStorage.setItem('offlineArticles', JSON.stringify(newOfflineArticles));
//       return newOfflineArticles;
//     });
//   };

//   const handleShare = (url) => {
//     if (navigator.share) {
//       navigator.share({
//         title: 'Check out this news article',
//         url: url,
//       }).catch((error) => console.error('Error sharing:', error));
//     } else {
//       console.log('Web Share API not supported');
//     }
//   };

//   return (
//     <div className="app-container">
//       <nav className="navbar">
//         <div className="navbar-content">
//           <a href="/" className="navbar-brand">NEWSIPEDIA</a>

//           <form onSubmit={handleSearch} className="search-form">
//             <input
//               type="text"
//               placeholder="Search"
//               name="search"
//               className="search-input"
//               defaultValue={searchTerm} // Retain search term across renders
//             />
//             <button type="submit" className="search-button">
//               <FaMagnifyingGlass />
//             </button>
//           </form>
//         </div>
//       </nav>

//       <div className="content-container">
//         <div className="content-layout">
//           <div className="sidebar">
//             <h5 className="sidebar-title">Categories</h5>
//             <nav className="sidebar-nav">
//               {["business", "technology", "sports", "entertainment"].map((cat) => (
//                 <button
//                   key={cat}
//                   className="sidebar-link"
//                   onClick={() => handleCategoryClick(cat)}
//                 >
//                   {cat.charAt(0).toUpperCase() + cat.slice(1)}
//                 </button>
//               ))}
//             </nav>
//           </div>

//           <div className="main-content">
//             <NewsList
//               category={category}
//               searchTerm={searchTerm}
//               bookmarks={bookmarks}
//               toggleBookmark={toggleBookmark}
//               handleShare={handleShare}
//               cacheArticleForOffline={cacheArticleForOffline}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


import { useState, useEffect } from "react";
import NewsList from "./Components/NewsList";
import "./App.css";
import { FaMagnifyingGlass } from "react-icons/fa6";

function App() {
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [bookmarks, setBookmarks] = useState(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    return savedBookmarks || [];
  });
  const [offlineArticles, setOfflineArticles] = useState(() => {
    const savedOfflineArticles = JSON.parse(localStorage.getItem('offlineArticles'));
    return savedOfflineArticles || [];
  });

  useEffect(() => {
    const requestNotificationPermission = async () => {
      if ('Notification' in window) {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
          console.log('Notification permission granted.');
        }
      }
    };

    requestNotificationPermission();
  }, []);

  const handleCategoryClick = (category) => {
    setCategory(category);
    setSearchTerm(""); // Clear search term when category changes
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setCategory(""); // Clear category when performing a search
    setSearchTerm(event.target.search.value);
  };

  const toggleBookmark = (article) => {
    setBookmarks((prevBookmarks) => {
      const newBookmarks = prevBookmarks.includes(article.url)
        ? prevBookmarks.filter((url) => url !== article.url)
        : [...prevBookmarks, article.url];
      localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
      return newBookmarks;
    });
  };

  const cacheArticleForOffline = (article) => {
    setOfflineArticles((prevOfflineArticles) => {
      // Check if the article is already in offline articles
      const articleExists = prevOfflineArticles.some((cachedArticle) => cachedArticle.url === article.url);
      
      if (articleExists) {
        return prevOfflineArticles; // If the article already exists, return the previous state
      }

      // Add the new article to offline articles
      const newOfflineArticles = [...prevOfflineArticles, article];

      // Update local storage
      localStorage.setItem('offlineArticles', JSON.stringify(newOfflineArticles));

      return newOfflineArticles;
    });
  };

  const handleShare = (url) => {
    if (navigator.share) {
      navigator.share({
        title: 'Check out this news article',
        url: url,
      }).catch((error) => console.error('Error sharing:', error));
    } else {
      console.log('Web Share API not supported');
    }
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="navbar-content">
          <a href="/" className="navbar-brand">NEWSIPEDIA</a>

          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="Search"
              name="search"
              className="search-input"
              defaultValue={searchTerm} // Retain search term across renders
            />
            <button type="submit" className="search-button">
              <FaMagnifyingGlass />
            </button>
          </form>
        </div>
      </nav>

      <div className="content-container">
        <div className="content-layout">
          <div className="sidebar">
            <h5 className="sidebar-title">Categories</h5>
            <nav className="sidebar-nav">
              {["business", "technology", "sports", "entertainment"].map((cat) => (
                <button
                  key={cat}
                  className="sidebar-link"
                  onClick={() => handleCategoryClick(cat)}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          <div className="main-content">
            <NewsList
              category={category}
              searchTerm={searchTerm}
              bookmarks={bookmarks}
              toggleBookmark={toggleBookmark}
              handleShare={handleShare}
              cacheArticleForOffline={cacheArticleForOffline}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
