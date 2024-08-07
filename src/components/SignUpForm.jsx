import { useState } from "react"

const SignUpForm = ( { setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup',{
        method: 'POST',
        headers: {
          'Content-type': "application/json"
        },
        body: JSON.stringify({
          Username: username,
          Password: password
        })
      })
      const result = await response.json();
      setToken(result.token)
    } catch (error) {
      setError(error.message)
    }
  }


  return (
    <>
      <h2>Sign Up!</h2>
      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
      <label> Username <input value={username} onChange={(event) => setUsername(event.target.value)} required minLength="8" /> </label>
      <label> Password: <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} /> </label>

      <button>Submit</button>
      </form>
    </>
  )
  
}

export default SignUpForm