class City {
    constructor(name, latitude, longitude, population) {
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.population = population;
    }
    show = () => {
        return `${this.name}, ${this.latitude}, ${this.longitude}, ${this.population}`
    }
    movedIn = (people) => {
        return (
        this.population = (this.population + Number(people))
        )}
    movedOut = (people) => {
        if (people < this.population) {
            return (this.population = (this.population - Number(people)))
        }
        else {
            return (this.population = 0)
        }
    }
    howBig = () => {
        if (this.population > 100000) {
            return "City";
        }
        else if (this.population > 20000) {
            return "Large Town";
        }
        else if (this.population > 1000) {
            return "Town";
        }
        else if (this.population > 100) {
            return "Village";
        }
        else {
            return "Hamlet";
        }
    }
}

export default City;