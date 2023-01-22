import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import axios from 'axios'
import {AppProvider} from './AppContext'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

 const fetchTours = async () => axios.get(url).then(
  (response) => {
      var tours = response.data;
      setLoading(false)
      setTours(tours)
      console.log(tours);
  },
  (error) => {
    setLoading(false)
      console.log(error);
  }
); 

  useEffect(() => {
    fetchTours()
  }, [])
  if (loading) {
    return (
      <AppProvider>
      <main>
        <Loading />
      </main>
      </AppProvider>
    )
  }
  if (tours.length === 0) {
    return (
      <AppProvider>
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
      </AppProvider>
    )
  }
  return (
    <AppProvider>
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
    </AppProvider>
  )
}

export default App