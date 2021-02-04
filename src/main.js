import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import findDay from './js/date.js';

$("#formOne").submit(function(event) {
  event.preventDefault();
  let userInput = new Date($("input#userDate").val());
  $(".output").show();
  $("#dayOutput").text(findDay(userInput));
});