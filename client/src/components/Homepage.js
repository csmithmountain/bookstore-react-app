import BookList from "./BookList";
import Navbar from "./Navbar";
import UserList from "./UserList";

function Homepage() {
  return (
    <>
      <Navbar />
      <h1>Welcome to Bookster bookstore!</h1>
      <p>Sign in to start shopping, or keep browsing as a guest.</p>
      <BookList />
      <UserList />
    </>
  );
}

export default Homepage;
