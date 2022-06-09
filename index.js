const findMatching = (drivers, string) => {
    const newDriver = [];
    for(const name of drivers) {
        if(name === string || name.toLowerCase() === string.toLowerCase()) {
            newDriver.push(name)
        } 
    } 
    return newDriver;
}
const fuzzyMatch = (drivers, strings) => { 
    const driver = [];
    for(const name of drivers) {
        if(name.slice(0, 1) === strings.slice(0, 1)) {
            driver.push(name)
        }
    }
    return driver;
}    
const matchName = (drivers, string) => {
    const newName = [];
    for(const name of drivers) {
        if(name.name === string || name.hometown === string) {
        if(name.name.toLowerCase() === string.toLowerCase() || name.hometown.toLowerCase() === string.toLowerCase()) {
            newName.push(name)
        }  
        }
    }
    return newName;
}
