import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
  let navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const localData = [
    {
      "user_name": "Shelly Ganguli",
      "user_id": "88da1135-9d3b-4f02-b5ab-84a2735ce713"
    },
    {
      "user_name": "James Fredrick",
      "user_id": "2d5a8e8b-7234-4410-9f91-d1e8ad94a98a"
    },
    {
      "user_name": "Malabi Sengupta",
      "user_id": "2fe0e602-50cc-49c4-bf5c-fe8cf8784520"
    },
    {
      "user_name": "irene Dhakde",
      "user_id": "71462e33-c4a1-4e94-92f5-07e50b85c3ad"
    },
    {
      "user_name": "Ajeeta Bakshi",
      "user_id": "c9bbb3c8-08ad-4672-8181-63c2510dad0d"
    },
    {
      "user_name": "Saumya Mishra",
      "user_id": "8521fa08-5f4c-4bad-8cec-3e5b0f83ff10"
    },
    {
      "user_name": "Manjit Sachdev",
      "user_id": "f3129c4a-a0f4-41be-a18a-2c64c7faa6fd"
    },
    {
      "user_name": "chaitanya chopra",
      "user_id": "ff3e8919-3888-4daf-a68e-1b91e07c7e13"
    },
    {
      "user_name": "Chirag  Shetty",
      "user_id": "e291d731-872f-44f7-892f-29657c55b3bd"
    },
    {
      "user_name": "Frederic Brown",
      "user_id": "a8ba969c-a137-4d04-ac05-74de8d04dbcb"
    },
    {
      "user_name": "Vikram Iyer",
      "user_id": "57f676c8-9a0e-4159-945b-c382a541ec08"
    },
    {
      "user_name": "Guneet Guneet",
      "user_id": "cd4c8559-a783-4948-9bd9-7b8c301e296e"
    },
    {
      "user_name": "Ekta  Dutt",
      "user_id": "d66f6751-06d5-40b0-927f-d7ae246276c6"
    },
    {
      "user_name": "rashmi kaleka",
      "user_id": "fccf94da-12cb-41e0-8e04-1971c10424e8"
    },
    {
      "user_name": "Ryo Gotru",
      "user_id": "bc965c3c-be6e-43ec-a69e-9f6ffc3142b8"
    },
    {
      "user_name": "Birgit Gairola",
      "user_id": "a231aa9a-b460-4929-ab73-a1e7fa8cbc0d"
    },
    {
      "user_name": "Marisa de Almeida",
      "user_id": "e2aad385-fa7c-4244-944e-5c644907f369"
    },
    {
      "user_name": "Maria Pilar Alsina Arizaga",
      "user_id": "cf66412f-e343-4b0c-9e15-7b6fe9e1a889"
    },
    {
      "user_name": "David Allen",
      "user_id": "079f7674-6d06-47c1-82c3-7dbe6ecee328"
    },
    {
      "user_name": "ujwala ujwala",
      "user_id": "9c835c66-6a01-4575-b42f-e542f0d425d3"
    },
    {
      "user_name": "Angela Arana",
      "user_id": "423a89d5-cf16-43c6-82cc-0b1a9c05d174"
    },
    {
      "user_name": "nageena tandon",
      "user_id": "0c211ad7-7feb-4c23-8209-e95c688eeeaf"
    },
    {
      "user_name": "Jeanne Marie  Verghese",
      "user_id": "e72e2600-5661-448a-ba53-8531a53a7c5c"
    },
    {
      "user_name": "rajesh Srivastava",
      "user_id": "8da7065c-7580-465b-8e0f-8fd98882e6c7"
    },
    {
      "user_name": "Ermelina Coelho",
      "user_id": "b4e5614d-6845-43b8-8e63-51da6748b95d"
    },
    {
      "user_name": "Radhika Dhumal",
      "user_id": "22941c32-a9c6-4590-9469-0856bbf78fb7"
    },
    {
      "user_name": "Rajeeve Mehra",
      "user_id": "460933c4-732e-44ca-9149-8d48015b6b4a"
    },
    {
      "user_name": "Sandeep Khapra",
      "user_id": "f78dac57-ed02-4b5f-b1f2-c8a829115bef"
    },
    {
      "user_name": "Una Edward",
      "user_id": "b81066e1-2c91-49dc-97db-9432e823e8c4"
    },
    {
      "user_name": "Kanya Thana",
      "user_id": "2c892ae9-0baf-49ba-ab92-f0e95813f338"
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !password) {
      setError('Please fill in both fields.');
      return;
    }
    let userData = localData.find((user)=> user.user_name == username);
    if(userData){
      if(password == "qwerty123"){
        setError('');
        localStorage.setItem("uuid", userData.user_id)
        localStorage.setItem("userName", userData.user_name)
        navigate(`/`);
      }else{
        setError('Invalid Password!')
      }
    }else{
      setError('Invalid User!')
    }
  };
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};


export default Login