import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Accounts from "../../data/account"; // tableau Json
import Account from "../Account/Account"; // Composant
import Button from "../Button/Button";
import EditName from "../EditName/EditName"; // Importation du formulaire d'édition

const User = () => {
  const [isEditing, setIsEditing] = useState(false);
  const username = useSelector((state) => state.login.userProfil.userName);
  const navigate = useNavigate();

  //eviter le rechargement de la page quand un utilisateur non connecté éssaie d 'acceder à /user
  useEffect(() => {
    if (!username) {
      navigate("/signin");
    }
  }, [username, navigate]);

  const handleDisplayEdit = (e) => {
    e.preventDefault();
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <main className="main bg-dark2">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {username}!
        </h1>
        {isEditing ? (
          <EditName onSave={handleSave} onCancel={handleCancel} />
        ) : (
          <Button
            className={"edit-button"}
            btnText={"Edit Name"}
            onClick={handleDisplayEdit}
          />
        )}
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
};

export default User;
