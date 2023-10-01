
const CrimeMeter = () => {
    const origin = {
        lat: 31.544256,
        lng: 74.349402
    }

    function getTheDate() {
        var currentdate = new Date();
        var datetime = {
            year: currentdate.getFullYear(),
            month: (currentdate.getMonth() + 1),
            day: currentdate.getDate(),
            hour: currentdate.getHours(),
            minute: currentdate.getMinutes(),
            second: currentdate.getSeconds()
        }
        return datetime
    }

    let lat = 31.544256;
    let lon = 74.349402;
    let date = getTheDate();
    let iniYear = date.year - 1;
    let endYear = date.year;
    let iniEndMonth = date.month.toString();
    if (iniEndMonth.length < 2) {
        iniEndMonth = "0" + iniEndMonth;
    }
    let iniEndDay = date.day.toString();
    if (iniEndDay.length < 2) {
        iniEndDay = "0" + iniEndDay;
    }


    

}

export default CrimeMeter;