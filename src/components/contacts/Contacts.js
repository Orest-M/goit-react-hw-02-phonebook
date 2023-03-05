import PropTypes from 'prop-types';

import ContactsItem from 'components/contactsItem/ContactsItem';

const Contacts = ({ contacts, setFilteredArr, onDelete }) => {
  const data = setFilteredArr() ? setFilteredArr() : contacts;

  return (
    <div>
      <ul onClick={onDelete}>
        {data.map(({ name, number, id }) => (
          <ContactsItem key={id} name={name} number={number} id={id} />
        ))}
      </ul>
    </div>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  setFilteredArr: PropTypes.func,
  onDelete: PropTypes.func,
};

export default Contacts;
