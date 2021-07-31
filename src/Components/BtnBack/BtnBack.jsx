import { RiArrowGoBackLine } from "react-icons/ri";
import PropTypes from "prop-types";

function BtnBack({ onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        type="button"
        style={{ display: "block", marginBottom: "20px", marginTop: "10px" }}
      >
        <p>
          <RiArrowGoBackLine style={{ marginRight: "5px" }} />
          Lets go back?
        </p>
      </button>
    </div>
  );
}

export default BtnBack;

BtnBack.propTypes = {
  onClick: PropTypes.func.isRequired,
};
