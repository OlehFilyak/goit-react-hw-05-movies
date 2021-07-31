import Loader from "react-loader-spinner";

function Spinner() {
  return (
    <div>
      <Loader type="ThreeDots" color="#3f51b5" height={280} width={280} />
    </div>
  );
}

export default Spinner;
