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

import React from 'react';

function PanoramaCustom({ photo }) {
  return (
    <div>
      {photo.map((image, index) => (
        <img key={index} src={image} alt={`Photo ${index + 1}`} />
      ))}
    </div>
  );
}

export default PanoramaCustom;
