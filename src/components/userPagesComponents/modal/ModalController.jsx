import React, { useState } from 'react';
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';

const ModalController = ({ isLoginModalOpen, setIsLoginModalOpen }) => {
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);

  const openLoginModal = () => {
    setSignUpModalOpen(false);        // close signup
    setIsLoginModalOpen(true);        // open login
  };

  const handleSignUpClick = () => {
    setIsLoginModalOpen(false);       // close login
    setSignUpModalOpen(true);         // open signup
  };

  return (
    <>
      <LoginModal
        isOpen={isLoginModalOpen}
        onRequestClose={() => setIsLoginModalOpen(false)}
        handleSignUpClick={handleSignUpClick}
      />

      <SignUpModal
        isOpen={isSignUpModalOpen}
        onRequestClose={() => setSignUpModalOpen(false)}
        openLoginModal={openLoginModal} // ✅ Now this will work
      />
    </>
  );
};

export default ModalController;
