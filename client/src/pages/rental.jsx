import Housevideo from './videos/housing.mov'


function rental () {
  return (
    <div>
      <div id="rental" style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: "16px", lineHeight: "25px", letterSpacing: "1px", color: "#333333" }}>
        <div className="contents">
          <h2 className="house">Housing tips</h2>
          <p>Step on finding a rental place right after you get to Canada and after specifying your academic institution.</p>
          <h3>Know your Rights as a Tenant</h3>
          <p>Canadian provinces have different rules and regulations for tenants. As these rules change from border to border, make sure to check the official website of the State or province to know precisely what your rights, duties, and responsibilities are.</p>
          <h3>Services Included</h3>
          <p>Some households provide internet, hot water, and electricity within the rent, and others may not. So, it would be good to ask about this. You also need to spend on transportation, not to mention the time required to go and come from the college. Consider saving time and spending money as this will give you more time to study and easy access to the college’s resources.</p>
          <h3>Cost of Living in Canada as a Student</h3>
          <p>The cost of living in Canada can vary across the provinces. The cost of living in Edmonton will differ from Ottawa, Ontario, Alberta, etc. For example, living in Toronto means spending 900 to 1900 CAD per month on rent. The cost in Hamilton ranges from 600 to 1200 CAD.</p>
          <h2>FAQs</h2>
          <h4>What are the best online sources to find student accommodation in Canada?</h4>
          <p>You can visit popular aggregator websites like Sublet.com or Vrbo to find a house. They have a listing of available options in different areas across cities. Other sources like Airbnb, Craigslist, Facebook Marketplace, and Kijiji are popular options.</p>
          <h4>How do I ensure that I am not being scammed?</h4>
          <p>First, always approach the landlord directly; if not, ensure you are going through a trusted mediator. Also, it is a good idea not to deposit the rental money before checking out the apartment. Check the paperwork and all the conditions therein. Do not share personal information (no more than what is required) with the landlord.</p>
          <h4>When should I move to Canada to find suitable accommodation?</h4>
          <p>You should look at moving to Canada at least two weeks before the beginning of the university session. This will give you enough time to complete the formalities for getting on-campus accommodation. If not, you will still have enough time to scout for a place off-campus.</p>
        </div>
      </div>



      <div className="videohousing">
        <video src={Housevideo} width="350" height="500" controls="controls"></video>
      </div>

      <div class="dropdown">
        <button>Select University</button>
        <div class="dropdown-content">
          <a href="https://realtor.ca/map#Area=mcmaster" onclick="location.href='https://realtor.ca/map#Area=mcmaster&'">McMaster</a>
          <a href="https://realtor.ca/map#Area=waterloo&" onclick="location.href='https://realtor.ca/map#Area=waterloo&'">Waterloo</a>
          <a href="https://realtor.ca/map#Area=universityoftoronto&" onclick="location.href='https://realtor.ca/map#Area=universityoftoronto&'">UofT</a>
          <a href="https://realtor.ca/map#Area=UniversitofSaskatchewan" onclick="location.href='https://realtor.ca/map#Area=UniversitofSaskatchewan">University of Saskatchewan</a>
          <a href="https://realtor.ca/map#Area=OntarioInstituteofTechnology&" onclick="location.href='https://realtor.ca/map#Area=OntarioInstituteofTechnology&'">OIT</a>
          <a href="https://realtor.ca/map#Area=LaurierUniversity&" onclick="location.href='https://realtor.ca/map#Area=LaurierUniversity&'">Laurier University</a>
          <a href="https://realtor.ca/map#Area=WilfridLaurierUniversity&" onclick="location.href='https://realtor.ca/map#Area=WilfridLaurierUniversity&'">Wilfrid Laurier University</a>
        </div>
      </div>


    </div>
  )

}




export default rental;
