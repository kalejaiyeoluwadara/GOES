"use client";
import React, { useState, useEffect } from "react";
import { BiTimeFive } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineProject, AiOutlineHistory } from "react-icons/ai";
import { db } from "@/utils/firebase"; // Adjust the path as necessary
import { collection, getDocs, query, where } from "firebase/firestore";
import axios from "axios";

const apiKey = "a546511575msh6abf22f977f25d4p1f90efjsn26677841b53f"; // Replace with your actual API key from RapidAPI
const apiHost = "weatherapi-com.p.rapidapi.com"; // Replace with the host of your chosen weather API on RapidAPI
const city = "Ibadan";
const country = "NG";

function Page() {
  const [userCount, setUserCount] = useState(0);
  const [ongoingProjectsCount, setOngoingProjectsCount] = useState(0);
  const [pastProjectsCount, setPastProjectsCount] = useState(0);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch number of users
        const usersSnapshot = await getDocs(collection(db, "users"));
        setUserCount(usersSnapshot.size);

        // Fetch ongoing projects
        const ongoingQuery = query(
          collection(db, "projects"),
          where("status", "==", "ongoing")
        );
        const ongoingSnapshot = await getDocs(ongoingQuery);
        setOngoingProjectsCount(ongoingSnapshot.size);

        // Fetch past projects
        const pastQuery = query(
          collection(db, "projects"),
          where("status", "==", "past")
        );
        const pastSnapshot = await getDocs(pastQuery);
        setPastProjectsCount(pastSnapshot.size);

        // Fetch weather data from RapidAPI
        const weatherResponse = await axios.get(
          `https://${apiHost}/current.json`,
          {
            params: {
              q: `${city},${country}`,
            },
            headers: {
              "X-RapidAPI-Key": apiKey,
              "X-RapidAPI-Host": apiHost,
            },
          }
        );
        setWeather(weatherResponse.data);
      } catch (error) {
        setError(error);
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="flex-1 flex items-center sm:mb-0 mb-20 justify-center">
      <div className="grid w-full bg-gray-200 sm:gap-8 gap-2 px-2 h-full sm:px-10 py-8 grid-cols-2">
        <div className="flex bg-white justify-between px-6 py-3 flex-col h-[150px] rounded-md shadow-sm w-auto">
          <div className="flex items-center justify-between">
            <p>Sessions</p>
            <BiTimeFive />
          </div>
          <div className="flex justify-between items-center">
            <h3 className="text-[25px] font-[600] text-primary ">20</h3>
            <h3 className="text-[15px] font-[600] text-primary ">Today</h3>
          </div>
        </div>
        <div className="flex bg-white justify-between px-6 py-3 flex-col h-[150px] rounded-md shadow-sm w-auto">
          <div className="flex items-center justify-between">
            <p>Users</p>
            <FaUserAlt />
          </div>
          <div className="flex justify-between items-center">
            <h3 className="text-[25px] font-[600] text-primary ">
              {userCount}
            </h3>
            <h3 className="text-[15px] font-[600] text-primary ">Total</h3>
          </div>
        </div>
        <div className="flex bg-white justify-between px-6 py-3 flex-col h-[150px] rounded-md shadow-sm w-auto">
          <div className="flex items-center justify-between">
            <p>Ongoing Projects</p>
            <AiOutlineProject />
          </div>
          <div className="flex justify-between items-center">
            <h3 className="text-[25px] font-[600] text-primary ">
              {ongoingProjectsCount}
            </h3>
          </div>
        </div>
        <div className="flex bg-white justify-between px-6 py-3 flex-col h-[150px] rounded-md shadow-sm w-auto">
          <div className="flex items-center justify-between">
            <p>Past Projects</p>
            <AiOutlineHistory />
          </div>
          <div className="flex justify-between items-center">
            <h3 className="text-[25px] font-[600] text-primary ">
              {pastProjectsCount}
            </h3>
          </div>
        </div>
        <div className="col-span-2 flex bg-white h-[200px] rounded-md shadow-sm w-auto p-6">
          {weather ? (
            <div className="flex flex-col items-center justify-center w-full h-full">
              <h2 className="text-2xl font-semibold">
                Weather in Ibadan, Nigeria
              </h2>
              <div className="flex items-center justify-center mt-4">
                <img
                  src={weather.current.condition.icon}
                  alt="Weather Icon"
                  className="w-16 h-16"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-bold">
                    {weather.current.temp_c}°C
                  </h3>
                  <p className="text-sm">{weather.current.condition.text}</p>
                </div>
              </div>
              <div className="flex mt-4 text-sm space-x-4">
                <p>Humidity: {weather.current.humidity}%</p>
                <p>Wind: {weather.current.wind_kph} kph</p>
              </div>
            </div>
          ) : error ? (
            <p className="text-red-500">
              Error fetching weather data: {error.message}
            </p>
          ) : (
            <p>Loading weather data...</p>
          )}
        </div>
      </div>
    </main>
  );
}

export default Page;
