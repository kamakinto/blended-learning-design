import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actionCreator';
import Main from './layout/Main';

function mapStateToProps(state) {
    
    return {
        forms: state.forms,
        charts: state.charts
        
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}



const App = connect(mapStateToProps, mapDispatchToProps)(Main);


export default App;