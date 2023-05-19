import { Forgot } from 'modules/resset-password';

import { withPreAuthentication } from 'common/hocs';

const ForgotPassUnAuthenticated = withPreAuthentication(Forgot);
ForgotPassUnAuthenticated.layout = 'public';

export default ForgotPassUnAuthenticated;
