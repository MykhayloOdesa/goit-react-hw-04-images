import { useState } from 'react';
import PropTypes from 'prop-types';
import { Header, Form, Button, Label, Input } from './Searchbar.styled';

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const onChange = event => {
    setQuery(event.currentTarget.value);
  };

  const onSubmitForm = event => {
    event.preventDefault();

    onSubmit(query);

    if (!query.trim()) {
      return alert('Please add correct data!');
    }

    onSubmit(query);
  };

  return (
    <Header>
      <Form onSubmit={onSubmitForm}>
        <Button type="submit" style={{ marginRight: '10px' }}>
          <Label>Search</Label>
        </Button>

        <Input
          type="text"
          autoComplete="off"
          autoFocus
          value={query}
          placeholder="Search images and photos"
          onChange={onChange}
        />
      </Form>
    </Header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
