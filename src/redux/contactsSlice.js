import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [
    { id: 'id-1', name: 'Frodo', number: '459-12-56' },
    { id: 'id-2', name: 'Legolas', number: '443-89-12' },
    { id: 'id-3', name: 'Gimli', number: '645-17-79' },
    { id: 'id-4', name: 'Aragorn', number: '227-91-26' },
  ],
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    removeContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;

export default contactsSlice.reducer;
