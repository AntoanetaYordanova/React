import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
    const {user, login} = useContext(AuthContext);
    const navigate = useNavigate(); 

    const loginHandler = (e) => {
        e.preventDefault();
        const {email, password} = Object.fromEntries(new FormData(e.currentTarget));
        login({email});
        navigate('/');
    }

  return (
    <Form onSubmit={loginHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;