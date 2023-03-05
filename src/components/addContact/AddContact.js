import { Component } from 'react';
import PropTypes from 'prop-types';

class AddContacts extends Component {
  state = {
    name: '',
    number: '',
  };

  changeInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitForm = e => {
    e.preventDefault();

    if (this.state.name.trim() === '') {
      return;
    } else if (
      this.props.contacts.some(item => item.name === this.state.name.trim())
    ) {
      alert(`${this.state.name.trim()} is already in contacts`);
      return;
    } else {
      this.props.addItem(this.state.name, this.state.number);
      this.resetForm();
    }
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitForm}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.changeInput}
            />
          </label>

          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={this.changeInput}
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}

AddContacts.propTypes = {
  addItem: PropTypes.func,
  contacts: PropTypes.arrayOf(PropTypes.object),
};

export default AddContacts;
