import { reset, forgot } from './services';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useApiCaller } from 'common/hooks';
import { ResetResDto, ForgotResDto } from './dto';
import { FormValue } from './components/resetPass';
import { FormValueForgot } from './components/forgotPass';
import Router from 'next/router';

export function useLogicReset() {
  const [messageError, setMessageError] = useState('');
  // const dispatch = useDispatch();

  // const { request, loading } = useApiCaller<ResetResDto>({ apiCaller: reset });
  const { loading } = useApiCaller<ResetResDto>({ apiCaller: reset });

  const handleSubmit = async (data: FormValue) => {
    // eslint-disable-next-line no-console
    console.log('🚀 ~ file: useLogic.ts:17 ~ handleSubmit ~ data:', data);
    // const dataBody = new ResetReqDto();
    // dataBody.email = data.email;
    // dataBody.pwd = data.password;

    // const result: any = await request(dataBody);

    // if (result.data?.token) {
    //   dispatch(
    //     setAuthenticated({
    //       token: 'result.data.token',
    //       role: 'result.data.role' as any,
    //       key: 'result.data.key',
    //       fullName: 'result.data.fullName',
    //       email: 'result.data.email',
    //     })
    //   );

    //   return;
    // }
  };

  return { handleSubmit, messageError, setMessageError, loading };
}

export function useLogicForgot() {
  const [messageError, setMessageError] = useState('');
  // const dispatch = useDispatch();

  // const { request, loading } = useApiCaller<ResetResDto>({ apiCaller: reset });
  const { loading } = useApiCaller<ForgotResDto>({ apiCaller: forgot });

  const handleSubmit = async (data: FormValueForgot) => {
    // eslint-disable-next-line no-console
    console.log('🚀 ~ file: useLogic.ts:17 ~ handleSubmit ~ data:', data);
    Router.replace('/success');
    // const dataBody = new ResetReqDto();
    // dataBody.email = data.email;
    // dataBody.pwd = data.password;

    // const result: any = await request(dataBody);

    // if (result.data?.token) {
    //   dispatch(
    //     setAuthenticated({
    //       token: 'result.data.token',
    //       role: 'result.data.role' as any,
    //       key: 'result.data.key',
    //       fullName: 'result.data.fullName',
    //       email: 'result.data.email',
    //     })
    //   );

    //   return;
    // }
  };

  return { handleSubmit, messageError, setMessageError, loading };
}
