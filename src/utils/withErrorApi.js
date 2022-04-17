import { useState } from 'react';
import Errormesage from '../components/ErrorMesage/ErrorMesage';


export const witherrorapi = (View) => {
    return props => {
        const [errorApi, setErrorApi] = useState(false);
        return (
            <>
                {
                    errorApi
                        ? <Errormesage />
                        : <View setErrorApi={setErrorApi}  {...props} />
                }
            </>
        )
    }
}


