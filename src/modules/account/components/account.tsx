import { Input, Form, Typography, Button } from 'antd';
import React from 'react';
import { useFormHandler } from 'common/hooks';
import FormItem from 'common/components/form/item';
import { validationSchema } from '../validate';
import { useForm, SubmitHandler } from 'react-hook-form';

const { Paragraph } = Typography;

export type FormValue = {
  loginId: string;
  email: string;
  familyNameFirst: string;
  familyNameLast: string;
  furiganaNameFirst: string;
  furiganaNameLast: string;
};

export interface Props {
  handleSubmitCreate: (data: FormValue) => void;
  loading: boolean;
  messageError: string;
  setMessageError: (data: string) => any;
}

export default function Account({ handleSubmitCreate, loading, messageError, setMessageError }: Props) {
  const form = useFormHandler<FormValue>({
    initialValues: {
      loginId: '',
      email: '',
      familyNameFirst: '',
      familyNameLast: '',
      furiganaNameFirst: '',
      furiganaNameLast: '',
    },
    validationSchema,
    onSubmit: (data) => console.log(data),
  });

  return (
    <div>
      <Form onFinish={form.handleSubmit}>
        <div className="bg-[#f0f0f0] h-[120px] flex justify-start items-center">
          <div className="text-[#5F5E5E] font-[700] pl-[25px] text-[24px]">アカウント登録・編集</div>
        </div>
        <div className="bg-[#ffffff] pl-[25px] h-screen">
          <div className="flex gap-[30px] pt-[40px]">
            <div className="flex flex-col">
              <label className="text-[16px] font-[700] flex">
                ログインID <p className="text-[#FC8686] font-[400]">（必須）</p>
              </label>
              <FormItem errorMsg={form.errors.loginId}>
                <Input
                  type="text"
                  {...form.register('loginId')}
                  className="w-[240px] h-[44px] border-none bg-[#F0F0F0] outline-none rounded-[5px] "
                  title="text"
                />
              </FormItem>
            </div>
            <div className="flex flex-col">
              <label className="text-[16px] font-[700] flex">
                メールアドレス <p className="text-[#FC8686] font-[400]">（必須）</p>
              </label>
              <FormItem errorMsg={form.errors.email}>
                <Input
                  type="text"
                  maxLength={50}
                  {...form.register('email')}
                  className="w-[240px] h-[44px] border-none bg-[#F0F0F0] outline-none rounded-[5px] placeholder-gray-500 placeholder-opacity-50"
                  placeholder="abcxyz@abcxyz.co.jp"
                  title="text"
                />
              </FormItem>
            </div>
          </div>

          <div className="flex gap-[30px] pt-[18px]">
            <div className="flex flex-col">
              <label className="text-[16px] font-[700] flex">
                氏名 <p className="text-[#FC8686] font-[400]">（必須）</p>
              </label>
              <FormItem errorMsg={form.errors.familyNameFirst}>
                <Input
                  type="text"
                  {...form.register('familyNameFirst')}
                  className="w-[240px] h-[44px] border-none bg-[#F0F0F0] outline-none rounded-[5px] placeholder-gray-500 placeholder-opacity-50"
                  placeholder="田中"
                  title="text"
                />
              </FormItem>
            </div>
            <div className="flex flex-col pt-[25px]">
              <FormItem errorMsg={form.errors.familyNameLast}>
                <Input
                  type="text"
                  {...form.register('familyNameLast')}
                  className="w-[240px] h-[44px] border-none bg-[#F0F0F0] outline-none rounded-[5px] placeholder-gray-500 placeholder-opacity-50"
                  placeholder="育子"
                  title="text"
                />
              </FormItem>
            </div>
          </div>

          <div className="flex gap-[30px] pt-[18px]">
            <div className="flex flex-col">
              <label className="text-[16px] font-[700] flex">
                氏名（ふりがな）<p className="text-[#FC8686] font-[400]">（必須）</p>
              </label>
              <FormItem errorMsg={form.errors.furiganaNameFirst}>
                <Input
                  type="text"
                  {...form.register('furiganaNameFirst')}
                  className="w-[240px] h-[44px] border-none bg-[#F0F0F0] outline-none rounded-[5px] placeholder-gray-500 placeholder-opacity-50"
                  placeholder="タナカ"
                  title="text"
                />
              </FormItem>
            </div>
            <div className="flex flex-col pt-[25px]">
              <FormItem errorMsg={form.errors.furiganaNameLast}>
                <Input
                  type="text"
                  {...form.register('furiganaNameLast')}
                  className="w-[240px] h-[44px] border-none bg-[#F0F0F0] outline-none rounded-[5px] placeholder-gray-500 placeholder-opacity-50"
                  placeholder="いくこ"
                  title="text"
                />
              </FormItem>
            </div>
          </div>
        </div>
        <Button htmlType="submit">Submit</Button>
      </Form>
    </div>
  );
}
