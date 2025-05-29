import { useState } from 'react';

const MyTrip = ({ selectedFlight, selectedHotel, onClear }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-xl font-bold mb-4">Mi Viaje</h2>
      
      {selectedFlight && (
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Vuelo seleccionado</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-medium">{selectedFlight.airline}</p>
            <p className="text-gray-600">{selectedFlight.departure} → {selectedFlight.arrival}</p>
            <p className="text-gray-600">Salida: {selectedFlight.departureTime}</p>
            <p className="text-blue-600 font-bold">${selectedFlight.price}</p>
            <button 
              onClick={() => onClear('flight')}
              className="mt-2 text-sm text-red-500 hover:text-red-700"
            >
              Eliminar vuelo
            </button>
          </div>
        </div>
      )}

      {selectedHotel && (
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Hotel reservado</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-medium">{selectedHotel.name}</p>
            <p className="text-gray-600">{selectedHotel.location}</p>
            <p className="text-blue-600 font-bold">${selectedHotel.price}/noche</p>
            <button 
              onClick={() => onClear('hotel')}
              className="mt-2 text-sm text-red-500 hover:text-red-700"
            >
              Cancelar reserva
            </button>
          </div>
        </div>
      )}

      {!selectedFlight && !selectedHotel && (
        <p className="text-gray-500">Aún no has seleccionado nada para tu viaje</p>
      )}
    </div>
  );
};

export default MyTrip;