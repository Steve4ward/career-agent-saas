'use client';
import { useEffect } from 'react';

const IntakeFormEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <button
      data-tally-open="wz6vO0"
      data-tally-emoji-text="Start"
      data-tally-emoji-animation="wave"
      className="bg-[#0088d0] hover:bg-[#0073b0] text-white font-semibold py-3 px-6 rounded-lg transition"
    >
      Submit Your Profile
    </button>
  );
};

export default IntakeFormEmbed;