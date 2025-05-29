import { useState } from 'react';

const FlightComparisonCard = ({ flight, onSelect }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden mb-4 transition-all hover:shadow-lg">
      <div className="p-4 flex justify-between items-center cursor-pointer" onClick={() => setExpanded(!expanded)}>
        <div>
          <h3 className="font-bold text-lg">{flight.airline}</h3>
          <p className="text-gray-600">{flight.departure} → {flight.arrival}</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-blue-600">${flight.price}</p>
          <p className="text-sm text-gray-500">{flight.duration}</p>
        </div>
      </div>
      {expanded && (
        <div className="px-4 pb-4">
          <div className="border-t pt-3">
            <p className="font-semibold">Detalles:</p>
            <ul className="list-disc pl-5 text-sm">
              <li>Salida: {flight.departureTime}</li>
              <li>Llegada: {flight.arrivalTime}</li>
              <li>Escalas: {flight.stops === 0 ? 'Directo' : `${flight.stops} escala(s)`}</li>
            </ul>
            <button 
              className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                onSelect();
              }}
            >
              Seleccionar vuelo
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightComparisonCard;