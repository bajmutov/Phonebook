import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filtersSlice';
import { selectFilter } from 'redux/selectors';
import { Flex, Input } from '@chakra-ui/react';

const Filter = () => {
  const filterContact = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleFilterChange = e => dispatch(changeFilter(e.currentTarget.value));

  return (
    <Flex justifyContent={'center'}>
      <Input
        boxShadow="dark-lg"
        p="0 10px"
        width="466px"
        name="title"
        type="text"
        onChange={handleFilterChange}
        value={filterContact}
        placeholder="Find contact by name"
      />
    </Flex>
  );
};

export default Filter;
