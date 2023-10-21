import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const isDeleting = useSelector(selectIsLoading);

  return (
    <li className="contactItem">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
        alt="avatar"
        width={37}
      />
      {name}: {number}
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
