import * as Yup from 'yup';
import { translate } from 'common/utilities/helper';

export const validationSchema = Yup.object().shape({
    email: Yup.string()
        .required(translate('必須項目に入力してください。'))
        .matches(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            translate('登録メールアドレスの形式が正しくありません。 ご確認ください。')
        )
        .max(50, translate('Emailは50文字以内で入力してください。')),
    loginId: Yup.string()
        .required(translate('必須項目に入力してください。'))
        .max(50, translate('IDは50文字以内で入力してください。')),
    familyNameFirst: Yup.string()
        .required(translate('必須項目に入力してください。'))
        .max(10, translate('氏名は10文字以内で入力してください。')),
    familyNameLast: Yup.string()
        .required(translate('必須項目に入力してください。'))
        .max(10, translate('氏名は10文字以内で入力してください。')),
    furiganaNameFirst: Yup.string()
        .required(translate('必須項目に入力してください。'))
        .matches(/^[(ぁ-んァ-ン)|ー]+$/, translate("全角ひらがな又はカタカナ文字で入力してください。"))
        .max(10, translate('氏名は10文字以内で入力してください。')),
    furiganaNameLast: Yup.string()
        .required(translate('必須項目に入力してください。'))
        .matches(/^[(ぁ-んァ-ン)|ー]+$/, translate("全角ひらがな又はカタカナ文字で入力してください。"))
        .max(10, translate('氏名は10文字以内で入力してください。')),
});
