import $ from 'jquery';
import Person from './Person';

(function(){
  const moi = new Person('Rangon', 'Jean-Christophe');
  moi.direBonjour();
})($)