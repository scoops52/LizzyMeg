import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Navbar, Footer } from '../../components';
import LayoutStyles from './Layout.module.scss';

const layout = () => {
    return (
        <div className={LayoutStyles.app}>
            {/* <nav  className={LayoutStyles.nav}> */}
            <Navbar />
            {/* </nav> */}
            <section className={LayoutStyles.section}>
                <Outlet />
            </section>
            <footer className={LayoutStyles.footer}>
            <Footer />
            </footer>
        </div>
    )
}

export default layout