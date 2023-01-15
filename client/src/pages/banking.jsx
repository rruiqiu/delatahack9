import Bank from "./findbank"
import Header from "./Header";
function Banking () {
  return (
    <div>
      <Header />
      <div className="Bankcontext">
        <p id="top"><b>Banking tips</b></p>
        <p>Step-by-step guide on how to open a bank account with RBC:
        </p>
        <p>Gather the necessary documents. To open an account, you must provide proof of identities such as a passport or driver's license, an address such as a utility bill or lease agreement, and proof of your study permit or work visa.</p>

        <p>Locate an RBC branch near you. You can use the RBC branch locator on their website to find the nearest location.</p>

        <p>Schedule an appointment. Some RBC branches require an appointment to open a new account, so it's a good idea to call ahead and schedule one.</p>

        <p>Go to your scheduled appointment with all your required documents. At the appointment, you will be required to provide the necessary documentation and answer a few questions about your financial situation.</p>

        <p>Choose the type of account you wish to open. RBC offers various account types, such as student accounts, chequing accounts, and savings accounts. Make sure to choose the account that best suits your needs.</p>

        <p> Provide personal information.You will be required to provide personal information such as your name, address, and contact information.</p>

        <p> Provide initial deposit.Most accounts require an initial deposit to open, so make sure to bring enough money to cover the deposit.</p>

        <p>  Sign the necessary forms and agreements.Once your account is open, you must sign a few forms and agreements, such as the account agreement and the electronic access agreement.</p>

        <p> Activating your account and receiving account information.Once the account is open, you will be provided with account information such as account number and online banking login.</p>

        <p> Get familiar with online banking and mobile banking, and use them to check your account balance, make transactions and payments, and more.</p>
      </div>
      <Bank />
    </div>
  )
}

export default Banking;