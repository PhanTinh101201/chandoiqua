import successComp from 'modules/resset-password/components/success';
import { withPreAuthentication } from 'common/hocs';

const successUnAuthenticated = withPreAuthentication(successComp);
successUnAuthenticated.layout = 'public';

export default successUnAuthenticated;
