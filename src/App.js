import { useEffect, useState } from "react";
import api from "./api";
import WeatherCard from "./components/weatherCard";
import ChartView from "./components/chartView";

function App() {

  const [data, setData] = useState([])

  const fetchHistory = async () =>{
    const res = await api.get("/weather/history")
    setData(res.data)
  }
  const fetchNewData = async () =>{
      await api.get("/weather/fetch")
      fetchHistory()
  }

  useEffect(()=>{
    fetchHistory()
  },[])

  return (
    <div>
      <h1>🌦 Weather Monitoring Dashboard</h1>
      <button
        onClick={fetchNewData}
      >
        Refresh Data
      </button>
      <div>
        <WeatherCard data={data[0]} />
      </div>
      
      <div>
        <ChartView data={data} />
      </div>
    </div>
  )
}

export default App;
