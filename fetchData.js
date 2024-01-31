const axios = require('axios');
const {transform, prettyPrint} = require('camaro');

// this.url= 'https://opendata.fmi.fi/wfs/fin?service=WFS&version=2.0.0&request=getFeature&storedquery_id=fmi::observations::weather::timevaluepair&place=' 
// + place +
// '&parameters=' + parameterCode;

xmlTemplate = [
'wfs:FeatureCollection/wfs:member/omso:PointTimeSeriesObservation/om:result/wml2:MeasurementTimeseries/wml2:point/wml2:MeasurementTVP',
{
  timeStamp:'wml2:time', 
  value:'number(wml2:value)'
}
]


let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://opendata.fmi.fi/wfs/fin?service=WFS&version=2.0.0&request=getFeature&storedquery_id=fmi::observations::weather::timevaluepair&place=Raahe&parameters=t2m&',
  headers: { }
};

axios.request(config)
.then((response) => {
  console.log(transform(response.data, xmlTemplate))
})
.catch((error) => {
  console.log(error);
});
