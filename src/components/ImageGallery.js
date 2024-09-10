import React, { useState } from 'react';
import { fetchImages } from '../api/pexels';
import '../styles/main.css'; 

const albums = [
    { id: 1, name: 'Photography', query: 'photography', cover: 'data:image/png;base64,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' },
    { id: 2, name: 'Coding', query: 'coding', cover: 'data:image/jpeg;base64,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' },
    { id: 3, name: 'Programming', query: 'programming', cover: 'data:image/jpeg;base64,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' },
];

const Gallery = () => {
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const [images, setImages] = useState([]);

    const loadImages = async (query) => {
        const fetchedImages = await fetchImages(query);
        setImages(fetchedImages);
    };

    const openAlbum = (album) => {
        setSelectedAlbum(album);
        loadImages(album.query); 
    };

    const closeAlbum = () => {
        setSelectedAlbum(null);
        setImages([]); 
    };

    return (
        <section className="py-20 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">Image Gallery</h2>

                {selectedAlbum ? (
                    <div>
                        <button onClick={closeAlbum} className="mb-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                            Back to Albums
                        </button>
                        <h3 className="text-2xl font-semibold mb-5">{selectedAlbum.name}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {images.length > 0 ? (
                                images.map((image) => (
                                    <div key={image.id} className="relative overflow-hidden">
                                        <img
                                            src={image.src.medium}
                                            alt={image.alt}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))
                            ) : (
                                <p>Loading images...</p>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {albums.map((album) => (
                            <div
                                key={album.id}
                                className="relative cursor-pointer overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl"
                                onClick={() => openAlbum(album)}
                                style={{ width: '100%', height: '300px' }} // Ensures a square box
                            >
                                <img
                                    src={album.cover}
                                    alt={album.name}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                                    <h3 className="text-xl font-semibold text-white">{album.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Gallery;
