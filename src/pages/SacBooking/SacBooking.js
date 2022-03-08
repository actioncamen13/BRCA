import React from "react";
import "../css/styleBooking.css";
import "../css/animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";
import SacNavbar from "./Navbar/SacNavbar";
import SacFooter from "./Footer/SacFooter";
// import $ from 'jquery';

function Sac_Booking() {
  return (
    <div className="sacbookingapp">
      <SacNavbar />
      <div className="mainSecBooking">
        <h1 class="text-center mainheading">SAC BOOKING</h1>
        <Accordion className="wrapper center-block" defaultActiveKey="">
          <Accordion.Item
            className="animate__animated animate__slideInUp"
            eventKey="0"
          >
            <Accordion.Header>Criteria and Conditions</Accordion.Header>
            <Accordion.Body  style={{width:"100%" }} aria-expanded="false">
              <ul>
                <li> No personal events can be organized in SAC premises.</li>
                <li>
                  The priority will be given to the BRCA club events followed by
                  other student events, community events, alumni and outside
                  respectively.
                </li>
                <li>
                  No food items are allowed in committee room and side lawn.
                </li>
                <li>
                  The process of request is through online form on BRCA website.
                  Once the booking is blocked and mail is communicated to the
                  requisitioner, the venue charges should be deposited in RCA
                  account online and the transaction details should be
                  communicated within 3 days from date of blocking for the
                  booking to be confirmed.{" "}
                </li>
                <li>
                  Approval of the HOD for departmental events is required and an
                  email from the HEAD’s official ID to officebrca@gmail.com
                  along with the booking request form is required for blocking
                  the venue.
                </li>
                <li>
                  BRCA office and Dean SA office reserves the right to cancel/
                  modify the reservations without any prior notice.
                </li>
                <li>
                  Students of IITD will be required to submit their I-Cards when
                  availing access to the venue.{" "}
                </li>
                <li>
                  Any damage to BRCA properties, including marks on walls,
                  furniture scratches and holes in the lawns etc. will attract
                  penalty.{" "}
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            className=" animate__animated animate__slideInUp"
            eventKey="1"
          >
            <Accordion.Header>Rent Charges</Accordion.Header>
            <Accordion.Body>
              <iFrame style={{width:"100%"}} src="https://docs.google.com/spreadsheets/d/1YA5-QGzKbfIdqWD7sCIB1eyu4ZFSghvWzMe18BI312Q/pubhtml?gid=0&single=true"></iFrame>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            className=" animate__animated animate__slideInUp"
            eventKey="2"
          >
            <Accordion.Header>Availability Calender</Accordion.Header>
            <Accordion.Body>
        <iFrame style={{width:"100%", height:"100%", }} src="https://www.google.com/calendar/embed?showPrint=0&showCalendars=0&height=600&wkst=1&bgcolor=%23FFFFFF&src=officebrca%40gmail.com&color=%231B887A&ctz=Asia%2FCalcutta"></iFrame>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            className=" animate__animated animate__slideInUp"
            eventKey="3"
          >
            <Accordion.Header>Online Booking Form</Accordion.Header>
            <Accordion.Body>
            <iFrame style={{width:"100%", height:"100%", }} src="https://docs.google.com/forms/d/e/1FAIpQLSetUlkoZ8LT8acvuVenKZ8bTUJ8IY4QApPhLW9Qip_g862AlQ/viewform?embedded=true"></iFrame>
            
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            className=" animate__animated animate__slideInUp"
            eventKey="4"
          >
            <Accordion.Header>Booking Process</Accordion.Header>
            <Accordion.Body>
              <ol>
                <li>Send Booking Request Online</li>
                <li>Receive email of venue booking/rejection within 24 hrs</li>
                <li>Pay the Rent amount and communicate to SAC Office</li>
                <li>Receive Confirmation mail</li>
              </ol>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <SacFooter />
    </div>
  );
}
export default Sac_Booking;
