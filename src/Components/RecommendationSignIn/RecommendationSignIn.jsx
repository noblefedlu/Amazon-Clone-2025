import "./RecommendationSignIn.css";

function RecommendationSignIn() {
  return (
    <div className="container">
      <h1 className="heading">See personalized recommendations</h1>
      <button className="sign-in-button">Sign in</button>

      <div className="divider-container">
        <hr className="divider" />
        <span className="or-text">or</span>
        <hr className="divider" />
      </div>

      <a href="#" className="new-customer-link">
        New customer's start here. →
      </a>
    </div>
  );
}

export default RecommendationSignIn;
