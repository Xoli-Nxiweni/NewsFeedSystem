import { useState } from "react";
import useNewsData from "../hooks/useNewsData";
import CustomPagination from "./CustomPagination";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  CircularProgress,
  Box,
  Alert,
  IconButton,
} from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";
import DownloadIcon from "@mui/icons-material/Download";

const NewsList = ({
  category,
  searchTerm,
  bookmarks,
  toggleBookmark,
  handleShare,
  cacheArticleForOffline,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;

  const onPageChange = (pageNumber) => setCurrentPage(pageNumber);

  const { newsData, loading, error } = useNewsData(category, searchTerm);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
      >
        <CircularProgress size={60} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <Alert severity="error">Error: {error}. Please try again.</Alert>
      </Box>
    );
  }

  const totalArticles = newsData.length;
  const totalPages = Math.ceil(totalArticles / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const currentArticles = newsData.slice(startIndex, startIndex + pageSize);

  return (
    <Box sx={{ backgroundColor: "#fafafa", py: 6 }}>
      <Typography variant="h3" align="center" sx={{ mb: 5, fontWeight: 700 }}>
        {/* {category ? `${category} News` : "Latest News"} */}
      </Typography>

      <Grid container spacing={4} sx={{ padding: { xs: 2, sm: 3, md: 4 } }}>
  {currentArticles.map((article) => (
    <Grid item xs={12} sm={6} md={4} key={article.url}>
      <Card
        sx={{
          borderRadius: 5,
          boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.03)",
          },
        }}
      >
        {article.urlToImage && (
          <CardMedia
            component="img"
            image={article.urlToImage}
            alt={article.title}
            sx={{ height: { xs: "150px", sm: "180px", md: "200px" }, objectFit: "cover", borderRadius: "5px 5px 0 0" }}
          />
        )}
        <CardContent sx={{ minHeight: 180 }}>
          <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 600, lineHeight: 1.5 }}>
            {article.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {article.description?.length > 120
              ? `${article.description.substring(0, 120)}...`
              : article.description}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
          <Button
            size="medium"
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            sx={{
              borderRadius: 20,
              px: 3,
              fontWeight: 500,
              color: "#1976d2",
            }}
          >
            Read More
          </Button>
          <Box>
            <IconButton onClick={() => toggleBookmark(article)} color="default">
              {bookmarks.includes(article.url) ? (
                <BookmarkIcon sx={{ color: "#ff4081" }} />
              ) : (
                <BookmarkBorderIcon />
              )}
            </IconButton>
            <IconButton onClick={() => handleShare(article.url)}>
              <ShareIcon />
            </IconButton>
            <IconButton onClick={() => cacheArticleForOffline(article)}>
              <DownloadIcon />
            </IconButton>
          </Box>
        </CardActions>
      </Card>
    </Grid>
  ))}
</Grid>


      {/* Pagination */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <CustomPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </Box>
    </Box>
  );
};

export default NewsList;
