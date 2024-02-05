// A class for creating various weather objects containing URL and template
const axios = require('axios');

const {transform, prettyPrint} = require('camaro');


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

    const xml2objectArray = async (xmlData, template) => {
      const result = await transform(xmlData, template);
      return result;
    };

    this.axiosConfig = {
        method: 'get',
        maxBodyLength: 'infinity',
        url: this.url,
        headers: {},
      };
  }

    

      axios.request(this.axiosConfig).then((response) => {
        xml2objectArray(response.data, this.xmlTemplate)
        .then((result) =>{
          result.forEach((element) => {
            let values = []
            
          });
        }
        )
      }

      )

    }

}
  
  




  