const axios = require('axios');

const {transform, prettyPrint} = require('camaro');
const { response } = require('express');

// const Pool = require('pg').Pool;

// const pool = new Pool ({
//     user: 'postgres',
//     password: 'Q2werty',
//     host: 'localhost',
//     database: 'smarthome',
//     port: 5432,
// });

class WeatherObservationTimeValuePair {
    constructor(place, parameterCode, parameterName) {
        this.place = place;
        this.parameterCode = parameterCode;
        this.parameterName = parameterName;

        this.url= 'https://opendata.fmi.fi/wfs/fin?service=WFS&version=2.0.0&request=getFeature&storedquery_id=fmi::observations::weather::timevaluepair&place=' 
        + place +
        '&parameters=' + parameterCode;

        this.WFSPath = 
        'wfs:FeatureCollection/wfs:member/omso:PointTimeSeriesObservation/om:result/wml2:MeasurementTimeseries/wml2:point/wml2:MeasurementTVP';
        
        
        let names = {timeStamp:'wml2:time', value:'number(wml2:value)'};

        names[this.parameterName] = names['value'];
        delete names['value']

        this.xmlTemplate = [
            this.WFSPath, names,
        ];

        this.axiosConfig = {
            method : 'get',
            maxBodyLength: 'infinity',
            url:this.url,
            headers: {}
        };

        }

        getFMIDataAsXML() {
            axios.request(this.axiosConfig).then((response) => {
                console.log(response.data)
            })
        }
        
        readConvertToArray() {
            axios.request(this.axiosConfig).then((response) => {
                transform(response.data, this.xmlTemplate).then((result) => {
                    console.log(result)
                    return result
                })
            })
        }

        putTimeValuePairsToDb() {

            //let tableName = this.parameterName + '_observation';

            //const sqlClause = 'INSERT INTO public.' + tableName + ' VALUES ($1, $2, $3) ON CONFLICT DO NOTHING RETURNING *';

            axios
                .request(this.axiosConfig)
                .then((response) => {
                    transform(response.data, this.xmlTemplate)
                        .then((result) => {
                        result.forEach((element) => {
                            let values = [element.timeStamp, element[this.parameterName], this.place]

                            console.log(values)

                            // const runQuery = async () => {
                            //     let resultset = await pool.query(sqlClause, values);
                            //     return resultset;
                            // }
                            
                            /* runQuery().then((resultset) => {
                                let message = ''
                            
                                if (resultset.rows[0] != undefined) {
                                    message = 'Added a row' // The message when not undefined
                                }
                                else {
                                message = 'Skipped an existing row' // The message when undefined
                                }
                
                            // Log the result of insert operation
                                console.log(message);

                            }) */
                    })
                })

                .catch((error) => {                    
                    console.log(error);
                });

            });

        };
}
const timeValuePair = new WeatherObservationTimeValuePair('Raahe', 't2m', 'temperature');
console.log(timeValuePair.url);
console.log(timeValuePair.xmlTemplate);
timeValuePair.putTimeValuePairsToDb()
