
import ReviewsLayout from "../layouts/ReviewsLayout";
import FormReviews from "../components/reviews/FormReviews"
import BookReviews from "../components/reviews/BookReviews"

function Reviews(props) {

    return (
      <ReviewsLayout 
        search={<FormReviews/>}
        reviewsbook={<BookReviews/>}
       
        />
    );
  }

export default Reviews;