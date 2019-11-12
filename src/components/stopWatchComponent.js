import React, { Component } from 'react';
import { setState } from 'expect/build/jestMatchersObject';
import '../App.css' 

class StopWatchComponent extends Component {
    state = {
        sec: 0,
        min:0,
        hour: 0,
        running : false,
        timer: 0
    }


    count = ()=> {

        this.setState( state => {

            if(state.running){
                clearInterval(state.timer)
            }
            else {
                this.state.timer = setInterval(()=>{
                    if(this.state.sec < 59){
                        this.setState({
                            sec: this.state.sec +1
                        })
                    }else{
                        if (this.state.min < 59){
                            this.setState({
                                sec: 0,
                                min : this.state.min + 1
                            })
                        }else{
                            this.setState({
                                sec: 0,
                                min : 0,
                                hour: this.state.hour + 1
                            })
                        }
                    }
                    
                },1000)
            }

            return {running: !state.running}
         
        })
    }

    clear = ()=> {
        clearInterval(this.state.timer)
        this.setState({
            sec : 0,
            min : 0,
            hour : 0,
            running : false
        })
    }

    render() {
        const {sec, min, hour, running} = this.state

        const stopWatch = (
            <div  className="d-flex justify-content-center stopWatchDiv">

            
                <label>
                   {hour} : {min} : {sec} 
                </label>


                <button className ='buttonStyling' onClick = {this.count}>
                    {running ? 'Stop' : 'Start'}
                </button>

                <button  className ='buttonStyling' onClick = {this.clear}>
                    Clear
                </button>
            </div>
        )

        return (
            <div>
                {stopWatch}
            </div>
        );
    }
}

export default StopWatchComponent;