// pages/locations.js
import LocationCard from './LocationCard';

export default function Locations() {
  const locationData = [
    { label: 'Hot', imageUrl: '/location1.png', location: 'Paris, France', vacancies: 5, companies: 120 },
    { label: 'Trending', imageUrl: '/location2.png', location: 'London, England', vacancies: 7, companies: 68 },
    { label: 'Hot', imageUrl: '/location3.png', location: 'New York, USA', vacancies: 9, companies: 80 },
    { imageUrl: '/location4.png', location: 'Amsterdam, Holland', vacancies: 16, companies: 86 },
    { imageUrl: '/location5.png', location: 'Copenhagen, Denmark', vacancies: 39, companies: 186 },
    { imageUrl: '/location6.png', location: 'Berlin, Germany', vacancies: 15, companies: 632 },
  ];

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {locationData.map((data, index) => (
          <LocationCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
}
