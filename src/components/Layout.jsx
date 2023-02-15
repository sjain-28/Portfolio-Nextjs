import Head from 'next/head';


import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({children}) => {
    return (
        <>
            <Head>
                <title>Portfolio</title>
            </Head>
            <div >

                <Navbar />

                <main>{children}</main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    );
}

export default Layout;