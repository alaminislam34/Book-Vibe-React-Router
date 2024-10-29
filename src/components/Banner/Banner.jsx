
const Banner = () => {
    return (
        <>
            <div className="w-11/12 mx-auto bg-gray-300 my-10 rounded-lg">
                <div className='grid md:grid-cols-3 gap-6 p-12 my-12 justify-center items-center'>
                    <div className='md:col-span-2 mx-12'>
                        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">Books to freshen up your bookshelf</h1>
                        <button className="bg-green-500 py-2 px-4 rounded-lg hover:text-green-500 hover:bg-transparent border-2
                        border-green-500 mt-12">View the list</button>
                    </div>
                    <div className='bookImg'>
                        <img src="https://pngimg.com/d/book_PNG2111.png" alt="book" />
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default Banner;