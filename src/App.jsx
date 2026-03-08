import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import BazarDor from './pages/BazarDor'
import LocationModal from './components/LocationModal'

const App = () => {
  const [location, setLocation] = useState({ division: "", district: "" });
  const [showModal, setShowModal] = useState(true);

  return (
    <div>
      <Navbar
        district={location.district}
        onLocationClick={() => setShowModal(true)}
      />
      <LocationModal
        isOpenExternal={showModal}
        onSelect={(division, district) => {
          setLocation({ division, district });
          setShowModal(false);
        }}
        onClose={() => setShowModal(false)}
      />
      <Hero />
      <BazarDor />
    </div>
  )
}

export default App