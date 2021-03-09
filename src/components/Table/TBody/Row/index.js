import PropTypes from "prop-types";

const Row = ({ name, job }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{job}</td>
      <td>
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          type="button"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

Row.defaultProps = {
  job: "N/A",
};

Row.propTypes = {
  name: PropTypes.string.isRequired,
  job: PropTypes.string,
};

export default Row;
