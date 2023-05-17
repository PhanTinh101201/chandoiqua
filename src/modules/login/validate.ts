import * as Yup from 'yup';
import { translate } from 'common/utilities/helper';

export const validationSchema = Yup.object().shape({
  email: Yup.string().email(translate('email_invalid')).required(translate('email_require')),
  password: Yup.string().required(translate('password_require')),
});
