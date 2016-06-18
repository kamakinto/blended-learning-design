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
            case 'UPDATE_WEIGHT' :
                
                return update(state, {
                    radar: {
                        datasets: {
                            1: {
                                data: {$set: action.weight}
                            }
                        }
                    },
                    bar: {
                        datasets: {
                            0: {
                                data: {$set: action.weight}
                            }

                        }
                    }

                });
            
            default:
                return state;

        }
}

export default charts;