import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { Icons } from "./Icons"
import NavItems from "./NavItems"

const Navbar = () => {
    return (
        <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
            <header className="relative bg-white">
                <MaxWidthWrapper>
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center">
                            {/*TODO: Mobile nav & logo*/}
                            <div className="ml-4 flex lg:ml-0">
                                <Link href="/">
                                    <Icons.logo className="h-10 w-10" />
                                </Link>
                            </div>
                            <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                                <NavItems />
                            </div>

                            {/* <div className="flex-shrink-0">
                                <a href="/">
                                    <img
                                        className="block h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg"
                                        alt="Workflow"
                                    />
                                </a>
                            </div>
                            <div className="hidden md:block md:ml-10 md:space-x-10">
                                <a
                                    href="/products"
                                    className="font-medium text-gray-500 hover:text-gray-900"
                                >
                                    Products
                                </a>

                                <a
                                    href="/about"
                                    className="font-medium text-gray-500 hover:text-gray-900"
                                >
                                    About
                                </a>

                                <a
                                    href="/contact"
                                    className="font-medium text-gray-500 hover:text-gray-900"
                                >
                                    Contact
                                </a>
                            </div> */}
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
    )
}

export default Navbar
