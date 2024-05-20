import Accounts from "../../data/account"; // tableau Json
import Account from "../Account/Account"; //Composant
import Button from "../Button/Button"


const User = () => {};
return (
  <main className="main bg-dark2">
    <div className="header">
      <h1>
        Welcome back
        <br />
      </h1>
      <Button className={"edit-button"} btnText={"Edit Name"}></Button>
    </div>
    <h2 className="sr-only">Accounts</h2>
    {Accounts.map((account, index) => (
      <Account
        key={"account" + index}
        title={account.title}
        amount={account.amount}
        description={account.description}
      />
    ))}
  </main>
);

export default User;
