function NotFound() {
    return (
      <div className="container text-center mt-5">
        <h1 className="display-4 text-danger">🚫 404 - Page Not Found</h1>
        <p className="lead">Oops! The page you're looking for doesn't exist.</p>
        <a href="/" className="btn btn-outline-primary mt-3">Back to Home</a>
      </div>
    );
  }
  
export default NotFound