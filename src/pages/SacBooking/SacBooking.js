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
            <Accordion.Body aria-expanded="false">
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
            className="animate__delay-1s animate__animated animate__slideInUp"
            eventKey="1"
          >
            <Accordion.Header>Rent Charges</Accordion.Header>
            <Accordion.Body>
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
            className="animate__delay-2s animate__animated animate__slideInUp"
            eventKey="2"
          >
            <Accordion.Header>Availability Calender</Accordion.Header>
            <Accordion.Body>
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
            className="animate__delay-3s animate__animated animate__slideInUp"
            eventKey="3"
          >
            <Accordion.Header>Online Booking Form</Accordion.Header>
            <Accordion.Body>
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
            className="animate__delay-4s animate__animated animate__slideInUp"
            eventKey="4"
          >
            <Accordion.Header>Booking Process</Accordion.Header>
            <Accordion.Body>
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
        </Accordion>
      </div>
      <SacFooter />
    </div>
  );
}
export default Sac_Booking;
