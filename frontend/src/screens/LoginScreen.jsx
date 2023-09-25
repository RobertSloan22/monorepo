import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../features/auth/authActions'
import { useEffect } from 'react'
import Error from '../components/Error'
import Spinner from '../components/Spinner'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from'react-bootstrap/Card';
import Button from'react-bootstrap/Button';

const LoginScreen = () => {
  const { loading, userInfo, error } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const { register, handleSubmit } = useForm()

  const navigate = useNavigate()

  // redirect authenticated user to profile screen
  useEffect(() => {
    if (userInfo) {
      navigate('/user-profile')
    }
  }, [navigate, userInfo])

  const submitForm = (data) => {
    dispatch(userLogin(data))
  }

  return (

<>
<div className="login-page">
    <Container>
          {/* Stack the columns on mobile by making one full-width and the other half-width */}
          <Row>
            <Col xs={20} md={18}>
              <Card className="text-center">
          <Card.Header>Welcome Back To Lunar Banking</Card.Header>
          <Card.Body>
            <Card.Title>SECURE LOGIN</Card.Title>
            <Card.Text>
            THIS SITE USES GOOGLE AUTHENTICATION, JSON WEB TOKENS FOR AUTHENTICATION WHILE MOVING THROUGH THE SITE ALONG WITH PROTECTED AUTHORIZATION FOR ADMINS AND USERS.
              <form onSubmit={handleSubmit(submitForm)}>
          {error && <Error>{error}</Error>}
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              className='form-input'
              {...register('email')}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              className='form-input'
              {...register('password')}
              required
            />
          </div>
          <div className='form-group'>
            <button id="sign-in-button">Sign In with Google</button></div>

              <button type='submit' className='button' disabled={loading}>
              {loading ? <Spinner /> : 'Login'}
                </button>
              </form>
              </Card.Text>
              <Button id="sign-in-button"variant="primary">REGISTER FOR AN ACCOUNT </Button>
            </Card.Body>
            <Card.Footer className="text-muted"></Card.Footer>
            </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={20} md={18}>
          <Card>
            <Card.Body>
              </Card.Body>
            </Card>
          </Col>  
        
        </Row>
    </Container>
 </div>

    </>
  )
}

export default LoginScreen
