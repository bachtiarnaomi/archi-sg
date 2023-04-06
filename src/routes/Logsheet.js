function Logsheet() {
  return (
    <div className="communities">
      <h1>BOA Log Sheet</h1>
      <h3>Get your BOA Logsheet soft copy here!</h3>
      <p>
        According to the{' '}
        <a
          className="link"
          href="https://www.boa.gov.sg/files/General_Info_for_PPE_candidates_Updated_2022.pdf"
        >
          BOA guideline,
        </a>{' '}
        PPE Candidates applying to sit for the Professional Practice Examination
        or the Professional Interview are required to submit a log book which
        shall include details of the duration and a description of the practical
        experience. Reference should be made to the explanatory notes within the
        Log Book for details on practice and practical experience requirements.
        <br />
        <br />
        Recording your experience over 24-month period on a physical book can
        get challenging. Benjamin Chong has created a soft copy version, which
        you can access below.
      </p>
      <br />
      <br />
      <a
        style={{ marginTop: '30px' }}
        href="https://docs.google.com/spreadsheets/d/11fllOC-k_oXFA4wc6oo5j5I2iaBG-0ry6mwBnwlafxg/template/preview"
        alt=""
        className="action"
      >
        Google Sheet
      </a>
    </div>
  );
}

export default Logsheet;
