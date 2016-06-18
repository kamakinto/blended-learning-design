import React from "react";
import SpiderGraph from '../elements/SpiderGraph';
import SpecTable from '../elements/SpecTable';



const Home  = React.createClass({

    checkClick(e) {
        var checkbox = document.getElementById(e.target.id);
                const boxValue = {
                    value: checkbox.value,
                    checked: checkbox.checked
                }
                
                this.props.updateChartValues(boxValue, this.props)
     },



 render() {
    return (
            <div>

                <div>
                    <SpiderGraph {...this.props} />
                    </div>

                <div>
                    <SpecTable {...this.props} />
                    </div>


            <div class="row">
                <div class="col-md-4">
                <form>
                    <div class="checkbox">
                        <label>
                            <input id="journal" type="checkbox" value="journal" onClick={this.checkClick}> Journals </input>
                        </label>
                    </div>

                    <div class="checkbox">
                        <label>
                            <input id="blog" type="checkbox" ref="blogs" onClick={this.checkClick} value="blogs"> Blogs </input>
                        </label>
                    </div>

                    <div class="checkbox">
                        <label>
                            <input id="Discussion-Board" type="checkbox" value="discussion board" onClick={this.checkClick}> Discussion Board </input>
                        </label>
                    </div>
                </form>
                    </div>


                <div class="col-md-4">
                <form>
                    <div class="checkbox">
                        <label>
                            <input id="group work" type="checkbox" value="Group Work" onClick={this.checkClick}> Group Work </input>
                        </label>
                    </div>

                    <div class="checkbox">
                        <label>
                            <input id="Post Online Resources" type="checkbox" ref="Post Online Resources" onClick={this.checkClick} value="Post Online Resources"> Post Online Resources </input>
                        </label>
                    </div>

                    <div class="checkbox">
                        <label>
                            <input id="minute-papers" type="checkbox" value="minute papers" onClick={this.checkClick}> Minute Papers </input>
                        </label>
                    </div>
                </form>
                    </div>

                <div class="col-md-4">
                    <form>
                        <div class="checkbox">
                            <label>
                                <input id="peer-observation-feedback" type="checkbox" value="peer observation feedback" onClick={this.checkClick}> Peer Observation Feedback </input>
                            </label>
                        </div>

                        <div class="checkbox">
                            <label>
                                <input id="direct-instruction" type="checkbox" ref="direct instruction" onClick={this.checkClick} value="direct instruction"> Direct Instruction </input>
                            </label>
                        </div>

                        <div class="checkbox">
                            <label>
                                <input id="in-class-quizes" type="checkbox" value="in class quizzes" onClick={this.checkClick}> In-class quizes  </input>
                            </label>
                        </div>
                    </form>
                </div>

                </div>
            </div>
        )
    }
});
export default Home ;