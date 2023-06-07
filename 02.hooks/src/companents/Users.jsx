import User from "./User";
const Users = ({ users }) => {
  return (
    <div className="cards">
      {users.map((item) => (
        <User key={item.id} user={item} />
      ))}
    </div>
  );
};

export default Users;
