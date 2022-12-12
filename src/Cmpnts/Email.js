import './Email.css';

const Email = ({ email }) => {
    return (
        <div className="email">
        <p>{email.email}</p>
      </div>
    );
  };
  
  export default Email;