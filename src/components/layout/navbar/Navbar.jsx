import React from 'react';
import StaggeredMenu from './StaggeredMenu';

export default function Navbar() {
  const menuItems = [
    { label: 'Home', ariaLabel: 'Scroll to home', link: '#home' },
    { label: 'Project', ariaLabel: 'Scroll to projects', link: '#projects' },
    { label: 'About', ariaLabel: 'Scroll to about section', link: '#about' },
    { label: 'Contact', ariaLabel: 'Scroll to contact section', link: '#contact' }
  ];

  const socialItems = [
    { label: 'GitHub', link: 'https://github.com/Aryan-droid01' },
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/aryan-verma-480080281/' },
    { label: 'Email', link: 'mailto:aryanv555@gmail.com' }
  ];

  return (
    <StaggeredMenu
      position="right"
      items={menuItems}
      socialItems={socialItems}
      displaySocials={true}
      displayItemNumbering={true}
      menuButtonColor="var(--white)"
      openMenuButtonColor="var(--white)"
      changeMenuColorOnOpen={false}
      colors={['#1c1c1f', 'var(--pink)']}
      accentColor="var(--pink)"
      isFixed={true}
    />
  );
}
