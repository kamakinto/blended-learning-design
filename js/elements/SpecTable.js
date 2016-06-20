/**
 * Created by everettrobinson on 6/17/16.
 */

import React from 'react';


const SpecTable = React.createClass({


render() {


        return (
            <div>
                <div className="row">
                    <div className="col-md-12">

                        <table className="table table-inverse">
                            <thead className="thead-inverse">
                            <tr>
                                <th>Asynchronous</th>
                                <th>Collaboration</th>
                                <th>Face to Face</th>
                                <th> Deep Reflection</th>
                                <th>Duration</th>
                                <th>Assessment</th>

                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td> {this.props.charts.radar.datasets[1].data[0]}pts</td>
                                <td> {this.props.charts.radar.datasets[1].data[1]}pts</td>
                                <td> {this.props.charts.radar.datasets[1].data[2]}pts</td>
                                <td> {this.props.charts.radar.datasets[1].data[3]}pts</td>
                                <td> {this.props.charts.radar.datasets[1].data[4]}pts</td>
                                <td> {this.props.charts.radar.datasets[1].data[5]}pts</td>



                            </tr>

                            </tbody>
                        </table>

                    </div>




            </div>
                </div>

        )

    }


});

export default SpecTable;