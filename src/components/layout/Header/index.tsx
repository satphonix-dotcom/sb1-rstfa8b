import React from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import Navigation from './Navigation';
import UserMenu from './UserMenu';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center flex-shrink-0">
            <Logo />
          </div>
          
          <div className="hidden md:flex items-center flex-shrink-0 ml-6">
            <Navigation />
          </div>
          
          <div className="flex-1 max-w-xl mx-8">
            <SearchBar />
          </div>
          
          <div className="flex items-center flex-shrink-0">
            <UserMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;