import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import findDay from './js/date.js';

$("#formOne").submit(function(event) {
  event.preventDefault();
  let htmlForOutput = "<p>The day of the week is <span id='dayOutput'></span>.</p>";
  let userInput = new Date($("input#userDate").val());
  $(".output").show();
  $(".output").append(htmlForOutput);
  $("#dayOutput").text(findDay(userInput));
});