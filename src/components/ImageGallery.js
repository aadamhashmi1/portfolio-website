// src/components/ImageGallery.js
import React, { useEffect, useState } from 'react';
import { fetchImages } from '../api/pexels';
import '../styles/main.css'; // Import the CSS file

const Gallery = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const loadImages = async () => {
            const fetchedImages = await fetchImages();
            setImages(fetchedImages);
        };
        loadImages();
    }, []);

    return (
        <section className="py-20 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">Image Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {images.map((image) => (
                        <div key={image.id} className="relative overflow-hidden">
                            <img
                                src={image.src.medium}
                                alt={image.alt}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
