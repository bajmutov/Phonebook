import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';

const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const isDeleting = useSelector(selectIsLoading);

  return (
    <li className="contactItem">
      {name}: {phone}
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => dispatch(deleteContact(id))}
        disabled={isDeleting}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
