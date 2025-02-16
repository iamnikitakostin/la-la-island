import React, { useState } from 'react';

const ProgressivePicture = ({ sources, defaultSrc, alt, blurDataURL, className = '', isFullscreen=false }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative w-full h-full ${className}`}>
      <img
        src={blurDataURL}
        alt={`${alt} placeholder`}
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ filter: 'blur(20px)' }}
      />

      <picture>
        {sources.map((source, idx) => (
          <source key={idx} srcSet={source.srcSet} media={source.media} />
        ))}
        <img
          src={defaultSrc}
          alt={alt}
          className={`w-full ${isFullscreen ? "min-h-screen" : "h-full"} object-cover transition-opacity duration-500 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setLoaded(true)}
        />
      </picture>
    </div>
  );
};

export default ProgressivePicture;