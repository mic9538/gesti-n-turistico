import { useState } from 'react';
import FlightComparisonCard from './components/FlightComparisonCard';
import HotelCard from './components/HotelCard';
import PlaceOfInterest from './components/PlaceOfInterest';
import MyTrip from './components/MyTrip';
import { sampleFlights } from './mock/flights';
import { sampleHotels } from './mock/hotels';
import { samplePlaces } from './mock/places';

function App() {
  const [activeTab, setActiveTab] = useState('vuelos');
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);

  const handleSelectFlight = (flight) => {
    setSelectedFlight(flight);
    setActiveTab('miViaje');
  };

  const handleSelectHotel = (hotel) => {
    setSelectedHotel(hotel);
    setActiveTab('miViaje');
  };

  const handleClearSelection = (type) => {
    if (type === 'flight') {
      setSelectedFlight(null);
    } else if (type === 'hotel') {
      setSelectedHotel(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold">Turismo360</h1>
        <p className="text-sm opacity-80">Tu comparador de viajes inteligente</p>
      </header>

      <div className="max-w-4xl mx-auto p-4">
        <div className="flex border-b mb-6">
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'vuelos' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('vuelos')}
          >
            Vuelos
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'hoteles' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('hoteles')}
          >
            Hoteles
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'lugares' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('lugares')}
          >
            Lugares
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'miViaje' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('miViaje')}
          >
            Mi Viaje
          </button>
        </div>

        {activeTab === 'miViaje' && (
          <MyTrip 
            selectedFlight={selectedFlight} 
            selectedHotel={selectedHotel}
            onClear={handleClearSelection}
          />
        )}

        {activeTab === 'vuelos' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Vuelos disponibles</h2>
            {sampleFlights.map(flight => (
              <FlightComparisonCard 
                key={flight.id} 
                flight={flight}
                onSelect={() => handleSelectFlight(flight)}
              />
            ))}
          </div>
        )}

        {activeTab === 'hoteles' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Hoteles recomendados</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {sampleHotels.map(hotel => (
                <HotelCard 
                  key={hotel.id} 
                  hotel={hotel}
                  onSelect={() => handleSelectHotel(hotel)}
                />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'lugares' && (
          <div>
            <h2 className="text-xl font-bold mb-4">10 Lugares para visitar</h2>
            {samplePlaces.map(place => (
              <PlaceOfInterest key={place.id} place={place} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;