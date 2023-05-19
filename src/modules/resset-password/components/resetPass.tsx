/* eslint-disable no-console */
import { Input, Form, Button, Typography } from 'antd';
import { useFormHandler } from 'common/hooks';
import { validationSchemaReset } from '../../resset-password/validate';
import FormItem from 'common/components/form/item';
import { useEffect } from 'react';
import { isEmpty } from 'lodash';

const { Paragraph } = Typography;

export type FormValue = {
  password: string;
  passwordConfirm: string;
};

export interface Props {
  submit: (data: FormValue) => any;
  loading: boolean;
  messageError: string;
  setMessageError: (data: string) => any;
}

function ResetPass({ submit, loading, messageError, setMessageError }: Props) {
  const form = useFormHandler<FormValue>({
    initialValues: { password: '', passwordConfirm: '' },
    validationSchema: validationSchemaReset,
    onSubmit: submit,
  });

  useEffect(() => {
    if (messageError) {
      setMessageError('');
    }
  }, [form.values]);

  return (
    <div className="w-full flex-1 bg-white flex form-sndl-css justify-center">
      <Form onFinish={form.handleSubmit} className="flex items-center justify-center" layout="vertical">
        <div className="w-[350px] -mt-[8%]">
          <div className="logo-admin text-center mb-[8px]">
            <img alt="logo" src="/assets/images/logo.png" />
          </div>
          <Typography className="text-[16px] font-sf_pro text-center text-[#303030] leading-[1.4] font-[600] mb-[12px]">
            新しいパスワード入力
          </Typography>
          <Paragraph className="mx-auto block max-w-[300px] text-[12px] font-sf_pro text-center text-[#838383] font-[300] leading-[1.5] mb-[10px]">
            登録したメールアドレスを下に入力して、パスワードのリセット手順を受け取ります。
          </Paragraph>
          <FormItem className="mb-[20px]" errorMsg={form.errors.password}>
            <Input.Password
              {...form.register('password')}
              className="cursor-pointer w-full h-50 rounded-[6px] border-2 bg-[#EBEBEB] border-bd-colors"
              placeholder="新しいパスワード"
              iconRender={(visible) =>
                visible ? <img alt="eye" src="/assets/images/eye_active.svg" /> : <img alt="eye" src="/assets/images/eye_unactive.svg" />
              }
            />
          </FormItem>
          <FormItem className="mb-[20px]" errorMsg={form.errors.passwordConfirm}>
            <Input.Password
              {...form.register('passwordConfirm')}
              className="cursor-pointer w-full h-50 rounded-[6px] border-2 bg-[#EBEBEB] border-bd-colors"
              placeholder="新しいパスワード(確認)"
              iconRender={(visible) =>
                visible ? <img alt="eye" src="/assets/images/eye_active.svg" /> : <img alt="eye" src="/assets/images/eye_unactive.svg" />
              }
            />
          </FormItem>

          <div className="flex flex-col">
            {messageError && <p className="pb-[10px] error-msg">{messageError}</p>}
            <Button
              loading={loading}
              htmlType="submit"
              disabled={!form.dirty || !isEmpty(form.errors) || !!messageError}
              className="bg-[#FF858B] font-[14px] font-[500] leading-[1.5] h-[50px] text-white rounded-[6px]"
            >
              送信する
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default ResetPass;
