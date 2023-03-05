import PropTypes from 'prop-types';

const ContactsItem = ({ name, number, id }) => {
  return (
    <li>
      {name}: {number}
      <button type="button" data-id={id}>
        delete
      </button>
    </li>
  );
};

ContactsItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};

export default ContactsItem;
