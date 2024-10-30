import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    return (
        <div>
            <div className="flex justify-center items-center h-[100vh] text-5xl font-bold">
                {
                    error.statusText + '🚫' || error.message
                }
            </div>
        </div>
    );
};

export default Error;