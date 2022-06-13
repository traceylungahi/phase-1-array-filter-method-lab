const findMatching = (drivers, string) => {
    return drivers.filter(function(newDrivers){
        return newDrivers.toLowerCase() === string.toLowerCase()
    });
}
const fuzzyMatch = (drivers, string) => {
    return drivers. filter(function(newDrivers){
        return newDrivers.slice(0, 1) === string.slice(0, 1)
    });
}
const matchName = (drivers, string) => {
    return drivers.filter(function(newDrivers){
        return newDrivers.name === string
    });
}
    