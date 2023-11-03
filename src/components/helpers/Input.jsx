//render each input of the form
export default function InputWithName ({
  state, setState, title, 
  name, inputType, intervalOne
}) {

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'vacName') {
      setState({
        ...state,
        [name]: value
      });
    } else if (name === 'intervalOne') {
      setState({
        ...state,
        [name]: [...intervalOne, value]
      });
    }
  }

  return (
    <div style={{ padding: 16 }}>
      <div style={{padding: 8, fontSize: 18, marginLeft: 10, fontWeight: 'bold'}}>
        {title ? title : ""}
      </div>
      <input
        style={{padding: 8, fontSize: 16, marginLeft: 11}}
        type={inputType}
        name={name}
        onChange={handleChange}
        placeholder="Enter a vaccine name"
      />
    </div>
  );
};

