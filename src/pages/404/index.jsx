//
import Nav from "../../components/nav";
import Footer from "../../components/footer";

function NotFound() {
  return (
    <div>
      {/* Navbar */}
      <Nav />
      {/* 404 Page */}
      <div
        style={{
          background: "#FF589E",
          textAlign: "center",
          paddingTop: 80,
          paddingBottom: 100,
          color: "#ffffff",
        }}
      >
        <h1 style={{ fontSize: 300 }}>404</h1>
        <h3 style={{ fontSize: 40 }}>Page Not Found!</h3>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default NotFound;
