export type LanguageKey = 'en' | 'jp';

type MultiLanguage = {
  [key: string]: {
    [key in LanguageKey]: string;
  };
};

const multiLanguage: MultiLanguage = {
  email_pwd_incorrect: {
    en: 'email or password is incorrect',
    jp: 'メールアドレスもしくはパスワードが正しくありません。',
  },
  home_page: {
    en: 'Home',
    jp: 'ホーム',
  },
  accounts_page: {
    en: 'Account',
    jp: '企業アカウント管理',
  },
  payment_page: {
    en: 'Payments',
    jp: '決済情報管理',
  },
  users_page: {
    en: 'Users',
    jp: 'ユーザー管理',
  },
  setting_page: {
    en: 'Setting',
    jp: 'アカウント設定',
  },
  email_invalid: {
    en: 'Invalid email',
    jp: '正しいメールアドレスを入力してください',
  },
  email_require: {
    en: 'Require',
    jp: 'メールアドレスを入力してください',
  },
  password_require: {
    en: 'Require',
    jp: 'パスワードを入力してください',
  },
  login: {
    en: 'Login',
    jp: 'ログイン',
  },
};

export default multiLanguage;
