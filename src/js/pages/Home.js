import React from "react";
import SpiderGraph from '../elements/SpiderGraph';



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
        )
    }
});
export default Home ;