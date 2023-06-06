import React from 'react'
import { Helmet } from 'react-helmet'

export default function Widget() {
    return (
        <div>
            <div id="section">
                <div id="weatherapi-weather-widget-3" classname="icon" />
            </div>
            <Helmet>
                <script id="widget" type='text/javascript' src='https://www.weatherapi.com/weather/widget.ashx?q=sri lanka&wid=3&tu=1&div=weatherapi-weather-widget-3' async></script>
            </Helmet>
        </div>
    )
}
