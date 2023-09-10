import { useRouteError } from 'react-router-dom';
const Error = () => {
    const err = useRouteError();
    return (<h1>
        Error : {err.statusText}
    </h1>)
}

export default Error;