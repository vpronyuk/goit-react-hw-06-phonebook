import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleChange = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <div className={css.filter}>
      <label className={css.label}>
        Filter by name:
        <input
          className={css.input}
          type="text"
          value={filter}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default Filter;
