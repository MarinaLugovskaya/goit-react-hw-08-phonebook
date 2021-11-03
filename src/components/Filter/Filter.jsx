import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import changeFilter from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import css from '../Filter/Filter.module.css';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <>
      <Box
        className={css.filter}
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">Find contacts by name</InputLabel>
          <Input
            id="component-simple"
            type="text"
            name="filter"
            value={value}
            onChange={evt => dispatch(changeFilter(evt.target.value))}
          />
        </FormControl>
      </Box>
    </>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
