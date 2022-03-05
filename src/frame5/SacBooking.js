import React from "react";
import "./css/styleBooking.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./js/script";
import Accordion from 'react-bootstrap/Accordion'
// import $ from 'jquery';

function Sac_Booking (){
  return (
    <div className="mainSec">
    <h1 class="text-center rhead">SAC BOOKING</h1>
      <Accordion className="wrapper center-block" defaultActiveKey="0">
   <Accordion.Item className="panel " eventKey="0">
     <Accordion.Header className="panel panel-title panel-heading" >Criteria and Conditions</Accordion.Header>
     <Accordion.Body>
       <ul>
         <li> No personal events can be organized in SAC premises.</li>
         <li>The priority will be given to the BRCA club events followed by other student events, community events, alumni and outside respectively.</li>
         <li>No food items are allowed in committee room and side lawn.</li>
         <li>The process of request is through online form on BRCA website. Once the booking is blocked and mail is communicated to the requisitioner, the venue charges should be deposited in RCA account online and the transaction details should be communicated within 3 days from date of blocking for the booking to be confirmed. </li>
         <li>Approval of the HOD for departmental events is required and an email from the HEAD’s official ID to officebrca@gmail.com along with the booking request form is required for blocking the venue.</li>
         <li>BRCA office and Dean SA office reserves the right to cancel/ modify the reservations without any prior notice.</li>
         <li>Students of IITD will be required to submit their I-Cards when availing access to the venue. </li>
         <li>Any damage to BRCA properties, including marks on walls, furniture scratches and holes in the lawns etc. will attract penalty. </li>
       </ul>
     </Accordion.Body>
   </Accordion.Item>
   <Accordion.Item eventKey="1">
     <Accordion.Header>Rent Charges</Accordion.Header>
     <Accordion.Body>
     <ul>
         <li> No personal events can be organized in SAC premises.</li>
         <li>The priority will be given to the BRCA club events followed by other student events, community events, alumni and outside respectively.</li>
         <li>No food items are allowed in committee room and side lawn.</li>
         <li>The process of request is through online form on BRCA website. Once the booking is blocked and mail is communicated to the requisitioner, the venue charges should be deposited in RCA account online and the transaction details should be communicated within 3 days from date of blocking for the booking to be confirmed. </li>
         <li>Approval of the HOD for departmental events is required and an email from the HEAD’s official ID to officebrca@gmail.com along with the booking request form is required for blocking the venue.</li>
         <li>BRCA office and Dean SA office reserves the right to cancel/ modify the reservations without any prior notice.</li>
         <li>Students of IITD will be required to submit their I-Cards when availing access to the venue. </li>
         <li>Any damage to BRCA properties, including marks on walls, furniture scratches and holes in the lawns etc. will attract penalty. </li>
       </ul>
     </Accordion.Body>
   </Accordion.Item>
   <Accordion.Item eventKey="2">
     <Accordion.Header>Availability Calender</Accordion.Header>
     <Accordion.Body>
     <ul>
         <li> No personal events can be organized in SAC premises.</li>
         <li>The priority will be given to the BRCA club events followed by other student events, community events, alumni and outside respectively.</li>
         <li>No food items are allowed in committee room and side lawn.</li>
         <li>The process of request is through online form on BRCA website. Once the booking is blocked and mail is communicated to the requisitioner, the venue charges should be deposited in RCA account online and the transaction details should be communicated within 3 days from date of blocking for the booking to be confirmed. </li>
         <li>Approval of the HOD for departmental events is required and an email from the HEAD’s official ID to officebrca@gmail.com along with the booking request form is required for blocking the venue.</li>
         <li>BRCA office and Dean SA office reserves the right to cancel/ modify the reservations without any prior notice.</li>
         <li>Students of IITD will be required to submit their I-Cards when availing access to the venue. </li>
         <li>Any damage to BRCA properties, including marks on walls, furniture scratches and holes in the lawns etc. will attract penalty. </li>
       </ul>
     </Accordion.Body>
   </Accordion.Item>
   <Accordion.Item eventKey="3">
     <Accordion.Header>Online Booking Form</Accordion.Header>
     <Accordion.Body>
     <ul>
         <li> No personal events can be organized in SAC premises.</li>
         <li>The priority will be given to the BRCA club events followed by other student events, community events, alumni and outside respectively.</li>
         <li>No food items are allowed in committee room and side lawn.</li>
         <li>The process of request is through online form on BRCA website. Once the booking is blocked and mail is communicated to the requisitioner, the venue charges should be deposited in RCA account online and the transaction details should be communicated within 3 days from date of blocking for the booking to be confirmed. </li>
         <li>Approval of the HOD for departmental events is required and an email from the HEAD’s official ID to officebrca@gmail.com along with the booking request form is required for blocking the venue.</li>
         <li>BRCA office and Dean SA office reserves the right to cancel/ modify the reservations without any prior notice.</li>
         <li>Students of IITD will be required to submit their I-Cards when availing access to the venue. </li>
         <li>Any damage to BRCA properties, including marks on walls, furniture scratches and holes in the lawns etc. will attract penalty. </li>
       </ul>
     </Accordion.Body>
   </Accordion.Item>
   <Accordion.Item eventKey="4">
     <Accordion.Header>Booking Process</Accordion.Header>
     <Accordion.Body>
     <ul>
         <li> No personal events can be organized in SAC premises.</li>
         <li>The priority will be given to the BRCA club events followed by other student events, community events, alumni and outside respectively.</li>
         <li>No food items are allowed in committee room and side lawn.</li>
         <li>The process of request is through online form on BRCA website. Once the booking is blocked and mail is communicated to the requisitioner, the venue charges should be deposited in RCA account online and the transaction details should be communicated within 3 days from date of blocking for the booking to be confirmed. </li>
         <li>Approval of the HOD for departmental events is required and an email from the HEAD’s official ID to officebrca@gmail.com along with the booking request form is required for blocking the venue.</li>
         <li>BRCA office and Dean SA office reserves the right to cancel/ modify the reservations without any prior notice.</li>
         <li>Students of IITD will be required to submit their I-Cards when availing access to the venue. </li>
         <li>Any damage to BRCA properties, including marks on walls, furniture scratches and holes in the lawns etc. will attract penalty. </li>
       </ul>
     </Accordion.Body>
   </Accordion.Item>
 </Accordion>
    </div>
  );

}

// class Sac_Booking extends React.Component{

//   componentDidMount() {
//     this.handleClick();
//   }
//   handleClick = () => {
//     $('.panel-collapse').on('show.bs.collapse', function () {
//       $(this).siblings('.panel-heading').addClass('active');
//     });
    
//     $('.panel-collapse').on('hide.bs.collapse', function () {
//       $(this).siblings('.panel-heading').removeClass('active');
//     });
//  }
// render(){
//     return (
//         <div>
// <h1 className="text-center rhead">SAC BOOKING</h1>
    
//     <div className="wrapper center-block">
//       <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
     
//       <div className="panel panel-default" onClick = {this.handleClick}>
//         <div className="panel-heading" role="tab" id="headingOne" onClick = {this.handleClick}>
//           <h4 className="panel-title">
//             <a className="collapsed" role="button" data-toggle="collapse" onClick = {this.handleClick} data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
//               Criteria and Conditions
//             </a>
//           </h4>
//         </div>
//         <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
//           <div className="panel-body">
//             • No personal events can be organized in SAC premises. <br/>
//             • The priority will be given to the BRCA club events followed by other student events, community events, alumni and outside respectively. <br/>
//             • No food items are allowed in committee room and side lawn. <br/>
//             • Food items can be served only on terrace, front lobby or back lawn. <br/>
//             • No cooking is permitted in the SAC premises.  <br/>
//             • The process of request is through online form on BRCA website. Once the booking is blocked and mail is communicated to the requisitioner, the venue charges should be deposited in RCA account online and the transaction details should be communicated within 3 days from date of blocking for the booking to be confirmed. <br/>
//             • Approval of the HOD for departmental events is required and an email from the HEAD’s official ID to officebrca@gmail.com along with the booking request form is required for blocking the venue. <br/>
//             • BRCA office and Dean SA office reserves the right to cancel/ modify the reservations without any prior notice. <br/>
//             • Students of IITD will be required to submit their I-Cards when availing access to the venue. <br/>
//             • Any damage to BRCA properties, including marks on walls, furniture scratches and holes in the lawns etc. will attract penalty. <br/>
//           </div>
//         </div>
//       </div>
//       <div className="panel panel-default">
//         <div className="panel-heading" role="tab" id="headingTwo">
//           <h4 className="panel-title">
//             <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//               Rent Charges
//             </a>
//           </h4>
//         </div>
//         <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
//           <div className="panel-body">
//             Content
//           </div>
//         </div>
//       </div>
//       <div className="panel panel-default">
//         <div className="panel-heading" role="tab" id="headingThree">
//           <h4 className="panel-title">
//             <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
//               Availability Calendar
//             </a>
//           </h4>
//         </div>
//         <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
//           <div className="panel-body">
//             Content
//           </div>
//         </div>
//       </div>
//       <div className="panel panel-default">
//         <div className="panel-heading" role="tab" id="headingFour">
//           <h4 className="panel-title">
//             <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
//               Online Booking Form
//             </a>
//           </h4>
//         </div>
//         <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
//           <div className="panel-body">
//             Content
//           </div>
//         </div>
//       </div>
//       <div className="panel panel-default">
//         <div className="panel-heading" role="tab" id="headingFive">
//           <h4 className="panel-title">
//             <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
//               Booking Process
//             </a>
//           </h4>
//         </div>
//         <div id="collapseFive" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
//           <div className="panel-body">
//             Content
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//     {/* <Accordion defaultActiveKey="0">
//   <Accordion.Item eventKey="0">
//     <Accordion.Header>Accordion Item #1</Accordion.Header>
//     <Accordion.Body>
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//       tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//       veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
//       commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
//       velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
//       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
//       est laborum.
//     </Accordion.Body>
//   </Accordion.Item>
//   <Accordion.Item eventKey="1">
//     <Accordion.Header>Accordion Item #2</Accordion.Header>
//     <Accordion.Body>
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//       tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//       veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
//       commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
//       velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
//       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
//       est laborum.
//     </Accordion.Body>
//   </Accordion.Item>
// </Accordion> */}
// </div>
//     );
// }

// }
export default Sac_Booking;