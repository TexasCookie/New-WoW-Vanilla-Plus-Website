import { useState } from 'react';

interface MobileNavToggleProps {
  menuId: string;
}

export default function MobileNavToggle({ menuId }: MobileNavToggleProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
    const menu = document.getElementById(menuId);
    if (menu) {
      menu.classList.toggle('open');
    }
  };

  return (
    <button
      onClick={handleClick}
      className="fixed top-4 right-4 z-[60] lg:hidden p-2"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
    >
      <div className="w-6 h-5 flex flex-col justify-between">
        <span
          className="block h-[2px] w-full bg-white transition-all duration-300 origin-center"
          style={{
            transform: isOpen ? 'translateY(9px) rotate(45deg)' : 'none',
          }}
        />
        <span
          className="block h-[2px] w-full bg-white transition-all duration-300"
          style={{
            opacity: isOpen ? 0 : 1,
            transform: isOpen ? 'translateX(-8px)' : 'none',
          }}
        />
        <span
          className="block h-[2px] w-full bg-white transition-all duration-300 origin-center"
          style={{
            transform: isOpen ? 'translateY(-9px) rotate(-45deg)' : 'none',
          }}
        />
      </div>
    </button>
  );
}
