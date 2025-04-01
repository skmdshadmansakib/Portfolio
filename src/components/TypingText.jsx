import React, { useState, useEffect } from 'react';

const TypingText = ({ professions }) => {
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingEffect = async () => {
      const currentProfession = professions[index];
      setCurrentText('');

      // Typing effect
      for (let i = 0; i <= currentProfession.length; i++) {
        setCurrentText(currentProfession.substring(0, i));
        await new Promise((resolve) => setTimeout(resolve, 100)); // Adjust typing speed here
      }

      // Pause before deleting
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Adjust pause before deleting

      // Deleting effect
      for (let i = currentProfession.length; i >= 0; i--) {
        setCurrentText(currentProfession.substring(0, i));
        await new Promise((resolve) => setTimeout(resolve, 50)); // Adjust deleting speed here
      }

      // Move to the next profession
      setIndex((index + 1) % professions.length);
    };

    typingEffect();

    // Cleanup function to clear intervals or timeouts if needed
    return () => {};
  }, [index, professions]);

  return (
    <h1 className='head-text'>
      Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'>{currentText}</span>
    </h1>
  );
};

export default TypingText;
