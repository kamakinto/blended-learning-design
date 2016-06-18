/**
 * Created by everettrobinson on 6/10/16.
 */
import React from 'react';
var chart = require('chart.js');
var RadarChart = require("react-chartjs").Radar;
var BarChart = require("react-chartjs").Bar;



const SpiderGraph = React.createClass({
    
    render() {


        return (
            <div>
                <div className="row">
                    <div className="col-md-6">

                            <RadarChart data={this.props.charts.radar} redraw options={null}  width="300" height="250" />
                        </div>


                        <div className="col-md-6">
                            <BarChart data={this.props.charts.bar} options={this.props.charts.chartOptions}  width="300" height="250" />
                        </div>
                    </div>
                 
                </div>

        )

    }


});

export default SpiderGraph;