import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./resizable-navbar.css";

// Context to share scroll state
const NavbarContext = React.createContext({ scrolled: false });

export function Navbar({ children, className = "" }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavbarContext.Provider value={{ scrolled }}>
      <header className={`resizable-navbar-root ${className}`}>
        {children}
      </header>
    </NavbarContext.Provider>
  );
}

export function NavBody({ children, className = "" }) {
  const { scrolled } = React.useContext(NavbarContext);

  return (
    <motion.div
      layout
      className={`nav-body-desktop ${scrolled ? "scrolled" : ""} ${className}`}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {children}
    </motion.div>
  );
}

export function NavItems({ items = [], className = "" }) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      // Determine which section is currently active
      for (const item of items) {
        const id = item.link.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial run
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  const handleLinkClick = (e, link) => {
    if (link.startsWith("#")) {
      e.preventDefault();
      const id = link.substring(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className={`nav-items-container ${className}`}>
      {items.map((item, idx) => {
        const id = item.link.replace("#", "");
        const isActive = activeSection === id;
        return (
          <a
            key={`nav-item-${idx}`}
            href={item.link}
            onClick={(e) => handleLinkClick(e, item.link)}
            className={`nav-item-link ${isActive ? "active" : ""}`}
          >
            <span className="nav-item-text">{item.name}</span>
            {isActive && (
              <motion.span
                layoutId="activeDot"
                className="nav-active-dot"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </a>
        );
      })}
    </div>
  );
}

export function NavbarLogo({ className = "" }) {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div 
      className={`navbar-brand-logo ${className}`} 
      onClick={handleLogoClick}
      aria-label="Scroll to top"
    >
      <div className="logo-indicator" />
      <span className="logo-text">AV</span>
    </div>
  );
}

export function NavbarButton({ children, variant = "primary", className = "", ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`nav-custom-btn btn-${variant} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export function MobileNav({ children, className = "" }) {
  const { scrolled } = React.useContext(NavbarContext);

  return (
    <div className={`nav-body-mobile-wrapper ${scrolled ? "scrolled" : ""} ${className}`}>
      {children}
    </div>
  );
}

export function MobileNavHeader({ children, className = "" }) {
  return (
    <div className={`mobile-nav-header ${className}`}>
      {children}
    </div>
  );
}

export function MobileNavToggle({ isOpen, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`mobile-nav-toggle-btn ${isOpen ? "open" : ""} ${className}`}
      aria-label="Toggle Menu"
    >
      <div className="toggle-burger-line line-top" />
      <div className="toggle-burger-line line-middle" />
      <div className="toggle-burger-line line-bottom" />
    </button>
  );
}

export function MobileNavMenu({ isOpen, onClose, children, className = "" }) {
  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mobile-menu-backdrop"
            onClick={onClose}
          />
          
          {/* Menu Drawer */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={`mobile-menu-drawer ${className}`}
          >
            <div className="mobile-menu-content">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
