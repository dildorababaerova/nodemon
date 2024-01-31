// EXAMPLE FOR TIME-VALUE-PAIRS FROM XML

const fs = require('fs');

const { transform, prettyPrint } = require('camaro');

const xml2objectArray = async (xmlData, template) => {
    const result = await transform(xmlData, template);
    return result
}


const xmlTemperatureData=fs.readFileSync('temperature.xml').toString();
const xmlWindData =fs.readFileSync('windSpeed.xml').toString();



const timeTemplate1 = ['wfs:FeatureCollection/wfs:member/omso:PointTimeSeriesObservation/om:result/wml2:MeasurementTimeseries/wml2:point/wml2:MeasurementTVP',
{
    timeStamp: 'wml2:time',
    temperature: 'wml2:value'
}];




xml2objectArray(xmlTemperatureData, timeTemplate1).then(result => {
    weatherData = result

    console.log(weatherData)
})


const windTemplate = ['wfs:FeatureCollection/wfs:member/omso:PointTimeSeriesObservation/om:result/wml2:MeasurementTimeseries/wml2:point/wml2:MeasurementTVP',
{
    timeStamp: 'wml2:time',
    windSpeed: 'wml2:value'
}];




xml2objectArray(xmlWindData, windTemplate).then(result => {
    weatherDataWind = result

    console.log(weatherDataWind)
})
