import ResetPass from '../resset-password/components/resetPass';
import ForgotPass from '../resset-password/components/forgotPass';
import { useLogicReset, useLogicForgot } from './useLogic';

export function Reset() {
  const { messageError, setMessageError, handleSubmit, loading } = useLogicReset();

  return <ResetPass submit={handleSubmit} loading={loading} messageError={messageError} setMessageError={setMessageError} />;
}

export function Forgot() {
  const { messageError, setMessageError, handleSubmit, loading } = useLogicForgot();

  return <ForgotPass submit={handleSubmit} loading={loading} messageError={messageError} setMessageError={setMessageError} />;
}
