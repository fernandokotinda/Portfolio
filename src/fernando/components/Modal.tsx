import React from "react";
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-500 flex items-center justify-center bg-black/80 bg-opacity-60">
      <div className="bg-gray-100 rounded-lg shadow-lg max-w-md w-full p-8 relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold focus:outline-none cursor-pointer"
          aria-label="Fechar modal"
        >
          <X />
        </button>
        <div className="text-gray-900 text-base">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal; 