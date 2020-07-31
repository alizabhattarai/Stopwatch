// first create a component called stopwatch 
// a class component was used to define the component
// setting timerOn=false a boolean value, timerStart and timertime  to zero '0' value
// startTimer, stopTimer and resetTimer is used with this.setState method 
// math.floor method is used to calulate the with miliseconds, seconds, minuts and hours
// onClick start timer, stop timer and Rest timer are used with this.state in return 


import React from 'react';

class Stopwatch extends React.Component {
    state = {
        timerOn: false,
        timerStart: 0,
        timerTime:0
    }
  startTimer =() => {
      this.setState ({
          timerOn:true,
          timerTime: this.setState.timerTime,
          timerStart: Date.now() - this.state.timerTime
      });
      this.timer = setInterval(
          () => {
              this.setState (
                  {
                      timerTime:Date.now() - this.state.timerStart
                  });
          }, 10);
    
  };

  stopTimer = () => {
      this.setState ({timerOn: false});
      clearInterval(this.timer);
  };
  resetTimer =() => {
      this.setState({
          timerStart:0,
          timerTime:0
      });
  };

render () {
    const {timerTime} = this.state;
    let miliseconds = ("0" + (Math.floor(timerTime /10) % 100)).slice (-2);
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

    return (
        <div className ="stopwatch"><br/>
            <div className="Stopwatch-header">STOPWATCH</div> <br/>
            <div className="Stopwatch-display"> <br/>
            {hours} : {minutes} : {seconds} : {miliseconds}
                    {this.state.timerOn === false && this.state.timerTime === 0 && (
                        <button onClick={this.startTimer}>Start</button>
                    )}
                    {this.state.timerOn === true && (
                        <button onClick={this.stopTimer}>Stop</button>
                    )}
                    {this.state.timerOn === false && this.state.timerTime > 0 && (
                        <button onClick={this.startTimer}>Resume</button>
                    )}
                    {this.state.timerOn === false && this.state.timerTime > 0 && (
                        <button onClick={this.resetTimer}>Reset</button>
                    )}
            </div>
        </div>
    );
}
    

}

export default Stopwatch;



















