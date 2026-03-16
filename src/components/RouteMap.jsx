import { divIcon } from 'leaflet'
import { MapContainer, Marker, Polyline, Popup, TileLayer } from 'react-leaflet'

const locationCoords = {
  'Central Library': [28.5446, 77.3331],
  Library: [28.5446, 77.3331],
  Arcadia: [28.5442, 77.3324],
  'Sports Complex': [28.5434, 77.3352],
  'Gate 4': [28.5453, 77.3312],
  'Gate 4 Print Shop': [28.5453, 77.3312],
  'Student Center': [28.5440, 77.3342],
  Mailroom: [28.5441, 77.3340],
  'North Hall': [28.5451, 77.3346],
  'East Hall': [28.5447, 77.3356],
  'West Hall': [28.5447, 77.3320],
  'J-Block Dorms': [28.5436, 77.3334],
  'H-Block Hostels': [28.5432, 77.3338],
  'Squash Courts': [28.5435, 77.3356],
  'Campus Cafeteria': [28.5443, 77.3337],
}

const DEFAULT_COORD = [28.5440, 77.3330]
const CAMPUS_BOUNDS = [
  [28.5390, 77.3250],
  [28.5480, 77.3400],
]

const pickupIcon = divIcon({
  className: 'route-marker route-marker--pickup',
  html: '<div class="route-dot route-dot--pickup"></div>',
  iconSize: [18, 18],
  iconAnchor: [9, 9],
})

const dropoffIcon = divIcon({
  className: 'route-marker route-marker--dropoff',
  html: '<div class="route-dot route-dot--dropoff"></div>',
  iconSize: [18, 18],
  iconAnchor: [9, 9],
})

const normalizeKey = (value = '') => value.toLowerCase().trim()

const getCoordForLocation = (location) => {
  if (!location) return DEFAULT_COORD

  if (locationCoords[location]) {
    return locationCoords[location]
  }

  const normalized = normalizeKey(location)
  const matchedKey = Object.keys(locationCoords).find((key) => normalized.includes(normalizeKey(key)))
  return matchedKey ? locationCoords[matchedKey] : DEFAULT_COORD
}

export default function RouteMap({ activeTask }) {
  const pickup = activeTask?.pickup_location
  const dropoff = activeTask?.dropoff_location
  const pickupCoord = getCoordForLocation(pickup)
  const dropoffCoord = getCoordForLocation(dropoff)
  const showRoute = Boolean(activeTask)

  return (
    <section className="rounded-[24px] bg-white p-5 shadow-lg dark:border dark:border-[#2a3b53] dark:bg-[#172233]">
      <div className="relative min-h-[350px] overflow-hidden rounded-xl border border-[#e3ebf3] bg-[#f5f7fa] dark:border-[#2a3b53] dark:bg-[#0f1621]">
        <MapContainer
          center={DEFAULT_COORD}
          zoom={16}
          minZoom={15}
          maxBounds={CAMPUS_BOUNDS}
          maxBoundsViscosity={1.0}
          className="h-[350px] w-full"
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            attribution="&copy; OpenStreetMap contributors &copy; CARTO"
          />

          {showRoute && (
            <>
              <Marker position={pickupCoord} icon={pickupIcon}>
                <Popup>{pickup || 'Pickup'}</Popup>
              </Marker>
              <Marker position={dropoffCoord} icon={dropoffIcon}>
                <Popup>{dropoff || 'Dropoff'}</Popup>
              </Marker>
              <Polyline
                positions={[pickupCoord, dropoffCoord]}
                pathOptions={{ color: '#f87171', weight: 4, dashArray: '6 6' }}
              />
            </>
          )}
        </MapContainer>

        <div className="absolute bottom-4 left-1/2 w-[92%] -translate-x-1/2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-center text-sm font-semibold text-white backdrop-blur-md dark:border-white/10 dark:bg-white/10 dark:text-white">
          {activeTask
            ? `📍 ${pickup || 'Pickup'} → 🏁 ${dropoff || 'Dropoff'}`
            : '📍 Select a task to view your route'}
        </div>

        <style>{`
          .route-marker {
            background: transparent;
            border: none;
          }
          .route-dot {
            width: 14px;
            height: 14px;
            border-radius: 9999px;
          }
          .route-dot--pickup {
            background: #60a5fa;
            box-shadow: 0 0 0 6px rgba(96, 165, 250, 0.25);
          }
          .route-dot--dropoff {
            background: #f87171;
            box-shadow: 0 0 0 6px rgba(248, 113, 113, 0.25);
          }
        `}</style>

      </div>
    </section>
  )
}
