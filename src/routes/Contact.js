function Contact() {
  return (
    <div className="communities">
      <h1>Contact</h1>
      <h3>
        Find others on the same journey as you. Join a group or check out other
        resource compilations.
      </h3>
      <div className="cards">
        <a className="column" href="https://t.me/siayalgroup" target="_blank">
          <img src="images/logo-yal.jpg" alt=""></img>
          <p className="bold">Feedback</p>
          <p>
            A <span className="orange">telegram group</span> targeted at young
            architects and students. Acts as a platform for resource sharing and
            discussion.
          </p>
        </a>{' '}
        <a className="column" href="https://asdac.super.site/" target="_blank">
          <img src="images/asdac.jpg" alt=""></img>
          <p className="bold">Others</p>
          <p>
            A <span className="orange">telegram group</span> for SUTD ASD people
            (students, alumni, staff and professors).
            <br />
            <br />
            This is a closed group. Please contact us for the invite link.
          </p>
        </a>
      </div>
    </div>
  );
}

export default Contact;
