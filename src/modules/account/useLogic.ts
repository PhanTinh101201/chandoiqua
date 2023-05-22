import { account } from './services';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAuthenticated } from 'store/actions';
import { translate } from 'common/utilities/helper';
import { useApiCaller } from 'common/hooks';
import { CreateAccount, LoginResDto } from './dto';
import { FormValue } from './components/account';

export default function useLogic() {
    const [messageError, setMessageError] = useState('');
    const dispatch = useDispatch();

    const { request, loading } = useApiCaller<LoginResDto>({ apiCaller: account });

    const handleSubmitCreate = async (data: FormValue) => {
        console.log('fffff')
        const dataBody = new CreateAccount();
        dataBody.loginId = data.loginId;
        dataBody.email = data.email;
        dataBody.familyNameFirst = data.familyNameFirst;
        dataBody.familyNameLast = data.familyNameLast;
        dataBody.furiganaNameFirst = data.furiganaNameFirst;
        dataBody.furiganaNameLast = data.furiganaNameLast;

        const result: any = await request(dataBody);
        console.log("APICAll", result)


        setMessageError(translate('email_pwd_incorrect'));
    };

    return { handleSubmitCreate, messageError, setMessageError, loading };
}