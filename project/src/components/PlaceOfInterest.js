import { useState } from 'react';

const PlaceOfInterest = ({ place }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-3 hover:shadow-md transition-shadow">
      <div className="flex">
        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-lg overflow-hidden">
          <img src={place.image} alt={place.name} className="w-full h-full object-cover" />
        </div>
        <div className="ml-4 flex-grow">
          <div className="flex justify-between">
            <h3 className="font-bold">{place.name}</h3>
            <button 
              onClick={() => setIsFavorite(!isFavorite)}
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <svg className="w-5 h-5" fill={isFavorite ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-1">{place.type} • {place.distance} km</p>
          <div className="flex items-center mt-2">
            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm ml-1">{place.rating} ({place.reviews} reseñas)</span>
          </div>
          {place.price && (
            <p className="text-sm mt-1">
              <span className="font-medium">Precio promedio:</span> {place.price}
            </p>
          )}
          <p className="text-sm mt-1">
            <span className="font-medium">Horario:</span> {place.hours}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlaceOfInterest;

// DONE