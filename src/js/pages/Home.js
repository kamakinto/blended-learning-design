import React from "react";
import SpiderGraph from '../elements/SpiderGraph';

const Home  = React.createClass({

    componentWillReceiveProps: function(nextProps) {
        console.log(nextProps);
       this.setState({charts: nextProps.charts});


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
                            <input type="checkbox" value="blogs"> Blogs </input>
                        </label>
                    </div>

                    <div class="checkbox">
                        <label>
                            <input type="checkbox" value="discussion board"> Discussion Board </input>
                        </label>
                    </div>
                </form>
            </div>
        )
    }
});
export default Home ;