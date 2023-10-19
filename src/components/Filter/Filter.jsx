import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filtersSlice';
import { selectFilter } from 'redux/selectors';

const Filter = () => {
  const filterContact = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleFilterChange = e => dispatch(changeFilter(e.currentTarget.value));

  return (
    <div>
      <label htmlFor="findContact" className="form-label">
        Find contacts by name
      </label>
      <input
        className="form-input filterInput"
        name="title"
        type="text"
        onChange={handleFilterChange}
        value={filterContact}
        id="findContact"
        placeholder="Jacob Mercer"
      />
    </div>
  );
};

export default Filter;
