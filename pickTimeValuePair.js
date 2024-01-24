// EXAMPLE FOR TIME-VALUE-PAIRS FROM XML

const { transform, prettyPrint } = require('camaro');



const xmlData=`
<?xml version="1.0" encoding="UTF-8"?>
<wfs:FeatureCollection
    timeStamp="2024-01-24T14:27:56Z"
    numberMatched="1"
    numberReturned="1"
           xmlns:wfs="http://www.opengis.net/wfs/2.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:om="http://www.opengis.net/om/2.0"
        xmlns:ompr="http://inspire.ec.europa.eu/schemas/ompr/3.0"
        xmlns:omso="http://inspire.ec.europa.eu/schemas/omso/3.0"
        xmlns:gml="http://www.opengis.net/gml/3.2" xmlns:gmd="http://www.isotc211.org/2005/gmd"
        xmlns:gco="http://www.isotc211.org/2005/gco" xmlns:swe="http://www.opengis.net/swe/2.0"
        xmlns:gmlcov="http://www.opengis.net/gmlcov/1.0"
        xmlns:sam="http://www.opengis.net/sampling/2.0"
        xmlns:sams="http://www.opengis.net/samplingSpatial/2.0"
        xmlns:wml2="http://www.opengis.net/waterml/2.0"
	xmlns:target="http://xml.fmi.fi/namespace/om/atmosphericfeatures/1.1"
        xsi:schemaLocation="http://www.opengis.net/wfs/2.0 http://schemas.opengis.net/wfs/2.0/wfs.xsd
        http://www.opengis.net/gmlcov/1.0 http://schemas.opengis.net/gmlcov/1.0/gmlcovAll.xsd
        http://www.opengis.net/sampling/2.0 http://schemas.opengis.net/sampling/2.0/samplingFeature.xsd
        http://www.opengis.net/samplingSpatial/2.0 http://schemas.opengis.net/samplingSpatial/2.0/spatialSamplingFeature.xsd
        http://www.opengis.net/swe/2.0 http://schemas.opengis.net/sweCommon/2.0/swe.xsd
        http://inspire.ec.europa.eu/schemas/ompr/3.0 https://inspire.ec.europa.eu/schemas/ompr/3.0/Processes.xsd
        http://inspire.ec.europa.eu/schemas/omso/3.0 https://inspire.ec.europa.eu/schemas/omso/3.0/SpecialisedObservations.xsd
        http://www.opengis.net/waterml/2.0 http://schemas.opengis.net/waterml/2.0/waterml2.xsd
        http://xml.fmi.fi/namespace/om/atmosphericfeatures/1.1 https://xml.fmi.fi/schema/om/atmosphericfeatures/1.1/atmosphericfeatures.xsd">
    <wfs:member>
        <omso:PointTimeSeriesObservation gml:id="WFS-mpwhvlp2tDtnLIexrtr2schsMpaJTowqYWbbpdOt.Lnl5dsPTTv3c3Trvlw9NGXk6ddNO3L2w7OuXhh08oWliy59O6pp25bVH8KFw6Z0GNj5c61ItCnHdOmjJq4Z2XdkqaduW1R_ChcOnOUJnZtunnpyc6zGLBi3cNXRry.e._lkv7.2Xl35aemHFsyxMzZh6ZefSJmbN.PDsy1qZtN.NJXdemZw1tuHxE08.mHdjy0rV0IDS24fEXhvx6Oc4Mcze25emXfQw8sO3L0y8udY3Rlta23Tz56d2epl8dKxp2Gc2t3XbPzU.mHpp37uc4TW49cOzT08yd2bfE1ufTD00791Tzwy1ob.GXdkw9MLc59N_LLk49cvLzf05K0ws23S6db8XPLy7Yemnfu5unXfLh6aMvJ066aduXth2dcvDDp5NDpp25afTLwmaHTTty2t.7LWNVqQwA--">
            <om:phenomenonTime>
                <gml:TimePeriod  gml:id="time1-1-1">
                    <gml:beginPosition>2024-01-24T02:27:00Z</gml:beginPosition>
                    <gml:endPosition>2024-01-24T14:27:00Z</gml:endPosition>
                </gml:TimePeriod>
            </om:phenomenonTime>
            <om:resultTime>
                <gml:TimeInstant gml:id="time2-1-1">
                    <gml:timePosition>2024-01-24T14:27:00Z</gml:timePosition>
                </gml:TimeInstant>
            </om:resultTime>
            <om:procedure xlink:href="http://xml.fmi.fi/inspire/process/opendata"/>
            <om:parameter>
                <om:NamedValue>
                    <om:name xlink:href="https://inspire.ec.europa.eu/codeList/ProcessParameterValue/value/groundObservation/observationIntent"/>
                    <om:value>
			atmosphere
                    </om:value>
                </om:NamedValue>
            </om:parameter>
            <om:observedProperty  xlink:href="https://opendata.fmi.fi/meta?observableProperty=observation&amp;param=t2m&amp;language=fin"/>
            <om:featureOfInterest>
                <sams:SF_SpatialSamplingFeature gml:id="fi-1-1-t2m">
                    <sam:sampledFeature>
                        <target:LocationCollection gml:id="sampled-target-1-1-t2m">
                            <target:member>
                                <target:Location gml:id="obsloc-fmisid-101785-pos-t2m">
                                    <gml:identifier codeSpace="http://xml.fmi.fi/namespace/stationcode/fmisid">101785</gml:identifier>
                                    <gml:name codeSpace="http://xml.fmi.fi/namespace/locationcode/name">Raahe Lapaluoto satama</gml:name>
                                    <gml:name codeSpace="http://xml.fmi.fi/namespace/locationcode/geoid">-16000190</gml:name>
                                    <gml:name codeSpace="http://xml.fmi.fi/namespace/locationcode/wmo">2872</gml:name>
                                    <target:representativePoint xlink:href="#point-fmisid-101785-1-1-t2m"/>
                                    <target:region codeSpace="http://xml.fmi.fi/namespace/location/region">Raahe</target:region>
                                </target:Location>
                            </target:member>
                        </target:LocationCollection>
                    </sam:sampledFeature>
                    <sams:shape>
                        <gml:Point gml:id="point-fmisid-101785-1-1-t2m" srsName="http://www.opengis.net/def/crs/EPSG/0/4258" srsDimension="2">
                            <gml:name>Raahe Lapaluoto satama</gml:name>
                            <gml:pos>64.66589 24.40695 </gml:pos>
                        </gml:Point>
                    </sams:shape>
                </sams:SF_SpatialSamplingFeature>
            </om:featureOfInterest>
            <om:result>
                <wml2:MeasurementTimeseries gml:id="obs-obs-1-1-t2m">
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T02:30:00Z</wml2:time>
                            <wml2:value>-3.5</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T02:40:00Z</wml2:time>
                            <wml2:value>-3.6</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T02:50:00Z</wml2:time>
                            <wml2:value>-3.5</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T03:00:00Z</wml2:time>
                            <wml2:value>-3.6</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T03:10:00Z</wml2:time>
                            <wml2:value>-3.7</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T03:20:00Z</wml2:time>
                            <wml2:value>-3.8</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T03:30:00Z</wml2:time>
                            <wml2:value>-3.5</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T03:40:00Z</wml2:time>
                            <wml2:value>-3.8</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T03:50:00Z</wml2:time>
                            <wml2:value>-3.8</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T04:00:00Z</wml2:time>
                            <wml2:value>-3.4</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T04:10:00Z</wml2:time>
                            <wml2:value>-3.6</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T04:20:00Z</wml2:time>
                            <wml2:value>-3.9</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T04:30:00Z</wml2:time>
                            <wml2:value>-4.2</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T04:40:00Z</wml2:time>
                            <wml2:value>-4.2</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T04:50:00Z</wml2:time>
                            <wml2:value>-4.1</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T05:00:00Z</wml2:time>
                            <wml2:value>-3.8</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T05:10:00Z</wml2:time>
                            <wml2:value>-3.8</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T05:20:00Z</wml2:time>
                            <wml2:value>-3.9</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T05:30:00Z</wml2:time>
                            <wml2:value>-4.1</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T05:40:00Z</wml2:time>
                            <wml2:value>-4.1</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T05:50:00Z</wml2:time>
                            <wml2:value>-4.3</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T06:00:00Z</wml2:time>
                            <wml2:value>-4.3</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T06:10:00Z</wml2:time>
                            <wml2:value>-3.9</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T06:20:00Z</wml2:time>
                            <wml2:value>-3.9</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T06:30:00Z</wml2:time>
                            <wml2:value>-4.1</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T06:40:00Z</wml2:time>
                            <wml2:value>-4.1</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T06:50:00Z</wml2:time>
                            <wml2:value>-4.4</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T07:00:00Z</wml2:time>
                            <wml2:value>-4.4</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T07:10:00Z</wml2:time>
                            <wml2:value>-4.6</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T07:20:00Z</wml2:time>
                            <wml2:value>-4.7</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T07:30:00Z</wml2:time>
                            <wml2:value>-4.7</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T07:40:00Z</wml2:time>
                            <wml2:value>-4.7</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T07:50:00Z</wml2:time>
                            <wml2:value>-4.6</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T08:00:00Z</wml2:time>
                            <wml2:value>-4.6</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T08:10:00Z</wml2:time>
                            <wml2:value>-4.7</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T08:20:00Z</wml2:time>
                            <wml2:value>-4.8</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T08:30:00Z</wml2:time>
                            <wml2:value>-5.0</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T08:40:00Z</wml2:time>
                            <wml2:value>-5.0</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T08:50:00Z</wml2:time>
                            <wml2:value>-5.1</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T09:00:00Z</wml2:time>
                            <wml2:value>-5.3</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T09:10:00Z</wml2:time>
                            <wml2:value>-5.2</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T09:20:00Z</wml2:time>
                            <wml2:value>-5.3</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T09:30:00Z</wml2:time>
                            <wml2:value>-5.2</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T09:40:00Z</wml2:time>
                            <wml2:value>-5.1</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T09:50:00Z</wml2:time>
                            <wml2:value>-5.1</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T10:00:00Z</wml2:time>
                            <wml2:value>-4.9</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T10:10:00Z</wml2:time>
                            <wml2:value>-5.1</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T10:20:00Z</wml2:time>
                            <wml2:value>-5.5</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T10:30:00Z</wml2:time>
                            <wml2:value>-5.5</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T10:40:00Z</wml2:time>
                            <wml2:value>-5.3</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T10:50:00Z</wml2:time>
                            <wml2:value>-5.3</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T11:00:00Z</wml2:time>
                            <wml2:value>-5.2</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T11:10:00Z</wml2:time>
                            <wml2:value>-5.1</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T11:20:00Z</wml2:time>
                            <wml2:value>-5.1</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T11:30:00Z</wml2:time>
                            <wml2:value>-5.3</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T11:40:00Z</wml2:time>
                            <wml2:value>-5.2</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T11:50:00Z</wml2:time>
                            <wml2:value>-5.2</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T12:00:00Z</wml2:time>
                            <wml2:value>-5.6</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T12:10:00Z</wml2:time>
                            <wml2:value>-5.6</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T12:20:00Z</wml2:time>
                            <wml2:value>-5.6</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T12:30:00Z</wml2:time>
                            <wml2:value>-5.8</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T12:40:00Z</wml2:time>
                            <wml2:value>-5.8</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T12:50:00Z</wml2:time>
                            <wml2:value>-5.7</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T13:00:00Z</wml2:time>
                            <wml2:value>-5.6</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T13:10:00Z</wml2:time>
                            <wml2:value>-5.6</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T13:20:00Z</wml2:time>
                            <wml2:value>-5.7</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T13:30:00Z</wml2:time>
                            <wml2:value>-5.8</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T13:40:00Z</wml2:time>
                            <wml2:value>-6.0</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T13:50:00Z</wml2:time>
                            <wml2:value>-6.0</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T14:00:00Z</wml2:time>
                            <wml2:value>-6.0</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T14:10:00Z</wml2:time>
                            <wml2:value>-6.1</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                    <wml2:point>
                        <wml2:MeasurementTVP>
                            <wml2:time>2024-01-24T14:20:00Z</wml2:time>
                            <wml2:value>-6.2</wml2:value>
                        </wml2:MeasurementTVP>
                    </wml2:point>
                </wml2:MeasurementTimeseries>
            </om:result>
        </omso:PointTimeSeriesObservation>
    </wfs:member>
</wfs:FeatureCollection>`

const timeTemplate1 = ['wfs:FeatureCollection/wfs:member/omso:PointTimeSeriesObservation/om:result/wml2:MeasurementTimeseries/wml2:point/wml2:MeasurementTVP',
{
    timeStamp: 'wml2:time',
    temperature: 'wml2:value'
}];


const xml2objectArray = async (xmlData, timeTemplate1) => {
    const result = await transform(xmlData, timeTemplate1);
    return  result
}

xml2objectArray(xmlData, timeTemplate1).then(result => {
    weatherData = result

    console.log(weatherData)
})
