'use client';


import { Colors } from "@/theme/colors"
import styles from './navbar.module.css/.'
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {


    const { status } = useSession();


    return (
        <>

            <nav className="navbar navbar-expand-lg mt-3">
                <div className="container ps-5 pe-5 d-flex justify-content-between align-items-center">
                    <a className="navbar-brand d-flex align-items-center" style={{ fontSize: 16 }} href="#">
                        <svg className={styles.clr} width="24" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
                        </svg>
                        <span className={`d-none d-md-block ${styles.logo}`}>Feedback</span>
                        <span className={`d-none d-md-block ${styles.logo}`} style={{ color: Colors.red }}>Fusion</span>
                    </a>
                    <ul className="navbar-nav d-flex flex-row">
                        <li className="nav-item me-2 me-sm-3 me-lg-4">
                            <a className="nav-link active" style={{ fontSize: 15, fontWeight: 600, color: Colors.feedback }} aria-current="page" href="#">Features</a>
                        </li>
                        <li className="nav-item me-2 me-sm-3 me-lg-4">
                            <a className="nav-link" style={{ fontSize: 15, fontWeight: 600, color: Colors.feedback }} href="#">Pricing</a>
                        </li>
                        <li className="nav-item me-2 me-sm-3 me-lg-4">
                            {/* <a className="nav-link" style={{ fontSize: 15, fontWeight: 600, color: Colors.feedback }} href="#">Sign in</a> */}

                            {status === 'authenticated' ? (
                                <button  className="nav-link"  style={{ fontSize: 15, fontWeight: 600, color: Colors.feedback }} onClick={() => signOut()}>Sign Out</button>
                            ) : (
                                <button className="nav-link"  style={{ fontSize: 15, fontWeight: 600, color: Colors.feedback }}onClick={() => signIn('google')}>Sign In</button>
                            )}

                        </li>
                    </ul>
                </div>
            </nav>


        </>

    )
}