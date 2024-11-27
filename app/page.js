import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-dm">
          <h1 className="text-6xl font-bold text-primary">BookGeniusAI</h1>
          <p className="py-6 text-lg leading-loose">
            BookGeniusAI: Your AI library companion. Powered by OpenAI, our
            smart library companion finds a book to help you get out of any
            reading slump!
          </p>
          <Link href="/chat" className="btn btn-secondary">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
