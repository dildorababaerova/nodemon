const { transform, prettyPrint } = require('camaro');
// Define an asyncroneous function for creating JS-objects from xml data
// Uses xml string and template as arguments, returns an array of JS-objects

class WeatherObject {
    constructor(temperature, windSpeed, windDirection) {
      this.temperature = temperature;
      this.windSpeed = windSpeed;
      this.windDirection = windDirection;
    }
  }


const xmlData=`

<?xml version="1.0" encoding="UTF-8"?>
<wfs:FeatureCollection
  timeStamp="2024-01-19T11:51:38Z"
  numberMatched="1"
  numberReturned="1"
  xmlns:wfs="http://www.opengis.net/wfs/2.0"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"

  xmlns:xlink="http://www.w3.org/1999/xlink"
  xmlns:om="http://www.opengis.net/om/2.0"
  xmlns:ompr="http://inspire.ec.europa.eu/schemas/ompr/3.0"
  xmlns:omso="http://inspire.ec.europa.eu/schemas/omso/3.0"
  xmlns:gml="http://www.opengis.net/gml/3.2"
  xmlns:gmd="http://www.isotc211.org/2005/gmd"
  xmlns:gco="http://www.isotc211.org/2005/gco"
  xmlns:swe="http://www.opengis.net/swe/2.0"
  xmlns:gmlcov="http://www.opengis.net/gmlcov/1.0"
  xmlns:sam="http://www.opengis.net/sampling/2.0"
  xmlns:sams="http://www.opengis.net/samplingSpatial/2.0"
  xmlns:target="http://xml.fmi.fi/namespace/om/atmosphericfeatures/1.1"
  xsi:schemaLocation="http://www.opengis.net/wfs/2.0 http://schemas.opengis.net/wfs/2.0/wfs.xsd
  http://www.opengis.net/gmlcov/1.0 http://schemas.opengis.net/gmlcov/1.0/gmlcovAll.xsd
  http://www.opengis.net/sampling/2.0 http://schemas.opengis.net/sampling/2.0/samplingFeature.xsd
  http://www.opengis.net/samplingSpatial/2.0 http://schemas.opengis.net/samplingSpatial/2.0/spatialSamplingFeature.xsd
  http://www.opengis.net/swe/2.0 http://schemas.opengis.net/sweCommon/2.0/swe.xsd
  http://inspire.ec.europa.eu/schemas/ompr/3.0 https://inspire.ec.europa.eu/schemas/ompr/3.0/Processes.xsd
  http://inspire.ec.europa.eu/schemas/omso/3.0 https://inspire.ec.europa.eu/schemas/omso/3.0/SpecialisedObservations.xsd
  http://xml.fmi.fi/namespace/om/atmosphericfeatures/1.1 https://xml.fmi.fi/schema/om/atmosphericfeatures/1.1/atmosphericfeatures.xsd">
    <wfs:member>
        <omso:GridSeriesObservation gml:id="WFS-Bq3qQgbH4XIK28ZbGW3_VzFfD4yJTowtoWbbpdOt.Lnl5dsPTTv3c3Trvlw9NGXk6daN_Xls8unW3rs6aeG_Tu6Y9_bLyw58sLSxZc.ndU07ctqj.FCycNZoTGx8udakWhTjunTRk1cM7LuyVNO3Lao_hQs3DWaEzteXz338slTo15fPffyyX9_bLy78tPTDi2ZYmZsw9MvPpEzNm_Hh2Za1M2m_GkruvTM4a23D4iaefTDux5aVq6EBpbcPiLw349HOcFUcxvbcvTLvoYeWHbl6ZeXOtqvp3ZImnllx9NO_dWtX07slPhly5JtOtapl28MvLD068srW26efPTuz1MvjpWNOwzm1u67Z.an0w9NO_dznCZnDZhx5edZXTry19Wtx64dmnp5k7s2.Jrc.mHpp37qnnhlrc38Mu7Jh6Yb.TDp2eW5z6b.WXJx65eXm_pyV2hZtul0634ueXl2w9NO_dzdOu.XD00ZeTp1o39eWzy6dbeuzpp4b9O7pj39svLDnytDpp25afTLwmaHTTty2t.7LWNVqQwA-">
            <om:phenomenonTime>
                <gml:TimePeriod gml:id="time1-1-1">
                    <gml:beginPosition>2024-01-18T11:00:00Z</gml:beginPosition>
                    <gml:endPosition>2024-01-19T11:00:00Z</gml:endPosition>
                </gml:TimePeriod>
            </om:phenomenonTime>
            <om:resultTime>
                <gml:TimeInstant gml:id="time2-1-1">
                    <gml:timePosition>2024-01-19T11:00:00Z</gml:timePosition>
                </gml:TimeInstant>
            </om:resultTime>
            <om:procedure xlink:href="http://xml.fmi.fi/inspire/process/opendata_daily"/>
            <om:parameter>
                <om:NamedValue>
                    <om:name xlink:href="https://inspire.ec.europa.eu/codeList/ProcessParameterValue/value/groundObservation/observationIntent"/>
                    <om:value>
			atmosphere
                    </om:value>
                </om:NamedValue>
            </om:parameter>
            <om:observedProperty  xlink:href="https://opendata.fmi.fi/meta?observableProperty=observation&amp;param=WindDirection,WindSpeedMS,Temperature&amp;language=eng"/>
            <om:featureOfInterest>
                <sams:SF_SpatialSamplingFeature gml:id="sampling-feature-1-1-fmisid">
                    <sam:sampledFeature>
                        <target:LocationCollection gml:id="sampled-target-1-1">
                            <target:member>
                                <target:Location gml:id="obsloc-fmisid-100949-pos">
                                    <gml:identifier codeSpace="http://xml.fmi.fi/namespace/stationcode/fmisid">100949</gml:identifier>
                                    <gml:name codeSpace="http://xml.fmi.fi/namespace/locationcode/name">Turku Artukainen</gml:name>
                                    <gml:name codeSpace="http://xml.fmi.fi/namespace/locationcode/geoid">-16000132</gml:name>
                                    <gml:name codeSpace="http://xml.fmi.fi/namespace/locationcode/wmo">2773</gml:name>
                                    <target:representativePoint xlink:href="#point-100949"/>
                                    <target:region codeSpace="http://xml.fmi.fi/namespace/location/region">Turku</target:region>
                                </target:Location>
                            </target:member>
                        </target:LocationCollection>
                    </sam:sampledFeature>
                    <sams:shape>
                        <gml:MultiPoint gml:id="mp-1-1-fmisid">
                            <gml:pointMember>
                                <gml:Point gml:id="point-100949" srsName="http://www.opengis.net/def/crs/EPSG/0/4258" srsDimension="2">
                                    <gml:name>Turku Artukainen</gml:name>
                                    <gml:pos>60.45439 22.17870 </gml:pos>
                                </gml:Point>
                            </gml:pointMember>
                        </gml:MultiPoint>
                    </sams:shape>
                </sams:SF_SpatialSamplingFeature>
            </om:featureOfInterest>
            <om:result>
                <gmlcov:MultiPointCoverage gml:id="mpcv1-1-1">
                    <gml:domainSet>
                        <gmlcov:SimpleMultiPoint gml:id="mp1-1-1" srsName="http://xml.fmi.fi/gml/crs/compoundCRS.php?crs=4258&amp;time=unixtime" srsDimension="3">
                            <gmlcov:positions>
                60.45439 22.17870  1705575600
                60.45439 22.17870  1705576200
                60.45439 22.17870  1705576800
                60.45439 22.17870  1705577400
                60.45439 22.17870  1705578000
                60.45439 22.17870  1705578600
                60.45439 22.17870  1705579200
                60.45439 22.17870  1705579800
                60.45439 22.17870  1705580400
                60.45439 22.17870  1705581000
                60.45439 22.17870  1705581600
                60.45439 22.17870  1705582200
                60.45439 22.17870  1705582800
                60.45439 22.17870  1705583400
                60.45439 22.17870  1705584000
                60.45439 22.17870  1705584600
                60.45439 22.17870  1705585200
                60.45439 22.17870  1705585800
                60.45439 22.17870  1705586400
                60.45439 22.17870  1705587000
                60.45439 22.17870  1705587600
                60.45439 22.17870  1705588200
                60.45439 22.17870  1705588800
                60.45439 22.17870  1705589400
                60.45439 22.17870  1705590000
                60.45439 22.17870  1705590600
                60.45439 22.17870  1705591200
                60.45439 22.17870  1705591800
                60.45439 22.17870  1705592400
                60.45439 22.17870  1705593000
                60.45439 22.17870  1705593600
                60.45439 22.17870  1705594200
                60.45439 22.17870  1705594800
                60.45439 22.17870  1705595400
                60.45439 22.17870  1705596000
                60.45439 22.17870  1705596600
                60.45439 22.17870  1705597200
                60.45439 22.17870  1705597800
                60.45439 22.17870  1705598400
                60.45439 22.17870  1705599000
                60.45439 22.17870  1705599600
                60.45439 22.17870  1705600200
                60.45439 22.17870  1705600800
                60.45439 22.17870  1705601400
                60.45439 22.17870  1705602000
                60.45439 22.17870  1705602600
                60.45439 22.17870  1705603200
                60.45439 22.17870  1705603800
                60.45439 22.17870  1705604400
                60.45439 22.17870  1705605000
                60.45439 22.17870  1705605600
                60.45439 22.17870  1705606200
                60.45439 22.17870  1705606800
                60.45439 22.17870  1705607400
                60.45439 22.17870  1705608000
                60.45439 22.17870  1705608600
                60.45439 22.17870  1705609200
                60.45439 22.17870  1705609800
                60.45439 22.17870  1705610400
                60.45439 22.17870  1705611000
                60.45439 22.17870  1705611600
                60.45439 22.17870  1705612200
                60.45439 22.17870  1705612800
                60.45439 22.17870  1705613400
                60.45439 22.17870  1705614000
                60.45439 22.17870  1705614600
                60.45439 22.17870  1705615200
                60.45439 22.17870  1705615800
                60.45439 22.17870  1705616400
                60.45439 22.17870  1705617000
                60.45439 22.17870  1705617600
                60.45439 22.17870  1705618200
                60.45439 22.17870  1705618800
                60.45439 22.17870  1705619400
                60.45439 22.17870  1705620000
                60.45439 22.17870  1705620600
                60.45439 22.17870  1705621200
                60.45439 22.17870  1705621800
                60.45439 22.17870  1705622400
                60.45439 22.17870  1705623000
                60.45439 22.17870  1705623600
                60.45439 22.17870  1705624200
                60.45439 22.17870  1705624800
                60.45439 22.17870  1705625400
                60.45439 22.17870  1705626000
                60.45439 22.17870  1705626600
                60.45439 22.17870  1705627200
                60.45439 22.17870  1705627800
                60.45439 22.17870  1705628400
                60.45439 22.17870  1705629000
                60.45439 22.17870  1705629600
                60.45439 22.17870  1705630200
                60.45439 22.17870  1705630800
                60.45439 22.17870  1705631400
                60.45439 22.17870  1705632000
                60.45439 22.17870  1705632600
                60.45439 22.17870  1705633200
                60.45439 22.17870  1705633800
                60.45439 22.17870  1705634400
                60.45439 22.17870  1705635000
                60.45439 22.17870  1705635600
                60.45439 22.17870  1705636200
                60.45439 22.17870  1705636800
                60.45439 22.17870  1705637400
                60.45439 22.17870  1705638000
                60.45439 22.17870  1705638600
                60.45439 22.17870  1705639200
                60.45439 22.17870  1705639800
                60.45439 22.17870  1705640400
                60.45439 22.17870  1705641000
                60.45439 22.17870  1705641600
                60.45439 22.17870  1705642200
                60.45439 22.17870  1705642800
                60.45439 22.17870  1705643400
                60.45439 22.17870  1705644000
                60.45439 22.17870  1705644600
                60.45439 22.17870  1705645200
                60.45439 22.17870  1705645800
                60.45439 22.17870  1705646400
                60.45439 22.17870  1705647000
                60.45439 22.17870  1705647600
                60.45439 22.17870  1705648200
                60.45439 22.17870  1705648800
                60.45439 22.17870  1705649400
                60.45439 22.17870  1705650000
                60.45439 22.17870  1705650600
                60.45439 22.17870  1705651200
                60.45439 22.17870  1705651800
                60.45439 22.17870  1705652400
                60.45439 22.17870  1705653000
                60.45439 22.17870  1705653600
                60.45439 22.17870  1705654200
                60.45439 22.17870  1705654800
                60.45439 22.17870  1705655400
                60.45439 22.17870  1705656000
                60.45439 22.17870  1705656600
                60.45439 22.17870  1705657200
                60.45439 22.17870  1705657800
                60.45439 22.17870  1705658400
                60.45439 22.17870  1705659000
                60.45439 22.17870  1705659600
                60.45439 22.17870  1705660200
                60.45439 22.17870  1705660800
                60.45439 22.17870  1705661400
                60.45439 22.17870  1705662000
                </gmlcov:positions>
                        </gmlcov:SimpleMultiPoint>
                    </gml:domainSet>
                    <gml:rangeSet>
                        <gml:DataBlock>
                            <gml:rangeParameters/>
                            <gml:doubleOrNilReasonTupleList>
                179.0 1.5 -2.6 
                162.0 1.5 -2.6 
                146.0 1.6 -3.0 
                162.0 1.8 -3.0 
                158.0 1.4 -2.6 
                152.0 1.8 -2.4 
                160.0 1.6 -2.4 
                154.0 1.7 -2.4 
                177.0 2.1 -2.4 
                201.0 3.0 -2.4 
                231.0 3.4 -2.8 
                247.0 3.8 -3.1 
                242.0 2.8 -3.2 
                248.0 2.5 -3.4 
                243.0 3.0 -3.5 
                251.0 2.9 -3.7 
                254.0 3.5 -3.8 
                247.0 3.5 -4.0 
                257.0 3.4 -4.1 
                267.0 3.0 -4.2 
                244.0 2.9 -4.3 
                251.0 2.4 -4.4 
                244.0 2.8 -4.4 
                245.0 2.5 -4.4 
                227.0 2.5 -4.6 
                236.0 2.1 -4.7 
                234.0 2.1 -4.7 
                230.0 2.2 -4.8 
                239.0 2.1 -5.0 
                255.0 2.2 -5.1 
                248.0 2.3 -5.2 
                244.0 2.3 -5.2 
                247.0 1.9 -5.3 
                239.0 2.2 -5.2 
                248.0 2.7 -5.3 
                246.0 3.1 -5.3 
                249.0 3.2 -5.5 
                249.0 3.1 -5.6 
                241.0 2.5 -5.6 
                248.0 2.9 -5.7 
                236.0 2.8 -5.8 
                250.0 2.9 -5.9 
                254.0 3.0 -6.1 
                251.0 3.1 -6.2 
                246.0 2.8 -6.4 
                239.0 3.0 -6.5 
                241.0 3.4 -6.6 
                237.0 2.7 -6.6 
                238.0 2.9 -6.7 
                234.0 2.5 -6.7 
                241.0 3.0 -6.7 
                233.0 2.5 -6.8 
                231.0 2.0 -6.7 
                225.0 2.3 -6.6 
                195.0 1.5 -6.8 
                214.0 1.6 -6.7 
                209.0 1.8 -6.7 
                216.0 2.1 -6.7 
                230.0 1.8 -6.7 
                247.0 2.5 -6.6 
                245.0 3.1 -6.7 
                247.0 2.9 -6.4 
                267.0 2.8 -6.1 
                271.0 3.0 -5.7 
                284.0 3.0 -5.5 
                292.0 3.1 -5.3 
                281.0 2.8 -5.1 
                282.0 3.6 -4.9 
                292.0 3.6 -4.8 
                271.0 3.5 -4.8 
                275.0 4.7 -4.9 
                287.0 4.4 -5.0 
                283.0 4.4 -5.0 
                287.0 4.0 -5.1 
                284.0 4.3 -5.2 
                273.0 3.9 -5.3 
                267.0 4.0 -5.4 
                276.0 5.0 -5.6 
                277.0 4.8 -5.6 
                278.0 5.6 -5.7 
                270.0 4.1 -5.7 
                262.0 4.3 -5.8 
                269.0 4.6 -5.9 
                269.0 5.1 -6.1 
                265.0 4.8 -6.2 
                266.0 4.9 -6.2 
                256.0 4.5 -6.3 
                254.0 4.2 -6.3 
                253.0 4.6 -6.6 
                263.0 5.6 -6.6 
                261.0 4.3 -6.6 
                266.0 4.4 -6.6 
                241.0 4.0 -6.7 
                256.0 4.6 -6.9 
                254.0 4.3 -7.0 
                254.0 5.1 -7.0 
                252.0 4.5 -7.0 
                252.0 5.1 -7.1 
                253.0 5.4 -7.3 
                256.0 5.1 -7.3 
                257.0 5.0 -7.3 
                251.0 4.0 -7.4 
                259.0 4.5 -7.4 
                256.0 4.5 -7.3 
                255.0 3.9 -7.4 
                260.0 4.8 -7.4 
                246.0 4.1 -7.4 
                246.0 3.7 -7.4 
                242.0 3.9 -7.5 
                249.0 3.9 -7.6 
                246.0 4.4 -7.6 
                247.0 4.3 -7.5 
                247.0 3.3 -7.6 
                242.0 3.6 -7.5 
                247.0 3.3 -7.6 
                249.0 3.5 -7.6 
                241.0 2.9 -7.7 
                250.0 3.3 -7.7 
                248.0 3.1 -7.6 
                246.0 3.7 -7.6 
                246.0 3.0 -7.6 
                239.0 3.0 -7.6 
                244.0 2.7 -7.6 
                236.0 2.6 -7.6 
                229.0 2.4 -7.7 
                241.0 2.4 -7.7 
                241.0 2.4 -7.6 
                237.0 1.8 -7.6 
                233.0 1.9 -7.5 
                248.0 1.9 -7.4 
                252.0 1.8 -7.3 
                244.0 2.3 -7.1 
                274.0 2.2 -7.2 
                271.0 2.9 -7.1 
                277.0 2.7 -7.2 
                274.0 2.8 -7.2 
                274.0 2.7 -7.2 
                286.0 3.2 -7.1 
                278.0 2.5 -7.1 
                277.0 2.3 -6.9 
                277.0 2.4 -6.9 
                280.0 2.7 -7.0 
                276.0 2.8 -7.1 
                272.0 2.6 -7.1 
                278.0 2.9 -7.2 
                </gml:doubleOrNilReasonTupleList>
                        </gml:DataBlock>
                    </gml:rangeSet>
                    <gml:coverageFunction>
                        <gml:CoverageMappingRule>
                            <gml:ruleDefinition>Linear</gml:ruleDefinition>
                        </gml:CoverageMappingRule>
                    </gml:coverageFunction>
                    <gmlcov:rangeType>
                        <swe:DataRecord>
                            <swe:field name="WindDirection"  xlink:href="https://opendata.fmi.fi/meta?observableProperty=observation&amp;param=WindDirection&amp;language=eng"/>
                            <swe:field name="WindSpeedMS"  xlink:href="https://opendata.fmi.fi/meta?observableProperty=observation&amp;param=WindSpeedMS&amp;language=eng"/>
                            <swe:field name="Temperature"  xlink:href="https://opendata.fmi.fi/meta?observableProperty=observation&amp;param=Temperature&amp;language=eng"/>
                        </swe:DataRecord>
                    </gmlcov:rangeType>
                </gmlcov:MultiPointCoverage>
            </om:result>
        </omso:GridSeriesObservation>
    </wfs:member>
</wfs:FeatureCollection>


`


const dataTemplate = ['wfs:FeatureCollection/wfs:member/omso:GridSeriesObservation/om:result/gmlcov:MultiPointCoverage/gml:rangeSet',
{
    data: 'gml:DataBlock/gml:doubleOrNilReasonTupleList'
}];



const xml2objectArray = async (xmlData, dataTemplate) => {
    const result = await transform(xmlData, dataTemplate);
    return  result
}


xml2objectArray(xmlData, dataTemplate).then(result => {
    weatherData = result
    weatherString = weatherData[0].data
    const cutMark1 = '\n';
    const cutMark2 = ' ';
    const weatherDataRows = weatherString.split(cutMark1)

    
    const weatherDataValue = weatherDataRows.map(element => {
        const trimmedElement = element.trim();
        const elementValues = trimmedElement.split(cutMark2)
        
        return {
            temperature : elementValues[2],
            windSpeed : elementValues[1],
            windDirection : elementValues[0]
        }
    
    })

    weatherDataValue.shift()
    weatherDataValue.pop()

    
    
    

    console.log(weatherDataValue)     
    });









    








// Call the function, get results and then log then to the console
// xml2objectArray(xmlData, dataTemplate).then(result => {
//     console.log(result)

// })

// const timeTemplate = ['wfs:FeatureCollection/wfs:member/omso:GridSeriesObservation/om:result/gmlcov:MultiPointCoverage/gml:domainSet/gmlcov:SimpleMultiPoint',
// {
//     data: 'gmlcov:positions'
// }];


// // const xml2objectArray = async (xmlData, template2) => {
// //         const result = await transform(xmlData, template2);
// //          return result
// //      }



// Call the function, get results and then log then to the console
// xml2objectArray(xmlData, timeTemplate).then(result => {
//     console.log(result)
// })






