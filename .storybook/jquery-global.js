import jquery from 'jquery';
import jQueryOnce from "jquery-once";

jquery.once = jQueryOnce;

global.jQuery = jquery;
global.$ = jquery;
