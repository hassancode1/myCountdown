import React from "react";
import "./App.css";

function Countdown() {
  let seconds = 60;
  let minutes = 30;
  let hours = 2;

  function StartCountDown() {
    function MyInterval() {
      document.getElementById("second").innerHTML = seconds;
      document.getElementById("minutes").innerHTML = minutes;
      document.getElementById("hours").innerHTML = hours;
      seconds -= 1; // decrement the by 1 each time the fun was call
    

      // if sec is exactly zero.
      if (seconds <= 0) {
        minutes -= 1;
        seconds = 60; //since second is set seconds back to 60
        if (minutes <= 0 && hours !== 0) {
          hours -= 1;
          minutes = 60; //since minutes is set seconds back to 60
          if (hours < 0) {
            hours = 0;
          }
        }
      }


      if (hours <= 0 && minutes <= 0) {
        if (seconds <= 0) {
          clearInterval(Inverval);
          alert("Time Ends Exam Submitted successfully...");
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
            <td>
              <span id="hours"></span>
            </td>
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
