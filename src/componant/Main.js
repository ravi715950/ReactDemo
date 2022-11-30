import React from 'react'
import img01 from './img/img-01-768x768.jpg'
import img02 from './img/img-02-768x768.jpg'
import img03 from './img/img-04-768x768.jpg'
import img04 from './img/img-03-768x768.jpg'
import img05 from './img/img-05-768x768.jpg'

function Main() {
  return (
    <>
<>
  <div className="container">
    <div className="reviewb">From strategy to delivery, we are </div>
    <div id="reviewy">
      <span className="reviewb">here</span> to make sure your business{" "}
    </div>
    <div className="reviewb"> endeavor succeeds . Trust our experts.</div>
    <h6>ALEX LEE, CEO</h6>
  </div>
  <div className="row">
    <div className="column1">
      <img src={img01} />
    </div>
    <div className="column">
      <img src={img02} />
      <div class="pic">
            <img src={img03}/>
            <h3 class="pic-text">Acheive goals & <br/> coach fast</h3>
        </div>
        
    </div>
    <div class="column">
        <div class="pic">
            <img src={img04}/>
            <h3 class="pic-text">Start business <br/> with mentors</h3>
        </div>
      <img src={img05} />
    </div>
  </div>
</>

    </>
  )
}

export default Main;