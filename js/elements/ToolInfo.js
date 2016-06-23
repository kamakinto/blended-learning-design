/**
 * Created by everettrobinson on 6/22/16.
 */
/**
 * Created by everettrobinson on 6/10/16.
 */
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './../../CSS/styles.css';

var chart = require('chart.js');
var RadarChart = require("react-chartjs").Radar;
var BarChart = require("react-chartjs").Bar;



let ToolInfo;
 ToolInfo = class extends React.Component{

    render() {


        return (
            <div>
                <div id="journalInfo" styleName="info-paragraph">

                    <div class="row">
                        <div class="col-md-4 col-sm-offset-5"><h2>Journal</h2></div>
                    </div>

                    <div class="row">
                        <div class="col-md-1"><b>Stats:</b></div>
                    </div>
                    <div class="row">
                        <div class="col-md-2"><b>Asynchronous:</b> 30 </div>
                        <div class="col-md-2"><b>Collaboration:</b> 5 </div>
                        <div class="col-md-2"><b>Face to Face:</b> 5 </div>
                        <div class="col-md-2"><b>Deep Reflection:</b> 35 </div>
                        <div class="col-md-2"><b>Duration:</b> 15 </div>
                        <div class="col-md-2"><b>Assessment:</b> 10 </div>
                    </div>

                    <div class="row">
                        <div class="col-md-2" styleName="row-custom"><b>Usage:</b> </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <div class="col-md-4">
                                Model 1: Mostly face-to-face, with online learning.

                                <ul class="list-group">
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                </ul>
                            </div>
                            <div class="col-md-4">
                                Model 2: A mix of face-to-face and online learning.
                                <ul class="list-group">
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                </ul>
                            </div>
                            <div class="col-md-4">
                                Model 2: Mostly online learning.

                                    <br> </br>

                                <ul class="list-group">
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                </ul>

                            </div>

                        </div>
                    </div>

                    <div class="row" styleName="row-custom">
                        <div class="col-md-2"><b>Intended Usage:</b> </div>
                        <div class="col-md-10">
                            <textarea class="form-control" rows="3" />
                        </div>
                    </div>
                </div>

                <div id="blogInfo" styleName="info-paragraph">

                    <div class="row">
                        <div class="col-md-4 col-sm-offset-4"><h2>Blog</h2></div>
                    </div>

                    <div class="row">
                        <div class="col-md-1"><b>Stats:</b></div>
                    </div>
                    <div class="row">
                        <div class="col-md-2"><b>Asynchronous:</b>35</div>
                        <div class="col-md-2"><b>Collaboration:</b>10</div>
                        <div class="col-md-2"><b>Face to Face:</b>0</div>
                        <div class="col-md-2"><b>Deep Reflection:</b>35</div>
                        <div class="col-md-2"><b>Duration:</b>10</div>
                        <div class="col-md-2"><b>Assessment:</b>10</div>
                    </div>

                    <div class="row">
                        <div class="col-md-2" styleName="row-custom"><b>Usage:</b> </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <div class="col-md-4">
                                Model 1: Mostly face-to-face, with online learning.

                                <ul class="list-group">
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                </ul>
                            </div>
                            <div class="col-md-4">
                                Model 2: A mix of face-to-face and online learning.
                                <ul class="list-group">
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                </ul>
                            </div>
                            <div class="col-md-4">
                                Model 2: Mostly online learning.

                                <br> </br>

                                <ul class="list-group">
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                </ul>

                            </div>

                        </div>
                    </div>

                    <div class="row" styleName="row-custom">
                        <div class="col-md-2"><b>Intended Usage:</b> </div>
                        <div class="col-md-10">
                            <textarea class="form-control" rows="3" />
                        </div>
                    </div>
                </div>

                <div id="discussion-boardInfo" styleName="info-paragraph">

                    <div class="row">
                        <div class="col-md-4 col-sm-offset-4"><h2>Disucssion Board</h2></div>
                    </div>

                    <div class="row">
                        <div class="col-md-1"><b>Stats:</b></div>
                    </div>
                    <div class="row">
                        <div class="col-md-2"><b>Asynchronous:</b>35</div>
                        <div class="col-md-2"><b>Collaboration:</b>15</div>
                        <div class="col-md-2"><b>Face to Face:</b>0</div>
                        <div class="col-md-2"><b>Deep Reflection:</b>35</div>
                        <div class="col-md-2"><b>Duration:</b>10</div>
                        <div class="col-md-2"><b>Assessment:</b>5</div>
                    </div>

                    <div class="row">
                        <div class="col-md-2" styleName="row-custom"><b>Usage:</b> </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <div class="col-md-4">
                                Model 1: Mostly face-to-face, with online learning.

                                <ul class="list-group">
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                </ul>
                            </div>
                            <div class="col-md-4">
                                Model 2: A mix of face-to-face and online learning.
                                <ul class="list-group">
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                </ul>
                            </div>
                            <div class="col-md-4">
                                Model 2: Mostly online learning.

                                <br> </br>

                                <ul class="list-group">
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                </ul>

                            </div>

                        </div>
                    </div>

                    <div class="row" styleName="row-custom">
                        <div class="col-md-2"><b>Intended Usage:</b> </div>
                        <div class="col-md-10">
                            <textarea class="form-control" rows="3" />
                        </div>
                    </div>
                </div>

                <div id="group-workInfo" styleName="info-paragraph">

                    <div class="row">
                        <div class="col-md-4 col-sm-offset-4"><h2>Group Work</h2></div>
                    </div>

                    <div class="row">
                        <div class="col-md-1"><b>Stats:</b></div>
                    </div>
                    <div class="row">
                        <div class="col-md-2"><b>Asynchronous:</b>0</div>
                        <div class="col-md-2"><b>Collaboration:</b>35</div>
                        <div class="col-md-2"><b>Face to Face:</b>35</div>
                        <div class="col-md-2"><b>Deep Reflection:</b>5</div>
                        <div class="col-md-2"><b>Duration:</b>20</div>
                        <div class="col-md-2"><b>Assessment:</b>5</div>
                    </div>

                    <div class="row">
                        <div class="col-md-2" styleName="row-custom"><b>Usage:</b> </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <div class="col-md-4">
                                Model 1: Mostly face-to-face, with online learning.

                                <ul class="list-group">
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                </ul>
                            </div>
                            <div class="col-md-4">
                                Model 2: A mix of face-to-face and online learning.
                                <ul class="list-group">
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                </ul>
                            </div>
                            <div class="col-md-4">
                                Model 2: Mostly online learning.

                                <br> </br>

                                <ul class="list-group">
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                </ul>

                            </div>

                        </div>
                    </div>

                    <div class="row" styleName="row-custom">
                        <div class="col-md-2"><b>Intended Usage:</b> </div>
                        <div class="col-md-10">
                            <textarea class="form-control" rows="3" />
                        </div>
                    </div>
                </div>

                <div id="post-online-resourcesInfo" styleName="info-paragraph">

                    <div class="row">
                        <div class="col-md-4 col-sm-offset-4"><h2>Post Online Resources</h2></div>
                    </div>

                    <div class="row">
                        <div class="col-md-1"><b>Stats:</b></div>
                    </div>
                    <div class="row">
                        <div class="col-md-2"><b>Asynchronous:</b>35</div>
                        <div class="col-md-2"><b>Collaboration:</b>10</div>
                        <div class="col-md-2"><b>Face to Face:</b>10</div>
                        <div class="col-md-2"><b>Deep Reflection:</b>20</div>
                        <div class="col-md-2"><b>Duration:</b>10</div>
                        <div class="col-md-2"><b>Assessment:</b>15</div>
                    </div>

                    <div class="row">
                        <div class="col-md-2" styleName="row-custom"><b>Usage:</b> </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <div class="col-md-4">
                                Model 1: Mostly face-to-face, with online learning.

                                <ul class="list-group">
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                </ul>
                            </div>
                            <div class="col-md-4">
                                Model 2: A mix of face-to-face and online learning.
                                <ul class="list-group">
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                </ul>
                            </div>
                            <div class="col-md-4">
                                Model 2: Mostly online learning.

                                <br> </br>

                                <ul class="list-group">
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                </ul>

                            </div>

                        </div>
                    </div>

                    <div class="row" styleName="row-custom">
                        <div class="col-md-2"><b>Intended Usage:</b> </div>
                        <div class="col-md-10">
                            <textarea class="form-control" rows="3" />
                        </div>
                    </div>
                </div>

                <div id="minute-papersInfo" styleName="info-paragraph">

                    <div class="row">
                        <div class="col-md-4 col-sm-offset-4"><h2>Minute Papers</h2></div>
                    </div>

                    <div class="row">
                        <div class="col-md-1"><b>Stats:</b></div>
                    </div>
                    <div class="row">
                        <div class="col-md-2"><b>Asynchronous:</b>5</div>
                        <div class="col-md-2"><b>Collaboration:</b>5</div>
                        <div class="col-md-2"><b>Face to Face:</b>20</div>
                        <div class="col-md-2"><b>Deep Reflection:</b>10</div>
                        <div class="col-md-2"><b>Duration:</b>1</div>
                        <div class="col-md-2"><b>Assessment:</b>40</div>
                    </div>

                    <div class="row">
                        <div class="col-md-2" styleName="row-custom"><b>Usage:</b> </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <div class="col-md-4">
                                Model 1: Mostly face-to-face, with online learning.

                                <ul class="list-group">
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                </ul>
                            </div>
                            <div class="col-md-4">
                                Model 2: A mix of face-to-face and online learning.
                                <ul class="list-group">
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                </ul>
                            </div>
                            <div class="col-md-4">
                                Model 2: Mostly online learning.

                                <br> </br>

                                <ul class="list-group">
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                </ul>

                            </div>

                        </div>
                    </div>

                    <div class="row" styleName="row-custom">
                        <div class="col-md-2"><b>Intended Usage:</b> </div>
                        <div class="col-md-10">
                            <textarea class="form-control" rows="3" />
                        </div>
                    </div>
                </div>

                <div id="peer-observation-feedbackInfo" styleName="info-paragraph">

                    <div class="row">
                        <div class="col-md-4 col-sm-offset-4"><h2> Peer Observation Feedback </h2></div>
                    </div>

                    <div class="row">
                        <div class="col-md-1"><b>Stats:</b></div>
                    </div>
                    <div class="row">
                        <div class="col-md-2"><b>Asynchronous:</b>5</div>
                        <div class="col-md-2"><b>Collaboration:</b>25</div>
                        <div class="col-md-2"><b>Face to Face:</b>10</div>
                        <div class="col-md-2"><b>Deep Reflection:</b>10</div>
                        <div class="col-md-2"><b>Duration:</b>10</div>
                        <div class="col-md-2"><b>Assessment:</b>40</div>
                    </div>

                    <div class="row">
                        <div class="col-md-2" styleName="row-custom"><b>Usage:</b> </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <div class="col-md-4">
                                Model 1: Mostly face-to-face, with online learning.

                                <ul class="list-group">
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                </ul>
                            </div>
                            <div class="col-md-4">
                                Model 2: A mix of face-to-face and online learning.
                                <ul class="list-group">
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                </ul>
                            </div>
                            <div class="col-md-4">
                                Model 2: Mostly online learning.

                                <br> </br>

                                <ul class="list-group">
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                </ul>

                            </div>

                        </div>
                    </div>

                    <div class="row" styleName="row-custom">
                        <div class="col-md-2"><b>Intended Usage:</b> </div>
                        <div class="col-md-10">
                            <textarea class="form-control" rows="3" />
                        </div>
                    </div>
                </div>

                <div id="direct-instructionInfo" styleName="info-paragraph">

                    <div class="row">
                        <div class="col-md-4 col-sm-offset-4"><h2>Direct Instruction</h2></div>
                    </div>

                    <div class="row">
                        <div class="col-md-1"><b>Stats:</b></div>
                    </div>
                    <div class="row">
                        <div class="col-md-2"><b>Asynchronous:</b>0</div>
                        <div class="col-md-2"><b>Collaboration:</b>15</div>
                        <div class="col-md-2"><b>Face to Face:</b>40</div>
                        <div class="col-md-2"><b>Deep Reflection:</b>5</div>
                        <div class="col-md-2"><b>Duration:</b>25</div>
                        <div class="col-md-2"><b>Assessment:</b>15</div>
                    </div>

                    <div class="row">
                        <div class="col-md-2" styleName="row-custom"><b>Usage:</b> </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <div class="col-md-4">
                                Model 1: Mostly face-to-face, with online learning.

                                <ul class="list-group">
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                </ul>
                            </div>
                            <div class="col-md-4">
                                Model 2: A mix of face-to-face and online learning.
                                <ul class="list-group">
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                </ul>
                            </div>
                            <div class="col-md-4">
                                Model 2: Mostly online learning.

                                <br> </br>

                                <ul class="list-group">
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                </ul>

                            </div>

                        </div>
                    </div>

                    <div class="row" styleName="row-custom">
                        <div class="col-md-2"><b>Intended Usage:</b> </div>
                        <div class="col-md-10">
                            <textarea class="form-control" rows="3" />
                        </div>
                    </div>
                </div>

                <div id="in-class-quizesInfo" styleName="info-paragraph">

                    <div class="row">
                        <div class="col-md-4 col-sm-offset-4"><h2>In-class Quizzes</h2></div>
                    </div>

                    <div class="row">
                        <div class="col-md-1"><b>Stats:</b></div>
                    </div>
                    <div class="row">
                        <div class="col-md-2"><b>Asynchronous:</b>0</div>
                        <div class="col-md-2"><b>Collaboration:</b>0</div>
                        <div class="col-md-2"><b>Face to Face:</b>40</div>
                        <div class="col-md-2"><b>Deep Reflection:</b>5</div>
                        <div class="col-md-2"><b>Duration:</b>10</div>
                        <div class="col-md-2"><b>Assessment:</b>45</div>
                    </div>

                    <div class="row">
                        <div class="col-md-2" styleName="row-custom"><b>Usage:</b> </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <div class="col-md-4">
                                Model 1: Mostly face-to-face, with online learning.

                                <ul class="list-group">
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                </ul>
                            </div>
                            <div class="col-md-4">
                                Model 2: A mix of face-to-face and online learning.
                                <ul class="list-group">
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                </ul>
                            </div>
                            <div class="col-md-4">
                                Model 2: Mostly online learning.

                                <br> </br>

                                <ul class="list-group">
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"></li>
                                </ul>

                            </div>

                        </div>
                    </div>

                    <div class="row" styleName="row-custom">
                        <div class="col-md-2"><b>Intended Usage:</b> </div>
                        <div class="col-md-10">
                            <textarea class="form-control" rows="3" />
                        </div>
                    </div>
                </div>



            </div>

        )

    }


}

export default CSSModules(ToolInfo, styles);