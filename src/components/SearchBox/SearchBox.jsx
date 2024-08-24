import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css'
import { changeFilter, selectName } from '../../redux/filtersSlice';
const SearchBox = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectName);

    const handleFilterChange = (event) => {
    dispatch(changeFilter(event.target.value));
    };

    return (
        <div className={css.box}>
            <label htmlFor='find' className={css.label}>Find contacts by name</label>
            <input type='text' name='find' id='find' value={filter} onChange={handleFilterChange} className={css.field} />
        </div>
    )
}

export default SearchBox