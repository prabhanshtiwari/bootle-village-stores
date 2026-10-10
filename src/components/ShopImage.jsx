import { useState } from 'react';

/** Loads a local photograph and gracefully falls back to a bundled illustration until photos are imported. */
export default function ShopImage({ src, fallbackSrc, alt, ...props }) {
  const [currentSrc, setCurrentSrc] = useState(src);

  function handleError() {
    if (fallbackSrc && currentSrc !== fallbackSrc) setCurrentSrc(fallbackSrc);
  }

  return <img src={currentSrc} alt={alt} onError={handleError} {...props} />;
}
