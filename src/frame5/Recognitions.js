import React from "react";
import "./css/stylesRecognitions.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Recognitions() {
  return (
    <div className="body">
    <h1 className =" heading text-center mb-2">BRCA RECOGNITIONS</h1>
    <div className ="bgg text-center">
        <a href="/"><button className="btn btn-lg">2021-22</button></a>
        <a href="/"><button className="btn btn-lg">2020-21</button></a>
        <a href="/"><button className="btn btn-lg">2019-20</button></a>
        <a href="/"><button className="btn btn-lg">2018-19</button></a>
        <a href="/"><button className="btn btn-lg">2017-18</button></a>
        <a href="/"><button className="btn btn-lg">2016-17</button></a>
        <a href="/"><button className="btn btn-lg">2015-16</button></a>
        <a href="/"><button className="btn btn-lg">2014-15</button></a>
        <a href="/"><button className="btn btn-lg">2013-14</button></a>

    </div>
 
    </div>
  );
}

export default Recognitions;
