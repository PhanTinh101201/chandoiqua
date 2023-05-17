import LoginComponent from './components/login';
import useLogic from './useLogic';

function Login() {
  const { messageError, setMessageError, handleSubmit, loading } = useLogic();

  return <LoginComponent submit={handleSubmit} loading={loading} messageError={messageError} setMessageError={setMessageError} />;
}

export default Login;
