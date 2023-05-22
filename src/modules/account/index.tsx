import AccountComponents from './components/account';
import useLogic from './useLogic';

function Account() {
  const { messageError, setMessageError, handleSubmitCreate, loading } = useLogic();

  return (
    <AccountComponents handleSubmitCreate={handleSubmitCreate} loading={loading} messageError={messageError} setMessageError={setMessageError} />
  );
}

export default Account;
