import { useDispatch } from 'react-redux';
import { notification } from 'store/actions';
import { useState } from 'react';

type ApiCallerParam = {
  apiCaller: any;
  messageFail?: boolean | string;
  messageSuccess?: boolean | string;
  setData?: (data: any) => void;
};

export function useApiCaller<TRes>({ apiCaller, messageFail, messageSuccess, setData }: ApiCallerParam) {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const request = async (dataOrig?: any): Promise<TRes> => {
    setLoading(true);

    const responseData = await apiCaller(dataOrig);

    setLoading(false);

    if (messageSuccess === true) {
      messageSuccess = responseData?.data.message;
    }

    if (messageSuccess) {
      dispatch(
        notification({
          type: 'success',
          isOpen: true,
          message: messageSuccess as string,
        })
      );
    }

    responseData.statusCode = responseData.status;

    if (messageFail === true) {
      messageFail = responseData.data?.message;
    }
    if (messageFail) {
      dispatch(
        notification({
          isOpen: true,
          type: 'error',
          message: messageFail as string,
        })
      );
    }

    if (setData) {
      setData(responseData);
    }

    return responseData;
  };

  return {
    loading,
    request,
    setLoading,
  };
}
