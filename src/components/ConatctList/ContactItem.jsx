import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';
import { Button } from '@chakra-ui/react';
import { Item } from './ContactList.styled';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const isDeleting = useSelector(selectIsLoading);

  return (
    <Item>
      <img
        src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
        alt="avatar"
        width={37}
      />
      {name}: {number}
      <Button
        type="button"
        disabled={isDeleting}
        bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
        h={7}
        onClick={() => dispatch(deleteContact(id))}
        ml={3}
      >
        Delete
      </Button>
    </Item>
  );
};

export default ContactItem;
