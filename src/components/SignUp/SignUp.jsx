
const SignUp = () => {
    return (
        <div>
            <form className="border-2 border-green-500 rounded-lg p-12 m-12 flex flex-col gap-6 justify-center items-center w-11/12 md:w-10/12 lg:w-6/12 mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center my-4">Sign Up</h2>
                <label className="w-full text-left">Your Name</label>
                <input className="outline-purple-500 focus:border-purple-500 border border-purple-500 py-2 px-4 rounded-lg w-full" type="text" placeholder="Name" />
                <label className="text-left w-full">Your email</label>
                <input className="outline-purple-500 focus:border-purple-500 border border-purple-500 py-2 px-4 rounded-lg w-full" type="email" placeholder='Email' required />
                <label className="text-left w-full">Your Password</label>
                <input className="outline-purple-500 focus:border-purple-500 border border-purple-500 py-2 px-4 rounded-lg w-full" type="password" placeholder='Password' required />
                <button className="py-2 px-4 rounded-lg border-purple-500 hover:bg-purple-700 bg-purple-500 w-full text-white" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SignUp;