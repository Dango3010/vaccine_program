//render each input of the form
export default function InputWithName ({state, setName, title, name}) {

  const handleChange = (event) => {
    const { name, value } = event.target;
    setName({
      ...state,
      [name]: value
    });
  }

  return (
    <div style={{ padding: 16 }}>
      <div style={{padding: 8, fontSize: 18, marginLeft: 10, fontWeight: 'bold'}}>
        {title ? title : ""}
      </div>
      <input
        style={{padding: 8, fontSize: 16, marginLeft: 11}}
        type='text'
        name={name}
        onChange={handleChange}
        placeholder="Enter a vaccine name"
      />
    </div>
  );
};

