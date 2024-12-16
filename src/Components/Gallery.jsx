import React, { memo } from 'react';
import LazyLoad from 'react-lazyload';

const images = [
  { src: 'https://imgs.search.brave.com/9s_VmbPTd9T1327jjV3F0jdJH8Y3FdBRf8HLOKEZQ9Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOC8w/MS8xNC8yMy8xMi9u/YXR1cmUtMzA4Mjgz/Ml82NDAuanBn', alt: 'Image 1' },
  { src: 'https://imgs.search.brave.com/9s_VmbPTd9T1327jjV3F0jdJH8Y3FdBRf8HLOKEZQ9Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOC8w/MS8xNC8yMy8xMi9u/YXR1cmUtMzA4Mjgz/Ml82NDAuanBn', alt: 'Image 2' },
  { src: 'https://imgs.search.brave.com/9s_VmbPTd9T1327jjV3F0jdJH8Y3FdBRf8HLOKEZQ9Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOC8w/MS8xNC8yMy8xMi9u/YXR1cmUtMzA4Mjgz/Ml82NDAuanBn', alt: 'Image 3' },
  { src: 'https://imgs.search.brave.com/9s_VmbPTd9T1327jjV3F0jdJH8Y3FdBRf8HLOKEZQ9Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOC8w/MS8xNC8yMy8xMi9u/YXR1cmUtMzA4Mjgz/Ml82NDAuanBn', alt: 'Image 4' },
  { src: 'https://imgs.search.brave.com/9s_VmbPTd9T1327jjV3F0jdJH8Y3FdBRf8HLOKEZQ9Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOC8w/MS8xNC8yMy8xMi9u/YXR1cmUtMzA4Mjgz/Ml82NDAuanBn', alt: 'Image 5' },
  { src: 'https://imgs.search.brave.com/9s_VmbPTd9T1327jjV3F0jdJH8Y3FdBRf8HLOKEZQ9Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOC8w/MS8xNC8yMy8xMi9u/YXR1cmUtMzA4Mjgz/Ml82NDAuanBn', alt: 'Image 6' },
  { src: 'https://imgs.search.brave.com/9s_VmbPTd9T1327jjV3F0jdJH8Y3FdBRf8HLOKEZQ9Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOC8w/MS8xNC8yMy8xMi9u/YXR1cmUtMzA4Mjgz/Ml82NDAuanBn', alt: 'Image 7' },
  { src: 'https://imgs.search.brave.com/9s_VmbPTd9T1327jjV3F0jdJH8Y3FdBRf8HLOKEZQ9Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOC8w/MS8xNC8yMy8xMi9u/YXR1cmUtMzA4Mjgz/Ml82NDAuanBn', alt: 'Image 8' },
  { src: 'https://imgs.search.brave.com/9s_VmbPTd9T1327jjV3F0jdJH8Y3FdBRf8HLOKEZQ9Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOC8w/MS8xNC8yMy8xMi9u/YXR1cmUtMzA4Mjgz/Ml82NDAuanBn', alt: 'Image 9' },
];

const Gallery = () => {
  return (
    <div className="container my-4">
      <h2 className="text-center mb-5">IMAGE GALLERY</h2>
      <div className="row g-4">
        {images.map((image, index) => (
          <div key={index} className="col-12 col-md-4">
            <LazyLoad height={200} offset={100} once>
              <img src={image.src} alt={image.alt} className="img-fluid rounded shadow" />
            </LazyLoad>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Gallery);
