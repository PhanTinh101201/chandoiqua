import { login } from './services';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAuthenticated } from 'store/actions';
import { translate } from 'common/utilities/helper';
import { useApiCaller } from 'common/hooks';
import { LoginReqDto, LoginResDto } from './dto';
import { FormValue } from './components/login';

export default function useLogic() {
  const [messageError, setMessageError] = useState('');
  const dispatch = useDispatch();

  const { request, loading } = useApiCaller<LoginResDto>({ apiCaller: login });

  const handleSubmit = async (data: FormValue) => {
    const dataBody = new LoginReqDto();
    dataBody.email = data.email;
    dataBody.pwd = data.password;

    const result: any = await request(dataBody);

    if (result.data?.token) {
      dispatch(
        setAuthenticated({
          token: 'result.data.token',
          role: 'result.data.role' as any,
          key: 'result.data.key',
          fullName: 'result.data.fullName',
          email: 'result.data.email',
        })
      );

      return;
    }
    setMessageError(translate('email_pwd_incorrect'));
  };

  return { handleSubmit, messageError, setMessageError, loading };
}
