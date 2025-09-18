import { useEffect } from "react";
import Article1 from "./Article1";
import Article2 from "./Article2";
import Article3 from "./Article3";
import Article4 from "./Article4";
import Article5 from "./Article5";

const FullArticles = () => {
  useEffect(() => {
    // Check if there's a hash in the URL and scroll to that article
    if (window.location.hash) {
      const articleId = window.location.hash.substring(1); // Remove the # symbol
      const element = document.getElementById(articleId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Small delay to ensure the page has rendered
      }
    }
  }, []);

  return (
    <div className="bg-background">
      <Article1 />
      <Article2 />
      <Article3 />
      <Article4 />
      <Article5 />
    </div>
  );
};

export default FullArticles;