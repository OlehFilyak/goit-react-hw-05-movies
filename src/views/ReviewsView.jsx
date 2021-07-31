import { useState, useEffect } from "react";
import getReviewMovie from "../services/getReviewMovie";
import ReviewMovie from "../Components/ReviewMovie";

function ReviewsView({ movieId }) {
  const [reviewsMovie, setReviewsMovie] = useState([]);
  useEffect(() => {
    async function getReviewForMovie() {
      try {
        const movieReview = await getReviewMovie(movieId);
        setReviewsMovie(movieReview);
      } catch (error) {
        console.log(error);
      }
    }
    getReviewForMovie();
  }, [movieId]);

  return (
    <div>
      <ReviewMovie reviewsMovie={reviewsMovie} />
    </div>
  );
}

export default ReviewsView;
