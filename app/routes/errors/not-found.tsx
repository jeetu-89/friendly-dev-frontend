import { Link } from "react-router";

const NotFoundPage = () => {
    return ( 
    <div className="min-h-[70vh] flex flex-col justify-center items-center">
        <h1 className="text-6xl font-extrabold text-blue-400 mb-2">404</h1>
        <h1 className="font-bold text-2xl mb-2">Page Not Found</h1>
        <p className="text-gray-400 mb-4">Sorry, the page you are looking for does not exist.</p>
        <Link
            to="/"    
        >
            <button className="bg-blue-500 py-2 px-4 rounded font-medium cursor-pointer hover:bg-blue-600 transition transform hover:scale-105">
                Go Home
            </button>
        </Link>
    </div> );
}
 
export default NotFoundPage;