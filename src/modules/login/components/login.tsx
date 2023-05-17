import { Input, Form, Button, Checkbox, Typography } from 'antd';
import Link from 'next/link';
import { useFormHandler } from 'common/hooks';
import { validationSchema } from '../validate';
import FormItem from 'common/components/form/item';
import { useEffect } from 'react';
import { isEmpty } from 'lodash';

export type FormValue = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export interface Props {
  submit: (data: FormValue) => any;
  loading: boolean;
  messageError: string;
  setMessageError: (data: string) => any;
}

function Login({ submit, loading, messageError, setMessageError }: Props) {
  const form = useFormHandler<FormValue>({
    initialValues: { email: '', password: '', rememberMe: false },
    validationSchema,
    onSubmit: submit,
  });

  useEffect(() => {
    if (messageError) {
      setMessageError('');
    }
  }, [form.values]);

  return (
    <div className="w-full flex-1 bg-[#F2F2F2] flex">
      <Form onFinish={form.handleSubmit} className="mx-auto self-center bg-white py-[111px] px-[160px] flex flex-col rounded-md" layout="vertical">
        <FormItem className="mb-9" label={<Typography className="text-xs">メールアドレス</Typography>} errorMsg={form.errors.email}>
          <Input {...form.register('email')} className="w-[400px]" placeholder="メールアドレスを入力してください" />
        </FormItem>
        <FormItem className="mb-1 " label={<Typography className="text-lg">パスワード</Typography>} errorMsg={form.errors.password}>
          <Input.Password
            {...form.register('password')}
            className="w-[400px]"
            placeholder="パスワードを入力してください"
            iconRender={(visible) =>
              visible ? <img alt="eye" src="/assets/images/eye-light.png" /> : <img alt="eye" src="/assets/images/eye-dark.png" />
            }
          />
        </FormItem>
        <Link href="/admin/reset-password">
          <a className="text-[#172B4D] self-end underline text-sm">パスワードをお忘れの方</a>
        </Link>
        <div className="mt-12 flex flex-col">
          {messageError && <p className="pb-[10px] error-msg">{messageError}</p>}
          <Button loading={loading} htmlType="submit" disabled={!form.dirty || !isEmpty(form.errors) || !!messageError} className="btn-primary">
            ログイン
          </Button>
        </div>
        <Checkbox {...form.register('rememberMe', { nameOfValueProps: 'checked' })} className="mx-auto mt-3 text-sm">
          <Typography>ログイン状態を保持する</Typography>
        </Checkbox>
      </Form>
    </div>
  );
}

export default Login;
