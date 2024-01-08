// import React from 'react';

// const PanoramaCustom = ({ photo }) => {
//     return (
//         <div>
//             <img src={photo} alt="Custom Panorama" />
//         </div>
//     );
// };

// export default PanoramaCustom;

// Inside PanoramaCustom.jsx

// import React from 'react';

// function PanoramaCustom({ photo }) {
//   return (
//     <div>
//       {photo.map((image, index) => (
//         <img key={index} src={image} alt={`Photo ${index + 1}`} />
//       ))}
//     </div>
//   );
// }

// export default PanoramaCustom;

// import React, { useEffect, useState } from 'react';

// function PanoramaCustom({ photo }) {
//   const [randomImage, setRandomImage] = useState(null);

//   useEffect(() => {
//     const randomIndex = Math.floor(Math.random() * photo.length);
//     setRandomImage(photo[randomIndex]);
//   }, [photo]);

//   return (
//     <div>
//       {randomImage && <img src={randomImage} alt={`Random Photo`} />}
//     </div>
//   );
// }

// export default PanoramaCustom;

import React, { useEffect, useState } from 'react';

function PanoramaCustom({ photo }) {
  const [randomImage, setRandomImage] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * photo.length);
    setRandomImage(photo[randomIndex]);
  }, [photo]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {randomImage && (
        <img
          src={randomImage}
          alt={`Random Photo`}
          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
        />
      )}
    </div>
  );
}

export default PanoramaCustom;
