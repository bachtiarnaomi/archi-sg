function Communities() {
  return (
    <div className="communities">
      <h1>Communities</h1>
      <h3>
        Find others on the same journey as you. Join a group or check out other
        resource compilations.
      </h3>
      <div className="cards">
        <a className="column" href="https://t.me/siayalgroup" target="_blank">
          <img src="images/logo-yal.jpg" alt=""></img>
          <p className="bold">SIA-YAL</p>
          <p>
            A <span className="orange">telegram group</span> targeted at young
            architects and students. Acts as a platform for resource sharing and
            discussion.
          </p>
        </a>{' '}
        <a className="column" href="https://asdac.super.site/" target="_blank">
          <img src="images/asdac.jpg" alt=""></img>
          <p className="bold">TheASDFamily</p>
          <p>
            A <span className="orange">telegram group</span> for SUTD ASD people
            (students, alumni, staff and professors).
            <br />
            <br />
            This is a closed group. Please contact us for the invite link.
          </p>
        </a>
        <a className="column" href="https://asdac.super.site/" target="_blank">
          <img src="images/asdac.jpg" alt=""></img>
          <p className="bold">ASDAC</p>
          <p>
            A compilation of <span className="blue">resources</span> by ASD
            Alumni Collective. Resources are targeted at alumni of SUTD ASD.
          </p>
        </a>
        <a
          className="column"
          href="https://archlogbook.super.site/"
          target="_blank"
        >
          <img src="images/logo-alb.png" alt=""></img>
          <p className="bold">ARCHLOGBOOK</p>
          <p>
            ARCHLOGBOOK is an open online <span className="blue">resource</span>{' '}
            created by Gabriel Chek for architectural students and budding
            architects which aims to help you gain more clarity and confidence
            in the design and practice of Architecture.
          </p>
        </a>
        <a className="column" href="https://sia.org.sg/" target="_blank">
          <img src="images/logo-sia.png" alt=""></img>
          <p className="bold">SIA</p>
          <p>
            The official <span className="green">website</span> for Singapore
            Institute of Architects (SIA).
          </p>
        </a>
      </div>
    </div>
  );
}

export default Communities;
