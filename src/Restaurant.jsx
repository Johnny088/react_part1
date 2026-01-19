import { useState } from 'react';

function Restaurant() {
  const [showForm, setForm] = useState(false);
  const [name, setName] = useState('Providence');
  const [address, setAddress] = useState(
    '5955 Melrose Ave, Los Angeles, CA 90038, USA',
  );
  const [rating, setRating] = useState('3 stars - 4.7/5');
  const [cuisine, setCusine] = useState('Fine Dining/Seafood');
  const [photo, setphoto] = useState(
    'https://media-cdn.tripadvisor.com/media/photo-s/0e/61/62/c7/providence-on-melrose.jpg',
  );
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e);
    setForm(false);
  };
  const ChangeInfo = () => {
    setForm(prev => !prev);
  };
  return (
    <>
      <div>
        <h1>Name: {name}</h1>
        <p>Adress: {address}</p>
        <p>Rating: {rating}</p>
        <p>Cuisine: {cuisine}</p>
        <p>location</p>
        <img src={photo} alt="./restaurant" />
      </div>
      <button onClick={ChangeInfo}>Change information</button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="text"
            name="address"
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
          <input
            type="text"
            name="rating"
            value={rating}
            onChange={e => setRating(e.target.value)}
          />
          <input
            type="text"
            name="cuisine"
            value={cuisine}
            onChange={e => setCusine(e.target.value)}
          />
          <input
            type="text"
            name="photo"
            value={photo}
            onChange={e => setphoto(e.target.value)}
          />
          <button>edit</button>
        </form>
      )}
    </>
  );
}

export default Restaurant;
