import React from "react";
import SpiderGraph from '../elements/SpiderGraph';



const Home  = React.createClass({

    checkClick(e) {
        var checkbox = document.getElementById(e.target.id);
            if(checkbox.checked) {
                //fire off an action for checked boxes
                console.log("checkbox is checked");
                const boxValue = checkbox.value;
                this.props.addChartValues(boxValue)
                
                
            } else {
                //fire off an action for unchecked boxes
                console.log("checkbox is unchecked");
                
                
            }

                console.log(checkbox.checked);
    },



 render() {
    return (
            <div>

                <div>
                    <SpiderGraph {...this.props} />
                    </div>



                <form>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" value="journal" onClick={this.props.updateRadar.bind(null, this.props.charts)}> Journals </input>
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
        )
    }
});
export default Home ;