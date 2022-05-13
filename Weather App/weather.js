class Weather{
    constructor(){
        this.lat = 40;
        this.lng = -73;
        this.api_key = '87af907b9261888722165c80e6cff472';
    }

    async getWeather(city){
        const weatherResponse = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.api_key}`);
        //const weatherResponse = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lng}&appid=${this.api_key}`);
        const weather = (await weatherResponse).json();
   
        return weather;
    }

}
