const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = "83e725b2c7b0bae73006a1404d939753";

const getFlagUrl = (countryCode) =>
  `https://flagcdn.com/w80/${countryCode.toLocaleLowerCase()}.png`;

const getWeather = async (city) => {
  try {
    const response = await fetch(
      `${baseUrl}?q=${city}&units=metric&appid=${apiKey}&lang=en`
    );

    const weatherData = await response.json();

    if (!response.ok) {
      throw new Error("Aratılan şehir bulunamadı");
    }

    return weatherData;
  } catch (error) {
    throw error;
  }
};

export { getWeather, getFlagUrl };
