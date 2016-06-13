import react from 'react';
var update = require('react-addons-update');
// a reducer takes in tw things:

//1. the action (info about what happened)
//2. copy of current state
//input = the action to be taken, and current object
//output = new object or "store"
//TODO: Add Actions for charts to actionCreator.js

/**
 *
 * @param state:Current State
 * @param action.type: holds the type of the action being fired off
 * @param action.index: holds the charts prop
 * @returns {Array}
 */
function charts(state = [], action) {

        switch(action.type) {
            case 'UPDATE_RADAR' :
                    var radardata = [0,0,0,0,0,0,0];
                    var labels = ["January", "February", "March", "April", "May", "June", "July"]


                return  update(state, {
                    radar: {
                        datasets: {
                            0: {
                                data: {$set: radardata }
                            }
                        }
                    }
                })

            default:
                return state;

        }
}

export default charts;