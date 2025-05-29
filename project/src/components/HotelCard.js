const HotelCard = ({ hotel, onSelect }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden mb-4 hover:shadow-lg transition-all">
      <div className="relative h-48">
        <img 
          src={hotel.image} 
          alt={hotel.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 className="text-white font-bold text-xl">{hotel.name}</h3>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`w-4 h-4 ${i < hotel.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-white text-sm ml-1">({hotel.reviews})</span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-600 mb-2">{hotel.location}</p>
        <div className="flex justify-between items-center">
          <p className="text-sm">
            <span className="font-bold text-lg text-blue-600">${hotel.price}</span>
            <span className="text-gray-500">/noche</span>
          </p>
          <button 
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            onClick={onSelect}
          >
            Reservar
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;

// DONE