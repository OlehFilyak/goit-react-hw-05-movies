import { IMAGE_URL } from "../../services/contactsGetMoviesAPI";
import PropTypes from "prop-types";
import castPersonDefaultImg from "../DefaultImages/castPerson.png";

function CastMovieList({ castMovies }) {
  return (
    <div>
      <ul>
        {castMovies !== 0 &&
          castMovies.map(({ cast_id, name, profile_path }) => (
            <li key={cast_id}>
              {
                <>
                  <img
                    src={
                      profile_path
                        ? `${IMAGE_URL}${profile_path}`
                        : castPersonDefaultImg
                    }
                    width={"100px"}
                    alt={name}
                  />
                </>
              }
              <p>{name}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default CastMovieList;

CastMovieList.propTypes = {
  castMovies: PropTypes.arrayOf(
    PropTypes.shape({
      cast_id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
    })
  ),
};
