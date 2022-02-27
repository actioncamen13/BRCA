import React from "react";
import "./css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Recognitions() {
  return (
    <div className="body">
    <h1 className =" heading text-center">BRCA RECOGNITIONS</h1>
    <div className ="bgg text-center">
        <a href="/"><button className="btn btn-lg">2021-2022</button></a>
        <a href="/"><button className="btn btn-lg">2020-2021</button></a>
        <a href="/"><button className="btn btn-lg">2019-2020</button></a>
        <a href="/"><button className="btn btn-lg">2018-2019</button></a>
        <a href="/"><button className="btn btn-lg">2017-2018</button></a>
        <a href="/"><button className="btn btn-lg">2016-2017</button></a>
        <a href="/"><button className="btn btn-lg">2015-2016</button></a>
        <a href="/"><button className="btn btn-lg">2014-2015</button></a>
        <a href="/"><button className="btn btn-lg">2013-2014</button></a>

    </div>
 
    </div>
  );
}

export default Recognitions;
