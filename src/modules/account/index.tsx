import AccountComponents from './components/account';
import useLogic from './useLogic';

function Account() {
  const { messageError, setMessageError, handleSubmit, loading } = useLogic();

  return <AccountComponents handleSubmit={handleSubmit} loading={loading} messageError={messageError} setMessageError={setMessageError} />;
}

export default Account;
