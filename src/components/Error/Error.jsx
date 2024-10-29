import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    return (
        <div>
            <div>
                {
                    error.statusText || error.message
                }
            </div>
        </div>
    );
};

export default Error;