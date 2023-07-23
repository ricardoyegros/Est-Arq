import "./App.css";
import PrincipalImage from "./assets/img30.jpg";
function App() {
  return (
    <main
      style={{ width: "100%", height: "100vh", display: "flex", gap: "2rem" }}
    >
      <section
        style={{ width: "50%", paddingLeft: "20px", paddingRight: "40px" }}
      >
        <div
          style={{
            width: "100%",
            height: "45px",
            border: "1.7px solid black",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "400px",
            padding:"0 10px"
          }}
        >
          <p style={{ fontSize: "35px", fontWeight: "lighter" }}>Flia</p>
          <p
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              fontFamily: "fantasy",
            }}
          >
            J.
          </p>
        </div>
        <p style={{ marginTop: "25px", color: "#434343", fontSize: "12px" }}>
          Year: 2018-2019
        </p>
        <p style={{ fontSize: "12px", color: "#434343" }}>
          Location: Córdoba, Argentina
        </p>
        <p style={{ fontSize: "12px", color: "#434343" }}>
          Creators: Javier López Revol, Florencia M. Ball, Ángeles Nievas
        </p>
        <p style={{ fontSize: "12px", color: "#434343" }}>
          Photographs: Federico Cairoli(1), Javier López Revol(2)
        </p>
        <div style={{ width: "100%" , display:"flex", gap:"20px",marginTop:"20px",padding:"0 10px" }}>
          <p style={{color:"grey", fontWeight:"lighter", fontSize:"15px", textAlign:"justify", width:"100%"}}>
            Multi-purpose shipping container.<br/> We envisioned a place that would
            host exhibitions, installations, events, cultural programs and
            workshops from different fields to foster local talent and culture:
            visual arts, digital arts, architecture, design, photography, etc.
          </p>
          <p style={{color:"grey", fontWeight:"lighter", fontSize:"15px", textAlign:"justify", width:"100%"}}>
            That was our idea. We opened in February 2020. Everything was ready…<br/>
            But we had to make changes.<br/> Our architecture studio, which was
            originally planned to use only 20% of the space, took over almost
            the entire building.
          </p>
        </div>
      </section>
      <section style={{ width: "50%", paddingRight: "30px" }}>
        <img
          src={PrincipalImage}
          alt="image section"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            paddingRight: "2rem",
          }}
        />
      </section>
    </main>
  );
}

export default App;
