const qS = (type) => document.querySelector(type);
const qSA = (type) => document.querySelectorAll(type);
const cE = (element) => document.createElement(element);

const firstHalfContainer = qS(".firstHalf");
const secondHalfContainer = qS(".secondHalf");
const backgroundEl = qS(".resultContainer");
const miniCardSection = qS(".miniCardSection");

const createResultContainer = (data) => {
  deleteCard(".first_row");
  deleteCard(".second_row");

  const firstRowContainer = cE("div");
  firstRowContainer.className = "first_row";
  const infoBoxEl = cE("div");
  infoBoxEl.className = "leftInfo";

  const cityNameEl = cE("h3");
  cityNameEl.className = "cityNameCard";
  cityNameEl.textContent = data.name;

  const cityDegreeEl = cE("h2");
  cityDegreeEl.className = "degrees";
  cityDegreeEl.textContent = Math.floor(data.main.temp) + "°";

  const cityWeatherDescriptionEl = cE("p");
  cityWeatherDescriptionEl.className = "weatherDescription";
  cityWeatherDescriptionEl.textContent = data.weather[0].description;

  const mainImgEl = cE("img");
  mainImgEl.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  mainImgEl.alt = "weather Icon";

  if (data.name == "Palermo") {
    backgroundEl.style.backgroundImage =
      "linear-gradient(rgb(0 0 0 / 43%), rgb(0 0 0 / 83%))" +
      "," +
      "url('./img/palermo.jpg')";
  } else if (data.name == "Catania") {
    backgroundEl.style.backgroundImage =
      "linear-gradient(rgb(0 0 0 / 43%), rgb(0 0 0 / 83%))" +
      "," +
      "url('./img/catania.jpg')";
  } else if (data.name == "Trapani") {
    backgroundEl.style.backgroundImage =
      "linear-gradient(rgb(0 0 0 / 43%), rgb(0 0 0 / 83%))" +
      "," +
      "url('./img/trapani.jpg')";
  } else if (data.name == "Enna") {
    backgroundEl.style.backgroundImage =
      "linear-gradient(rgb(0 0 0 / 43%), rgb(0 0 0 / 83%))" +
      "," +
      "url('./img/enna.jpg')";
  } else if (data.name == "Agrigento") {
    backgroundEl.style.backgroundImage =
      "linear-gradient(rgb(0 0 0 / 43%), rgb(0 0 0 / 83%))" +
      "," +
      "url('./img/agrigento.jpg')";
  } else if (data.name == "Messina") {
    backgroundEl.style.backgroundImage =
      "linear-gradient(rgb(0 0 0 / 43%), rgb(0 0 0 / 83%))" +
      "," +
      "url('./img/messina.jpg')";
  } else if (data.name == "Caltanissetta") {
    backgroundEl.style.backgroundImage =
      "linear-gradient(rgb(0 0 0 / 43%), rgb(0 0 0 / 83%))" +
      "," +
      "url('./img/cl.jpg')";
  } else if (data.name == "Siracusa") {
    backgroundEl.style.backgroundImage =
      "linear-gradient(rgb(0 0 0 / 43%), rgb(0 0 0 / 83%))" +
      "," +
      "url('./img/siracusa.jpg')";
  } else if (data.name == "Ragusa") {
    backgroundEl.style.backgroundImage =
      "linear-gradient(rgb(0 0 0 / 43%), rgb(0 0 0 / 83%))" +
      "," +
      "url('./img/ragusa.jpg')";
  }

  const secondRowContainer = cE("div");
  secondRowContainer.className = "second_row";
  const humidityBox = cE("div");
  const humiditySimbol = cE("img");
  humiditySimbol.src = "./img/humidity.png";
  const humidityValue = cE("p");
  humidityValue.textContent = data.main.humidity + "%";

  const visibilityBox = cE("div");
  const visibilitySimbol = cE("img");
  visibilitySimbol.src = "./img/visibility.png";
  const visibilityValue = cE("p");
  visibilityValue.textContent = data.visibility / 1000 + ".0km";

  const windBox = cE("div");
  const windSimbol = cE("img");
  windSimbol.src = "./img/wind.png";
  const windValue = cE("p");
  windValue.textContent = data.wind.speed + "m/s";

  windBox.append(windSimbol, windValue);
  visibilityBox.append(visibilitySimbol, visibilityValue);
  humidityBox.append(humiditySimbol, humidityValue);
  secondRowContainer.append(humidityBox, visibilityBox, windBox);
  infoBoxEl.append(cityNameEl, cityDegreeEl, cityWeatherDescriptionEl);
  firstRowContainer.append(infoBoxEl, mainImgEl);
  firstHalfContainer.append(firstRowContainer, secondRowContainer);

  // hourCardCreator(resultContainer);
};

const hourCardCreator = (data) => {
  deleteCard(".third_row");
  const thirdRowContainer = cE("div");
  thirdRowContainer.className = "third_row";

  const hourBoxContainer = cE("div");
  hourBoxContainer.className = "hourBoxContainer";

  data.forEach((element) => {
    const hourBox = cE("div");
    hourBox.className = "hourCounter";
    const hourEl = cE("p");

    const iconEl = cE("img");
    iconEl.src = `https://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`;
    iconEl.alt = "weather Icon";
    if (element.dt_txt.substring(11).slice(0, -3) > "12:00") {
      hourEl.textContent = element.dt_txt.substring(11).slice(0, -6) + " PM";
    } else
      hourEl.textContent = element.dt_txt.substring(11).slice(0, -6) + " AM";

    const degreeEl = cE("p");
    degreeEl.textContent = Math.floor(element.main.temp) + "°";
    hourBox.append(hourEl, iconEl, degreeEl);
    hourBoxContainer.append(hourBox);
  });

  //   fourthRowContainer.append(forecastContainer);
  thirdRowContainer.appendChild(hourBoxContainer);
  secondHalfContainer.append(thirdRowContainer);
};

const forcastCardCreator = (data) => {
  deleteCard(".fourth-row");
  const fourthRowContainer = cE("div");
  fourthRowContainer.className = "fourth-row";

  data.forEach((item) => {
    const forecastContainer = cE("div");
    forecastContainer.className = "forecastContainer";

    const dt = new Date(item.dt_txt);
    const weekDay = cE("p");

    switch (dt.getDay()) {
      case 0:
        weekDay.textContent = "Sunday";
        break;
      case 1:
        weekDay.textContent = "Monday";
        break;
      case 2:
        weekDay.textContent = "Tuesday";
        break;
      case 3:
        weekDay.textContent = "Wednesday";
        break;
      case 4:
        weekDay.textContent = "Thursday";
        break;
      case 5:
        weekDay.textContent = "Friday";
        break;
      case 6:
        weekDay.textContent = "Saturday";
        break;
    }

    const weatherIcon = cE("img");
    weatherIcon.src = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
    weatherIcon.alt = "weather Icon";

    const degreeEl = cE("p");
    degreeEl.textContent = Math.floor(item.main.temp_max) + "°";
    forecastContainer.append(weekDay, weatherIcon, degreeEl);
    fourthRowContainer.append(forecastContainer);
  });
  secondHalfContainer.append(fourthRowContainer);
};

const resumeCardCreator = (data, div) => {
  deleteCard(".first_row");
  deleteCard(".second_row");
  const firstRowContainer = cE("div");
  firstRowContainer.className = "first_row";
  const secondRowContainer = cE("div");
  secondRowContainer.className = "second_row";

  const leftInfoBox = cE("div");
  leftInfoBox.className = "leftInfo";
  const degreeEl = cE("h2");
  degreeEl.className = "degrees";
  degreeEl.textContent = Math.floor(data.main.temp) + "°";
  const cityNameEl = cE("h3");
  cityNameEl.className = "cityNameCard";
  cityNameEl.textContent = data.name;
  const cityWeatherDescriptionEl = cE("p");
  cityWeatherDescriptionEl.className = "weatherDescription";
  cityWeatherDescriptionEl.textContent = data.weather[0].description;

  const iconContainer = cE("div");
  iconContainer.className = "weatherIcon";
  const iconEl = cE("img");
  iconEl.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  iconEl.alt = "weather Icon";

  const humiditySimbol = cE("img");
  humiditySimbol.src = "./img/humidity.png";
  const humidityValue = cE("p");
  humidityValue.textContent = data.main.humidity + "%";

  const windSimbol = cE("img");
  windSimbol.src = "./img/wind.png";
  const windValue = cE("p");
  windValue.textContent = data.wind.speed + "m/s";

  secondRowContainer.append(
    humiditySimbol,
    humidityValue,
    windSimbol,
    windValue
  );
  iconContainer.append(iconEl);
  leftInfoBox.append(degreeEl, cityNameEl, cityWeatherDescriptionEl);
  firstRowContainer.append(leftInfoBox, iconContainer);
  div.append(firstRowContainer, secondRowContainer);
};

const formatDate = (num = 0, date = new Date()) => {
  const years = date.getFullYear();
  const days = date.getDate() + num;
  if (date.getMonth() < 10) {
    const months = "0" + (date.getMonth() + 1);
    return years + "-" + months + "-" + days;
  } else {
    const months = date.getMonth() + 1;
    return years + "-" + months + "-" + days;
  }
};

const deleteCard = (data) => {
  const cardEls = document.querySelectorAll(data);
  cardEls.forEach((users) => users.remove());
};

const miniCardCreator = (data) => {
  const wrapperEl = cE("div");
  wrapperEl.className = "mini_CardContainer";
  const miniCard = cE("div");
  miniCard.className = "mini_Card";

  const imgEl = cE("img");
  imgEl.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  imgEl.alt = "weather Icon";

  const containerEl = cE("div");

  const cityName = cE("h4");
  const degreeEl = cE("p");
  degreeEl.textContent = Math.floor(data.main.temp) + "°";

  switch (data.name) {
    case "Palermo":
      cityName.textContent = "PA";
      break;
    case "Messina":
      cityName.textContent = "ME";
      break;
    case "Trapani":
      cityName.textContent = "TP";
      break;
    case "Syracuse":
      cityName.textContent = "SR";
      break;
    case "Ragusa":
      cityName.textContent = "RG";
      break;
    case "Caltanissetta":
      cityName.textContent = "CL";
      break;
    case "Enna":
      cityName.textContent = "EN";
      break;
    case "Agrigento":
      cityName.textContent = "AG";
      break;
    case "Catania":
      cityName.textContent = "CT";
      break;
  }

  containerEl.append(cityName, degreeEl);
  miniCard.append(imgEl, containerEl);
  wrapperEl.append(miniCard);
  miniCardSection.appendChild(wrapperEl);
};

export {
  qS,
  qSA,
  cE,
  createResultContainer,
  hourCardCreator,
  formatDate,
  forcastCardCreator,
  resumeCardCreator,
  miniCardCreator,
};
