import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 p-4 text-center text-sm text-gray-500 mt-auto z-0">
      <p>
        © {currentYear} Intern Onboarding Project. Built with React & NestJS.
      </p>
    </footer>
  );
};

export default Footer;