import React from "react";
import Navbar from "../comonent/Navbar";
import Footer from "../comonent/footer";
import Course from "../comonent/course";

function Courses() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <Course />
      </div>
      <Footer />
    </div>
  );
}

export default Courses;
