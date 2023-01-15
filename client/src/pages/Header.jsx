import Images from '../images/RBC.png'
function Header () {
  return (

    <section id="header">
      <a href="https://www.rbcroyalbank.com/products/deposits/onlineservices/student-banking.html"> <img src={Images} width="70" height="40" alt="" /></a>
      {/* <img src="/dvl/v1.0/assets/images/logos/rbc-logo-shield.svg" width="31" height="40" alt="RBC"> */}
      <h1 className="BankHeader">Royal Bank </h1>
    </section>
  )
}
export default Header;