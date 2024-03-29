// import {
//     SET_STATE_ACTION
// } from './model.react.js';


const PRECISION_MAX = 10;
const MIN_NON_EXPONENTIAL = Math.pow( 10, -PRECISION_MAX );
const MAX_NON_EXPONENTIAL = Math.pow( 10, PRECISION_MAX );
const JS_DUMB_TOSTRING_EXP_THRESHOLD = 1E-6;

/*export*/
class CalcController {
    static handleNumberPressed( buttonNumber ) {
        CalcController.stopRepeat();

        const state = store.getState();
        let newState = {};

        if ( state.opWasLast ) {
            newState.result = buttonNumber;
        } else {
            if ( state.result < 0 || Object.is( state.result, -0 ) ) {
                buttonNumber *= -1;
            }
            if ( state.dotPosition === null ) {
                newState.fakeZeroes = 0;
                newState.result = state.result * 10 + buttonNumber;
            } else {//TODO dotPosition;;
                if ( state.dotPosition < PRECISION_MAX ) {
                    state.dotPosition++;
                    newState.dotPosition = state.dotPosition;
                    // newState = { state: state.dotPosition++, }; //TODO:why?? (both versions are worked but why?)
                    // newState.result = parseFloat( buttonNumber.toPrecision( PRECISION_MAX ) );
                    if ( buttonNumber === 0 ) {
                        newState.fakeZeroes++;
                        CalcController.updateResult();
                    } else {
                        newState.fakeZeroes = 0;
                        newState.result = state.result + buttonNumber / Math.pow( 10, state.dotPosition );
                    }
                    //     // TODO <-if it's necessary something else this one line above
                    // }
                }
            }
        }
        newState.opWasLast = false;

        store.dispatch( {
            type: SET_STATE_ACTION,
            newState: newState,
        } );
    }

//TODO fix function below
    static numberToString( n ) {
        const absN = Math.abs( n );
        if ( Object.is( n, -0 ) ) {
            return '-0';
        }
        if ( Object.is( n, 0 ) ) {
            return '0';
        }
        if ( absN > MAX_NON_EXPONENTIAL ) {
            return n.toExponential();
        }
        if ( absN < MIN_NON_EXPONENTIAL ) {
            return n.toExponential();
        }
        if ( absN < JS_DUMB_TOSTRING_EXP_THRESHOLD ) {
            return n.toFixed( PRECISION_MAX ).replace( /0+$/, '' );
        }

        return n.toString();
    }


    static updateSubtotal() {
        const state = store.getState();
        const newState = {};
        document.getElementById( 'subtotal' ).text(
            ( ( state.subtotal === null ) ? '\xA0' : CalcController.numberToString( newState.subtotal ) )
            + ( ( state.lastOp === null ) ? '' : ' ' + newState.lastOp )
        );
        store.dispatch( {
            type: SET_STATE_ACTION,
            newState: newState,
        } );
    }


    static updateResult() {//TODO this
        const state = store.getState();
        let newState = {};
        const number = state.result;
        const fakeZeroString = ( state.dotPosition === null || state.fakeZeroes === 0 )
            ? ''
            : '0'.repeat( newState.fakeZeroes );
        document.getElementById( 'result' )[0].value = CalcController.numberToString( number )
            + ( ( state.dotPosition === 0 || state.dotPosition === state.fakeZeroes ) ? '.' : '' ) //TODO: FIXME
            + fakeZeroString;
        store.dispatch( {
            type: SET_STATE_ACTION,
            newState: newState,
        } );
    }

    static stopRepeat() {
        const newState = {};
        if ( store.getState().subtotal === null ) {
            newState.lastOp = null;
        }
        newState.repeatValue = null;
        store.dispatch( {
            type: SET_STATE_ACTION,
            newState: newState,
        } );
    }

    static doOperation() {
        const state = store.getState();
        let newResult = state.subtotal;
        switch ( state.lastOp ) {
            case '+' :
                newResult += state.result;
                break;
            case '-':
                newResult -= state.result;
                break;
            case '*':
                newResult *= state.result;
                break;
            case '/':
                newResult /= state.result;
                break;
            case null:
                break;
            default:
                throw new Error( 'invalid operation' );
        }
        const newState = {
            result: newResult,
            // lastOp: null,
            opWasLast: true,
            dotPosition: null,
            fakeZeroes: 0,
        };
        return newState;
    }

    static undoInput() {
        const state = store.getState();
        let newState = {};
        CalcController.stopRepeat();

        if ( state.opWasLast ) {
            return;
        }

        switch ( state.dotPosition ) {
            case null:
                newState.result = Math.round( state.result / 10 );
                break;
            case 0:
                CalcController.dotPressed();
                break;
            default:
                state.dotPosition--;
                newState.dotPosition = state.dotPosition;
                // newState = { state: state.dotPosition--, };
                const shifter = Math.pow( 10, state.dotPosition );
                newState.result = Math.trunc( state.result * shifter ) / shifter;
                // if ( state.fakeZeroes > 0 ) {
                //     newState.fakeZeroes--;
                // } else { // TODO FIXME 0.01001 eg
                //     const shifter = Math.pow( 10, state.dotPosition );
                //     newState.result = Math.trunc( state.result * shifter ) / shifter;
                // }
                break;
        }
        store.dispatch( {
            type: SET_STATE_ACTION,
            newState: newState,
        } );
    }

    static calcOperationPressed( op ) {
        const state = store.getState();
        const newState = state.opWasLast ? {} : CalcController.doOperation( op );
        newState.lastOp = op;
        newState.opWasLast = true;
        newState.dotPosition = null;
        // TODO problems with expected values after operation (calcOperationPressed)
        // newState.subtotal = null;
        //newState.repeatValue = state.result;
        if ( state.repeatValue === null ) {
            newState.subtotal = state.result;
        }
        store.dispatch( {
            type: SET_STATE_ACTION,
            newState: newState,
        } );
    }

    static calcTotalPressed() {
        const state = store.getState();
        let newState = {};
        if ( state.repeatValue === null ) {
            if ( state.subtotal === null ) {
                return;
            }
            newState.repeatValue = state.result;
            CalcController.calcOperationPressed();
            newState.subtotal = null;
            // newState.opWasLast = null;
            // newState.lastOp = op;

        } else {
            newState.subtotal = state.result;
            newState.result = state.repeatValue;
            CalcController.calcOperationPressed();
            newState.subtotal = null;
        }
        store.dispatch( {
            type: SET_STATE_ACTION,
            newState: newState,
        } );
    }

    static memoryStorePressed() {
        const state = store.getState();
        let newState = {};
        newState.memory = state.result;
        store.dispatch( {
            type: SET_STATE_ACTION,
            newState: newState,
        } );
    }

    static memoryRecallPressed() {
        const state = store.getState();
        let newState = {};
        if ( state.memory !== null ) {
            newState.result = state.memory;
        }
        store.dispatch( {
            type: SET_STATE_ACTION,
            newState: newState,
        } );
    }

    static memoryAddPressed() {
        const state = store.getState();
        let newState = {};
        newState.memory = state.memory + state.result;
        store.dispatch( {
            type: SET_STATE_ACTION,
            newState: newState,
        } );
    }

    static memoryClearPressed() {
        const newState = {};
        newState.memory = null;
        store.dispatch( {
            type: SET_STATE_ACTION,
            newState: newState,
        } );
        // store.dispatch( {
        //     type: SET_MEMORY,
        //     state: null,
        // } );
    }

    static dotPressed() {
        const state = store.getState();
        const newState = {};
        CalcController.stopRepeat();
        if ( state.opWasLast ) {
            return;
        }
        switch ( state.dotPosition ) {
            case null:
                newState.dotPosition = 0;
                break;
            case 0:
                newState.dotPosition = null;
                break;
        }
        store.dispatch( {
            type: SET_STATE_ACTION,
            newState: newState,
        } );
    }

    static signPressed() {
        CalcController.stopRepeat();
        const state = store.getState();
        let newState = state.result *= -1;
        store.dispatch( {
            type: SET_STATE_ACTION,
            state: newState,
        } );
    }

    static calcClearPressed() {
        const state = store.getState();
        if ( state.result === 0 ) { //TODO FIXME
            store.dispatch( {
                type: SET_STATE_ACTION,
                newState: {
                    subtotal: null,
                    lastOp: null,
                },
            } );
        } else {
            store.dispatch( {
                type: SET_STATE_ACTION,
                newState: {
                    result: 0,
                    dotPosition: null,
                },
            } );
            if ( state.subtotal === null ) {
                store.dispatch( {
                    type: SET_STATE_ACTION,
                    newState: {
                        lastOp: null,
                        fakeZeroes: 0,
                        dotPosition: null,
                    },
                } )
                ;
            }
        }
        CalcController.stopRepeat();
        store.dispatch( {
            type: SET_STATE_ACTION,
            newState: {
                fakeZeroes: 0,
                dotPosition: null,
            },
        } );
    }
}
