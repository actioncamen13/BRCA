import React from "react";
import "../css/styleBooking.css";
import "../css/animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";
import SacNavbar from "./Navbar/SacNavbar";
import SacFooter from "./Footer/SacFooter";
import { Link } from "react-router-dom";
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
            <Accordion.Body style={{ width: "100%" }} aria-expanded="false">
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
              <iFrame
                style={{ width: "100%", height: "400px" }}
                src="https://docs.google.com/spreadsheets/d/1YA5-QGzKbfIdqWD7sCIB1eyu4ZFSghvWzMe18BI312Q/pubhtml?gid=0&single=true"
              ></iFrame>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            className=" animate__animated animate__slideInUp"
            eventKey="2"
          >
            <Accordion.Header>Availability Calender</Accordion.Header>
            <Accordion.Body>
              <iFrame
                style={{ width: "100%", height: "300px" }}
                src="https://www.google.com/calendar/embed?showPrint=0&showCalendars=0&height=600&wkst=1&bgcolor=%23FFFFFF&src=officebrca%40gmail.com&color=%231B887A&ctz=Asia%2FCalcutta"
              ></iFrame>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            className=" animate__animated animate__slideInUp"
            eventKey="3"
          >
            <Accordion.Header>Online Booking Form</Accordion.Header>
            <Accordion.Body>
              <iFrame
                style={{ width: "100%", height: "400px" }}
                src="https://docs.google.com/forms/d/e/1FAIpQLSetUlkoZ8LT8acvuVenKZ8bTUJ8IY4QApPhLW9Qip_g862AlQ/viewform?embedded=true"
              ></iFrame>
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
          <Accordion.Item
            className=" animate__animated animate__slideInUp"
            eventKey="5"
          >
            <Accordion.Header>Paid Keyboard Classes at BRCA</Accordion.Header>
            <Accordion.Body style={{ width: "100%" }} aria-expanded="false">
              <h2 style={{ textAlign: "center" }}>
                Paid Keyboard 🎹 Classes at BRCA
              </h2>
              <p>Dear All, </p>
              <p>
                Registration for offline Keyboard 🎹 class is now open for
                October 2022. Pl find below the details:
              </p>
              <p>
                {" "}
                Music is a Feel of God. Though music transcends language,
                culture and time, and though notes are the same, Indian music is
                unique because it is evolved, sophisticated and melodies are
                defined. Music club, BRCA invites you to register for paid
                "Western and Indian Music" Keyboard classes by Mr. Vikas Kumar.
                Mr.Vikas is a Music Composers & Music Programmer in music
                Production House. He has Learned piano from Music Nation The
                Music School in New Delhi. He has been teaching at BRCA since
                November 2021. He is Performing artist of ICCR in New Delhi.and
                has given many concerts for Delhi government. He a Music teacher
                in Vidya Bhawan Mahavidyala New Delhi. The classes are OFFLINE
                till further notice.{" "}
              </p>
              <p>Schedule:</p>
              <p>
                {" "}
                Every Tuesday: (Batch -1) 6 PM to 7 PM; and (Batch -2) 7 PM to 8
                PM.{" "}
              </p>
              <p>
                Every Friday: (Batch -1) 6 PM to 7 PM; and (Batch-2) 7PM to 8 PM
              </p>
              <p>
                <ul style={{ listStyleType: "square" }}>
                  <li>
                    Keyboard class for all participating IITD students, faculty
                    and staff.{" "}
                  </li>
                  <li>
                    The number of batch might increase according to the number
                    of students.{" "}
                  </li>
                  <li>
                    There are around 8-10 students in one batch There are total
                    8 classes a month.{" "}
                  </li>
                </ul>
              </p>
              <p>Venue: Committee Room of SAC @ IITD </p>
              <p>Fees - Rs 1200 per participant per month.</p>
              <p>
                {" "}
                The payment has to be made in advance for a month before
                joining. Please deposit/transfer your fee to the account of Vice
                President BRCA Account No.10773569574 Bank: State Bank of India,
                IIT Delhi or with UPI ID: vicepresident@sbi Take a
                screenshot/photograph for the same and send it to Mr. Vikas
                kumar (9958810203) along with your name.
              </p>
              <p>
                {" "}
                If you are interested, you should register at the link below:
              </p>
              <p>
                <Link
                  to="https://forms.gle/n3mqbpY9hALzudnL9"
                  style={{ textDecoration: "none" }}
                >
                  https://forms.gle/n3mqbpY9hALzudnL9
                </Link>{" "}
              </p>
              <p>
                For any queries, please contact the Piano teacher - Mr. Vikas
                Kumar, (WhatsApp)9958810203{" "}
              </p>
              <p>You may also contact at BRCA office (6906) for any help.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            className=" animate__animated animate__slideInUp"
            eventKey="6"
          >
            <Accordion.Header>
              Hindustani Classical Vocal Classes at BRCA
            </Accordion.Header>
            <Accordion.Body style={{ width: "100%" }} aria-expanded="false">
              <h2 style={{ textAlign: "center" }}>
                Hindustani Classical Vocal Classes at BRCA
              </h2>
              <p>
                Though music transcends language, culture and time, and though
                notes are the same, Indian music is unique because it is
                evolved, sophisticated and melodies are defined" these are the
                words by the great Swami Dayanand Saraswati.
              </p>
              <p>
                Music club, BRCA invites you to register for paid "Hindustani
                Classical" vocals classes by Ms Swaradhana. Ms swaradhana is a
                phd scholar in music from University of Delhi . She has cleared
                NET JRF . She has been teaching in IIT since October 2018. She
                is recognised junior artist of Bihar government and has given
                many concerts for Bihar government. Along with it she also
                teaches indian vocals in Academy of Music and Performing
                Arts,New Delhi.
              </p>
              <p>
                The classes are both OFFLINE(Sac) and ONLINE ( Google meet )
                .Students can opt for any one of them .
              </p>
              <p>Timings of classes:-</p>
              <p>Monday Friday (online )</p>
              <p>Sunday Wednesday(offline )</p>
              <p>Time will be decided after discussing with the students</p>
              <p>There are total 6 classes a month.</p>
              <p>
                Fees - Rs 1200 per students per month. ( The fees have been
                increased from 1000 to 1200 this month onwards )
              </p>
              <p>Interested people should register here -</p>
              <p>
                <Link
                  to="https://docs.google.com/forms/d/e/1FAIpQLScGIzktkdY3Sdu1xOJ72IEnWdrSK7-AdpCJZNw2j4jEYFqmjg/viewform"
                  style={{ textDecoration: "none" }}
                >
                  https://docs.google.com/forms/d/e/1FAIpQLScGIzktkdY3Sdu1xOJ72IEnWdrSK7-AdpCJZNw2j4jEYFqmjg/viewform
                </Link>{" "}
              </p>
              <p>
                For any queries, contact - Ms Swaradhana ,(whatsapp
                )7042846283,(call )8789484226
              </p>
              <p>--</p>
              <p>BRCA,IIT DELHI</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            className=" animate__animated animate__slideInUp"
            eventKey="7"
          >
            <Accordion.Header>Kathak Classes at BRCA</Accordion.Header>
            <Accordion.Body style={{ width: "100%" }} aria-expanded="false">
              <h2 style={{ textAlign: "center" }}>
                Offline Kathak Classes at BRCA
              </h2>
              <p>
                Registration for offline Kathak dance class is now open for
                October 2022. Pl find below the details:
              </p>
              <p>Schedule:</p>
              <p>
                Every Monday: 5 PM to 7 PM - Dance class for all participants
              </p>
              <p>
                Every Wednesday: 5 PM to 7 PM - Dance class for all
                participating IITD students, faculty and staff
              </p>
              <p>
                Every Friday: 5 PM to 7 PM - Dance class for all participating
                children upto 20 years
              </p>
              <p>Venue: Dance Room of SAC @ IITD</p>
              <p>Fees</p>
              <p>
                For the students who have passed the second year Kathak exam and
                for the IITD students, faculty and staff the fee will be 1200
                rupees per month. For the rest of the students the fee will be
                1000 rupees per month. The payment has to be made in advance for
                a month before joining.
              </p>
              <p>
                Please deposit/transfer your fee to the account of Vice
                President BRCA Account No.10773569574 Bank: State Bank of India,
                IIT Delhi or with UPI ID: vicepresident@sbi
              </p>
              <p>
                Take a screenshot/photograph for the same and send it to Mrs.
                Iva Sen (9818377443) along with your name
              </p>
              <p>For further queries contact the dance teacher -</p>
              <p>Mrs. Iva Sen, 9818377443</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            className=" animate__animated animate__slideInUp"
            eventKey="8"
          >
            <Accordion.Header>Paid Art Classes at BRCA</Accordion.Header>
            <Accordion.Body style={{ width: "100%" }} aria-expanded="false">
              <h2 style={{ textAlign: "center" }}>Paid Art Classes at BRCA</h2>
              <p>
                FACC club BRCA organizes Paid Art Classes at SAC. They are
                conducted in groups based on age group and availability. The
                classes are open for every one of the IIT Delhi community. The
                instructor is Mrs. Pallavi Jha. You can find some of the
                artworks of her students who took this class (2019-2022) in the
                following link:
              </p>
              <p>
                <Link
                  to="https://docs.google.com/document/d/10YNAjbDeFqxDA7WNWVpawjitxdkWq6RMJKkoeWHSjPQ/edit?usp=sharing"
                  style={{ textDecoration: "none" }}
                >
                  https://docs.google.com/document/d/10YNAjbDeFqxDA7WNWVpawjitxdkWq6RMJKkoeWHSjPQ/edit?usp=sharing
                </Link>
              </p>
              <p>Amongst the mediums covered in instructions are:</p>
              <p>
                Sketching, Pencil shading, Soft pastel, Water colour, glass
                painting and claywork, Acrylic colour, Oil colour on canvas and
                many more forms of art...
              </p>
              <p>
                The classes would be held Offline in the FACC room at ground
                floor in SAC.
              </p>
              <p>
                These are the planned timings and fees for the art classes. If
                there is some issue regarding it, please discuss it with the
                instructor herself during the first session (for any query, you
                can contact the instructor, Mrs. Pallavi Jha, at 8800973875)
              </p>
              <p>
                Kids (less than or equal to 8 yr old): Sunday 10:30 am - 12 :00
                pm (only one class per week) Fees : 800 monthly
              </p>
              <p>
                Faculty, staff, senior kids (greater than 8 yr old): Saturday
                and/Or Wednesday 6:30 -8:00 pm (you can choose class once or
                twice a week, only fees will be differ) Fees : 1200 monthly
                (once a week) /1500 monthly (twice a week)
              </p>
              <p>
                IITD Students: Monday and/or Wednesday and/or Saturday 6:30 pm -
                8:00 pm (you can choose one or two classes per week, only fees
                will be differ) Fees : 1200 monthly (once a week) /1500 monthly
                (twice a week)
              </p>
              <p>Classes shall begin from 1st Oct, i.e. Saturday</p>
              <p>
                It is advised to you to bring the following materials in the
                first class:
              </p>
              <p>
                Above 8 : drawing copy(A3 size), eraser, pencils HB, sharpener
                OR if you want to learn something specific e.g. Oil color or
                water color, etc. discuss with the instructor for required
                materials in the first class.
              </p>
              <p>
                For kids: drawing copy (A4 size), Oil pastels, pencil, eraser,
                sharpener, 1 black sketch pen and cotton.
              </p>
              <p>
                Please deposit/transfer your fee to the account of Vice
                President BRCA Account No.10773569574 Bank: State Bank of India,
                IIT Delhi or with UPI ID: vicepresident@sbi
              </p>
              <p>
                And also please find attached a screenshot/photograph of payment
                by filling this form before first class (the screenshot/printout
                of payment is mandatory in the First class):
              </p>
              <p>
                <Link
                  to="https://docs.google.com/forms/d/e/1FAIpQLScLx_VAduqvW39gabYsix85GiJHqjMR7QBNQHPrSNfYgdbATA/viewform?usp=pp_url"
                  style={{ textDecoration: "none" }}
                >
                  https://docs.google.com/forms/d/e/1FAIpQLScLx_VAduqvW39gabYsix85GiJHqjMR7QBNQHPrSNfYgdbATA
                  /viewform?usp=pp_url
                </Link>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            className=" animate__animated animate__slideInUp"
            eventKey="9"
          >
            <Accordion.Header>
              Keyboard, Guitar, Drums and Western Vocal Group Classes at BRCA
            </Accordion.Header>
            <Accordion.Body style={{ width: "100%" }} aria-expanded="false">
              <h2 style={{ textAlign: "center" }}>
                Keyboard, Guitar, Drums and Western Vocal Group Classes at BRCA
              </h2>
              <p>Circulating the email for October admissions:-</p>
              <p>
                Circulating that we shall arrange faculty visits accordingly for
                Keyboard,Guitar,Drums and Western Vocal group classes at IIT
                Delhi. We can serve on Monday (Guitar), Wednesday (Drums) and
                Thursday (KB/Piano and Voice) evenings for group and Individual
                classes.
              </p>
              <p>
                The fee structure is Rs 6000 per quarter (3 months) for guitar
                and Piano/KB and Drums in groups of 6. Drums lessons will cost
                7,500/- per quarter as these are individual lessons. Monthly fee
                is Rs 2100 for group class and Rs 2500 for individual classes.
              </p>
              <p>
                Students who wish to avail classes on other days of the week may
                do so online on an individual basis.
              </p>
              <p>For any queries, please contact:-</p>
              <p>Poonam Seth</p>
              <p>Operations Manager</p>
              <p>Bridge Music Academy</p>
              <p>9990671674</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <SacFooter />
    </div>
  );
}
export default Sac_Booking;
