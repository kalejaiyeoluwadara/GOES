"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineProject, AiOutlineHistory, AiOutlineMessage } from "react-icons/ai";

const Dashboard = () => {
  const [sessionCount, setSessionCount] = useState(0);
  const [messagesCount, setMessagesCount] = useState(0);
  const [ongoingProjectsCount, setOngoingProjectsCount] = useState(0);
  const [pastProjectsCount, setPastProjectsCount] = useState(0);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch messages
        const messagesRes = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/messages/get`);
        setMessagesCount(messagesRes.data?.length || 0);

        // Fetch applications (sessions)
        const appsRes = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/applications/get`);
        setSessionCount(appsRes.data?.length || 0);

        // Fetch projects
        const projectsRes = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/projects/get`);
        const allProjects = projectsRes.data || [];
        const ongoing = allProjects.filter(proj => proj.status === "ongoing").length;
        const past = allProjects.filter(proj => proj.status === "past").length;
        setOngoingProjectsCount(ongoing);
        setPastProjectsCount(past);

        // Fetch weather
        const weatherRes = await axios.get(`https://weatherapi-com.p.rapidapi.com/current.json`, {
          params: { q: "Ibadan,NG" },
          headers: {
            "X-RapidAPI-Key": "a546511575msh6abf22f977f25d4p1f90efjsn26677841b53f",
            "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
          },
        });
        setWeather(weatherRes.data);
      } catch (err) {
        console.error(err);
        setError(err);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="flex-1 flex items-center sm:mb-0 mb-20 justify-center">
      <div className="grid w-full bg-gray-100 gap-4 px-2 sm:px-10 py-10 grid-cols-2 lg:grid-cols-3">
        <Card title="Applications " count={sessionCount} icon={<BiTimeFive />} note="Today" />
        <Card title="Messages" count={messagesCount} icon={<AiOutlineMessage />} note="Total" />
        <Card title="Ongoing Projects" count={ongoingProjectsCount} icon={<AiOutlineProject />} />
        <Card title="Past Projects" count={pastProjectsCount} icon={<AiOutlineHistory />} />

        <div className="col-span-2 lg:col-span-3 bg-gradient-to-br from-white to-gray-50 h-[220px] rounded-2xl shadow-md w-auto p-6 transition-all duration-300">
  {weather ? (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Weather in <span className="text-blue-600">Ibadan, Nigeria</span>
      </h2>
      <div className="flex items-center justify-center mt-2">
        <img
          src={weather.current.condition.icon}
          alt="Weather Icon"
          className="w-16 h-16"
        />
        <div className="ml-4">
          <h3 className="text-3xl font-bold text-gray-700">
            {weather.current.temp_c}°C
          </h3>
          <p className="text-sm text-gray-500">
            {weather.current.condition.text}
          </p>
        </div>
      </div>
      <div className="flex mt-6 text-sm space-x-6 border-t border-gray-200 pt-3 text-gray-600">
        <div className="flex items-center space-x-1">
          <span className="font-medium">Humidity:</span>
          <span>{weather.current.humidity}%</span>
        </div>
        <div className="flex items-center space-x-1">
          <span className="font-medium">Wind:</span>
          <span>{weather.current.wind_kph} kph</span>
        </div>
      </div>
    </div>
  ) : error ? (
    <p className="text-red-500 text-center">
      Error fetching weather data: {error.message}
    </p>
  ) : (
    <p className="text-gray-500 text-center">Loading weather data...</p>
  )}
</div>

      </div>
    </main>
  );
};

const Card = ({
  title,
  count,
  icon,
  note,
}) => (
  <div className="flex flex-col justify-between bg-white px-6 py-4 rounded-lg shadow-sm h-[150px]">
    <div className="flex justify-between items-center">
      <p className="text-sm font-medium">{title}</p>
      <div className="text-xl text-primary">{icon}</div>
    </div>
    <div className="flex justify-between items-end">
      <h3 className="text-[28px] font-bold text-primary">{count}</h3>
      {note && <span className="text-sm font-semibold text-gray-500">{note}</span>}
    </div>
  </div>
);

export default Dashboard;
