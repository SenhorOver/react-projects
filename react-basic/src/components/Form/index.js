import PropsTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';

import './Form.css';

export default function Form({ handleSubmit, handleChange, novaTarefa }) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <input type="text" value={novaTarefa} onChange={handleChange} />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes = {
  handleChange: PropsTypes.func.isRequired,
  handleSubmit: PropsTypes.func.isRequired,
  novaTarefa: PropsTypes.string.isRequired,
};
