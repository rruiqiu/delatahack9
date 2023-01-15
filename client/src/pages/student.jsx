function Student () {
  return (
    <div>

      <div class="dropdown">
        <button>Select University</button>
        <div class="dropdown-content">
          <a href="https://www.google.com" onclick="location.href='https://realtor.ca/map#Area=mcmaster&'">McMaster</a>
          <a href="https://www.google.com" onclick="location.href='https://realtor.ca/map#Area=waterloo&'">Waterloo</a>
          <a href="https://www.google.com" onclick="location.href='https://realtor.ca/map#Area=universityoftoronto&'">UofT</a>
          <a href="https://www.google.com" onclick="location.href='https://realtor.ca/map#Area=UniversitofSaskatchewan">University of Saskatchewan</a>
          <a href="https://www.google.com" onclick="location.href='https://realtor.ca/map#Area=OntarioInstituteofTechnology&'">OIT</a>
          <a href="https://www.google.com" onclick="location.href='https://realtor.ca/map#Area=LaurierUniversity&'">Laurier University</a>
          <a href="https://www.google.com" onclick="location.href='https://realtor.ca/map#Area=WilfridLaurierUniversity&'">Wilfrid Laurier University</a>

        </div>
      </div>
    </div>
  )
}

export default Student;
