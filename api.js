import {
  resumeCardCreator,
  createResultContainer,
  hourCardCreator,
  formatDate,
  forcastCardCreator,
  miniCardCreator,
} from "./utils.js";

const BASE_URL = "https://api.openweathermap.org/data/2.5/";
const API_KEY = "&appid=9ba750b5de6666d1d254fe0287a02651";

const responseGET = async (endpoint, cityName) => {
  const res = await fetch(
    `${BASE_URL}${endpoint}${cityName}${API_KEY}&units=metric`
  );

  const data = await res.json();
  createResultContainer(data);
  miniCardCreator(data);
  const lon = data.coord.lon;
  const lat = data.coord.lat;
  return secondPartRespondGET(lat, lon);
};

const secondPartRespondGET = async (lat, lon) => {
  const res = await fetch(
    `${BASE_URL}forecast?lat=${lat}&lon=${lon}${API_KEY}&units=metric&cnt=32`
  );
  const data = await res.json();
  const currentDayFilter = data.list;

  const currentDay = currentDayFilter.filter(
    (element) => element.dt_txt.slice(0, 10) == formatDate()
  );
  const nextDay = currentDayFilter.filter(
    (element) => element.dt_txt.slice(0, 10) == formatDate(1)
  );

  const hourArray = [...currentDay, ...nextDay];
  hourCardCreator(hourArray);
  console.log(formatDate());

  const forecastNextDay = currentDayFilter.filter(
    (element) => element.dt_txt == formatDate(1) + " 12:00:00"
  );

  const forecast2NextDay = currentDayFilter.filter(
    (element) => element.dt_txt == formatDate(2) + " 12:00:00"
  );
  const forecast3NextDay = currentDayFilter.filter(
    (element) => element.dt_txt == formatDate(3) + " 12:00:00"
  );
  const forecast4NextDay = currentDayFilter.filter(
    (element) => element.dt_txt == formatDate(4) + " 12:00:00"
  );

  const forecastArray = [
    ...forecastNextDay,
    ...forecast2NextDay,
    ...forecast3NextDay,
    ...forecast4NextDay,
  ];
  forcastCardCreator(forecastArray);
};

const responseResumeCardGET = async (endpoint, cityName, index, div) => {
  const res = await fetch(
    `${BASE_URL}${endpoint}${cityName}${API_KEY}&units=metric`
  );
  const data = await res.json();
  return resumeCardCreator(data.list[index], div);
};

export { responseGET, responseResumeCardGET };
