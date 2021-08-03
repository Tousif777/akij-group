import Link from 'next/link';
import Image from 'next/image';

const Navigation = () => {
    
    return (
        <nav className="w-full bg-white shadow-lg md:py-3">
                <div className="container mx-auto px-2 pt-3 flex justify-center md:justify-between md:pt-0 items-center">
                    
                    <div className="h-6 md:h-10 flex items-center">
                        <Link className="w-28 md:w-48" href="/" passHref>
                            <Image width={150} height={35} src='/logo.png' alt="Logo Akij"  />
                        </Link> 
                    </div>
                    <div className="text-sm font-medium tracking-wide flex items-center">
                        
                        <div className="hidden md:block text-lg cursor-pointer">
                            <div className="flex justify-center items-center mx-2 p-1 border border-gray-400 rounded-full">
                                <input className="w-48 pl-2 focus:outline-none text-sm text-gray-500     rounded-full" placeholder="Search..." type="text" name="search" id="search" />
                                <i className="text-gray-300 font-bolder px-2"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg></i>
                            </div>
                        </div>
                        <div className="hidden md:block text-akij-blue">
                            <a className="px-3 hover:text-akij-red" href="#">HOME</a>
                            <a className="px-3 hover:text-akij-red" href="#">ABOUT</a>
                            <a className="px-3 hover:text-akij-red" href="#">DEALER</a>
                            <a className="px-3 hover:text-akij-red" href="#">CAREER</a>
                            <a className="px-3 hover:text-akij-red" href="#">CONTACT</a>
                            <a className="px-3 hover:text-akij-red" href="#">AKIJ GROUP</a>
                        </div>
                        
                        
                    </div>
                </div>
                <div className="container mx-auto py-2 flex justify-between items-center px-2 md:hidden text-xs font-medium text-akij-blue">
                    <div id="menu-button" className="md:hidden text-akij-red text-2xl cursor-pointer">
                        <i className="">    
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
                        </i>
                    </div>
                    <a className=" hover:text-akij-red" href="#">HOME</a>
                    <a className=" hover:text-akij-red" href="#">ABOUT</a>
                    <a className=" hover:text-akij-red" href="#">AKIJ GROUP</a>
                    <a className=" hover:text-akij-red" href="#">CONTACT</a>
                    <div className="md:hidden text-akij-red text-2xl cursor-pointer">
                        <i className="text-gray-300 font-bold"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg></i>
                        <input className="hidden" type="text" name="search" id="search" />
                    </div>  
                </div>
            </nav>
    )
};
export default Navigation;