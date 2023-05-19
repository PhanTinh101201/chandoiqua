import { Reset } from 'modules/resset-password';

// export default ResetPass;
// import Login from 'modules/login';
import { withPreAuthentication } from 'common/hocs';

const ResetPassUnAuthenticated = withPreAuthentication(Reset);
ResetPassUnAuthenticated.layout = 'public';

export default ResetPassUnAuthenticated;
