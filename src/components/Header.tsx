import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
              <Icon name="BookOpen" className="text-white" size={24} />
            </div>
            <h1 className="text-xl font-bold text-gray-900">Заметки ЛСПК</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Главная
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Личный кабинет
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              3D Галерея
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              О нас
            </a>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a
                href="#"
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                Главная
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                Личный кабинет
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                3D Галерея
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                О нас
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
