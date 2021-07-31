import PropTypes from "prop-types";

export default function ReviewMovie({ reviewsMovie }) {
  // console.log(reviewsMovie);
  // checkProps(reviewsMovie);
  if (reviewsMovie.length !== 0) {
    return (
      <ul>
        {reviewsMovie.map(({ author, content }) => (
          <li key={author}>
            <h3>{author}</h3>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    );
  } else {
    return <p>На жаль, нам не надали огляду такого фільму</p>;
  }
}

// function checkProps(reviewsMovie) {
//   if (reviewsMovie.length === 0) {
//     return;
//   }

//   ReviewMovie.propTypes = PropTypes.exact({
//     author: PropTypes.string,
//     content: PropTypes.string,
//   });
// }

ReviewMovie.propTypes = {
  reviewsMovie: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      content: PropTypes.string,
    })
  ),
};
