import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="flex min-h-full justify-center my-16 px-3">
            <div className=" bg-[#1F2B3B] w-full md:w-1/2 lg:w-1/4 py-3 px-3  rounded-md">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="flex items-center text-white cursor-pointer">
                        <IoIosArrowBack />
                        <span className="text-sm">Back</span>
                    </div>
                    <h2 className="text-center text-medium font-medium tracking-tight text-white">
                        Sign in to your account
                    </h2>
                </div>

                <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="#" method="POST" className="space-y-1">
                        <div>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Email"
                                required
                                className="mt-3 block w-full bg-transparent rounded border border-gray-400 px-2 py-1.5  text-gray-400 sm:text-sm/6"
                            />
                        </div>

                        <div>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                placeholder="Password"
                                className="block w-full bg-transparent rounded border border-gray-400 px-2 py-1.5  text-gray-400 sm:text-sm/6"
                            />
                        </div>
                        <div className="mt-0">
                            <Link to="/" className="text-sm text-purple-400 hover:text-purple-500">
                                Forgot your password?
                            </Link>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded bg-[#E9C878] py-1.5 font-medium"
                            >
                                LOG IN
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login