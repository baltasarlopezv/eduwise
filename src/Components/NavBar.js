import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';
import { FiMenu } from "react-icons/fi";
import { CgCloseO } from "react-icons/cg";
import { useScrollPosition } from '../Hooks/scrollPosition';

const NavBar = () => {
    const [navBarOpen, setNavBarOpen] = useState(false);
    const [windowDimension, setWindowDimension] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const detectDimension = () => {
        setWindowDimension({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    useEffect(() => {
        window.addEventListener('resize', detectDimension)
        windowDimension.width > 800 && setNavBarOpen(false)
        return () => {
            window.removeEventListener('resize', detectDimension)
        }
    }, [windowDimension])

    const links = [
        { id: 1, link: "/", label: "Home" },
        { id: 2, link: "/login", label: "Login" },
        { id: 3, link: "/cursos", label: "Cursos" },
        { id: 4, link: "/how-we-work", label: "HowWeWork" },
    ];

    const scrollPosition = useScrollPosition();

    return (
        <div className={
            navBarOpen
                ? styles.navOpen
                : scrollPosition > 0
                    ? styles.navOnScroll
                    : styles.navBar
        }>
            {!navBarOpen && <p className={styles.logo}>EduWise | Unlock your potential</p>}
            {!navBarOpen && windowDimension.width < 800 ? (
                <FiMenu
                    onClick={() => setNavBarOpen(!navBarOpen)}
                    size={25}
                    className={styles.menuIcon}
                />
            ) : windowDimension.width < 800 && (
                <CgCloseO
                    onClick={() => setNavBarOpen(!navBarOpen)}
                    size={25}
                    className={styles.menuIcon}
                    color="#f1f1f1"
                />
            )}

            {navBarOpen && (
                <ul className={styles.linksContainer}>
                    {links.map((x) => (
                        <div key={x.id}>
                            <NavLink
                                to={x.link}
                                onClick={() => setNavBarOpen(false)}
                                className={styles.navLink}
                            >
                                {x.label === "HowWeWork" ? "How we work" : x.label}
                            </NavLink>
                            <div className={styles.border}></div>
                        </div>
                    ))}
                </ul>
            )}
            {
                windowDimension.width > 800 && (
                    <ul className={styles.linksContainer}>
                        {links.map((x) => (
                            <div key={x.id}>
                                <NavLink
                                    to={x.link}
                                    onClick={() => setNavBarOpen(false)}
                                    className={styles.navLink}
                                >
                                    {x.label === "HowWeWork" ? "How we work" : x.label}
                                </NavLink>
                                <div className={styles.border}></div>
                            </div>
                        ))}
                        <NavLink
                            to="/signin"
                            onClick={() => setNavBarOpen(false)}
                            className={styles.SignLink}
                        >
                            Sign In
                        </NavLink>
                    </ul>
                )
            }
        </div>
    );
};

export default NavBar;