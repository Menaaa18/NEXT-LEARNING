import Link from "next/link";

export default function NavBarMain(){
    return (
        <div className="navbar"> 
        <h5>Logo</h5>
        <ul className="navGuys"> 
            <Link href="/home">
             <ol className='nav-item'>Home</ol>
            </Link>
            <Link href="/about">
            <ol className='nav-item'>About</ol>
            </Link>
            <Link href="/Make Payment">
            <ol className='nav-item'>Make Payment</ol>
            </Link>
            <Link href="/Account Settings">
            <ol className='nav-item'>Account Settings</ol>
            </Link>          
        </ul>
        </div> 
    );
}