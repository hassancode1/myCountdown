import React from "react";
import "./App.css";

function Countdown() {
  let seconds = 60;
  let minutes = 60;

  function StartCountDown() {
    function MyInterval() {
      seconds -= 1; // decrement the by 1 each time the fun was call
      document.getElementById("second").innerHTML = seconds;
      document.getElementById("minutes").innerHTML = minutes;

      if (seconds < !0) {
        //if sec is not less than zero.
        if (seconds === 0) {
          minutes -= 1;
          seconds = 60; //since second is set seconds back to 60
          if (minutes === 0) {
            clearInterval(Inverval);
          }
        }
      }
    }

    let Inverval = setInterval(MyInterval, 1000); //this fun run after every 1sec.
  }

  return (
    <div className="container">
      <table border="1px">
        <tbody>
          <tr>
            <td>Hrs</td>
            <td>Minutes</td>
            <td>Seconds</td>
          </tr>
          <tr>
            <td>HH</td>
            <td>
             <span id="minutes"></span>
            </td>
            <td>
              <span id="second"></span>
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => StartCountDown()}>Start</button>
    </div>
  );
}

export default Countdown;
