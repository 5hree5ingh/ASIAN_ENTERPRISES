import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import './MegaMenu.css';

/**
 * MegaMenu — Asian Enterprises themed mega-menu
 * Props:
 *   items: MegaMenuItem[]
 *   scrolled: boolean  (controls colour scheme)
 */
const MegaMenu = ({ items = [], scrolled = false }) => {
    const [openMenu, setOpenMenu] = useState(null);
    const [isHover, setIsHover] = useState(null);

    return (
        <ul
            className="mega-menu-list"
            onMouseLeave={() => { setOpenMenu(null); setIsHover(null); }}
        >
            {items.map((navItem) => (
                <li
                    key={navItem.id}
                    className="mega-menu-item"
                    onMouseEnter={() => setOpenMenu(navItem.id)}
                    onMouseLeave={() => setOpenMenu(null)}
                >
                    {/* Top-level button / link */}
                    {navItem.link ? (
                        <Link
                            to={navItem.link}
                            className={`mega-nav-btn ${scrolled ? 'scrolled' : ''}`}
                            onMouseEnter={() => setIsHover(navItem.id)}
                            onMouseLeave={() => setIsHover(null)}
                        >
                            {navItem.label}
                            {(isHover === navItem.id || openMenu === navItem.id) && (
                                <motion.span
                                    layoutId="mega-hover-bg"
                                    className="mega-hover-pill"
                                />
                            )}
                        </Link>
                    ) : (
                        <button
                            className={`mega-nav-btn ${scrolled ? 'scrolled' : ''}`}
                            onMouseEnter={() => setIsHover(navItem.id)}
                            onMouseLeave={() => setIsHover(null)}
                        >
                            <span>{navItem.label}</span>
                            {navItem.subMenus && (
                                <ChevronDown
                                    size={15}
                                    className={`mega-chevron ${openMenu === navItem.id ? 'open' : ''}`}
                                />
                            )}
                            {(isHover === navItem.id || openMenu === navItem.id) && (
                                <motion.span
                                    layoutId="mega-hover-bg"
                                    className="mega-hover-pill"
                                />
                            )}
                        </button>
                    )}

                    {/* Dropdown panel */}
                    <AnimatePresence>
                        {openMenu === navItem.id && navItem.subMenus && (
                            <div className="mega-dropdown-wrapper">
                                <motion.div
                                    className="mega-dropdown-panel"
                                    layoutId="mega-menu-panel"
                                    initial={{ opacity: 0, y: -8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
                                >
                                    <div className="mega-panel-inner">
                                        {navItem.subMenus.map((sub) => (
                                            <div key={sub.title} className="mega-subgroup">
                                                <p className="mega-subgroup-title">{sub.title}</p>
                                                <ul className="mega-subgroup-items">
                                                    {sub.items.map((item) => {
                                                        const Icon = item.icon;
                                                        return (
                                                            <li key={item.label}>
                                                                <Link
                                                                    to={item.link || '#'}
                                                                    className="mega-sub-item"
                                                                    onClick={() => setOpenMenu(null)}
                                                                >
                                                                    <div className="mega-icon-box">
                                                                        <Icon size={18} strokeWidth={1.8} />
                                                                    </div>
                                                                    <div className="mega-item-text">
                                                                        <span className="mega-item-label">{item.label}</span>
                                                                        <span className="mega-item-desc">{item.description}</span>
                                                                    </div>
                                                                </Link>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        )}
                    </AnimatePresence>
                </li>
            ))}
        </ul>
    );
};

export default MegaMenu;
