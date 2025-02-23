import ContactRow from "./ ContactRow.jsx";

export default function ContactList({ setSelectedContactId }) {
  const contacts = [
    { id: 1, name: "John Doe", email: "john@example.com", phone: "555-1234" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "555-5678" },
    // Add more contacts as needed
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <ContactRow
            key={contact.id}
            contact={contact}
            setSelectedContactId={setSelectedContactId}
          />
        ))}
      </tbody>
    </table>
  );
}







