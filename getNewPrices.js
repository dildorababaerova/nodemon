const axios = require('axios');
const { transform, prettyPrint } = require('camaro');

// A class for creating various weather objects containing URL and template
class WeatherObservationTimeValuePair {
  constructor(place, parameterCode, parameterName) {
    this.place = place;
    this.parameterCode = parameterCode;
    this.parameterName = parameterName
   
    // Creates an URL combining predefined query and place and parametercode like t2m (temperature)
    this.url =
      'https://opendata.fmi.fi/wfs/fin?service=WFS&version=2.0.0&request=GetFeature&storedquery_id=fmi::observations::weather::timevaluepair&place=' +
      place +
      '&parameters=' +
      parameterCode;

    // Constant XML path to the begining of time-value-pairs
    this.WFSPath =
      'wfs:FeatureCollection/wfs:member/omso:PointTimeSeriesObservation/om:result/wml2:MeasurementTimeseries/wml2:point/wml2:MeasurementTVP';
    
    // Names for the columns of the resultset
    let names = { timeStamp: 'wml2:time', value: 'number(wml2:value)' };

    // Change the name of the key value to the given parameter name
    names[this.parameterName] = names['value']
    delete names['value'] // Must be removed

    // Create a template for Camaro transformations
    this.xmlTemplate = [
      this.WFSPath,
      names,
    ];

    this.axiosConfig = {
        method: 'get',
        maxBodyLength: 'infinity',
        url: this.url,
        headers: {},
      };
  }
  
  // A method to test that weather data is available in a correct form
  getFMIDataAsXML() {
    axios.request(this.axiosConfig).then((response) => {
        console.log(response.data)
  })
}}

// FUNCTIONS TO GET AND PARSE FMI DATA
// -----------------------------------

/**
 * Async function to convert XML data to an array of JS-objects
 * @summary Returns an array of JS-objects from given XML according to a template
 * @param {str} xmlData The xml string to be converted
 * @param {[obj]} template instruction how to convert containing structure and tags
 * @return {[obj]} JS-objects containing element names and values in correct datatype
 */
const xml2objectArray = async (xmlData, template) => {
  const result = await transform(xmlData, template);
  return result;
};

// This function combines fething and transforming
const getTimeValuePairs = (place, url, template) => {
  axiosConfig.url = url; // Set the Axios URL
  axios
    .request(axiosConfig) // Make the request
    .then((response) => {
      // If promise has been fulfilled convert data to an array
      // XML is in the data portion (ie. body) of the response
      xml2objectArray(response.data, template)
        .then((result) => {
          // Loop the array and insert values into table
          result.forEach((element) => {
            let values = [place, element.timeStamp, element.temperature];
            console.log(values);
          });
        })

        .catch((error) => {
          // if rejected handle the error
          console.log(error);
        });
    });
};

// And a quick test for the function
getTimeValuePairs('Turku', temperatureUrl, temperatureTemplate);
