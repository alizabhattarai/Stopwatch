// first create a component called stopwatch 
// a class component was used to define the component
// setting timerOn=false a boolean value, timerStart and timertime  to zero '0' value
// startTimer, stopTimer and resetTimer is used with this.setState method 
// math.floor method is used to calulate the with centiseconds, seconds, minuts and hours
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
    
  }

render () {
    return (
        <div className ="Stopwatch"> 
            <div className="Stopwatch-header">Stopwatch</div>
            <div className="Stopwatch-display">



            
            </div>
        </div>
    );
}
    

}

export default Stopwatch;
















export default Stopwatch;
