import React from "react";
import MainInfo from "./components/MainInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hobbies from "./components/Hobbies"
import "./App.scss";
import "./App.css"
import Button from "./components/Button";

function App() {
  const personalData = {
    fullName: "Sandy Vortex",
    birthYear: 1999,
    desiredPosition: "full stack developer",
    university: "It-academy",
    graduationYear: "2021",
    lastworkPlace: "waiter in restourant",
    lastWorkyears: "2018-2019",
    skills: ["HTML", "CSS", "JS"],
    hobbies: [
      "karate",
      "watching anime",
      "online-games"
    ]
  }

  function getJobExp (data) {
    const years = data.split("-");
    return Number(years[1]) - Number(years[0])
  }

  const data =  (
    <div className="App">
      <nav>
        <ul>
          <li><a href="">About</a></li>
          <li><a href="">Menu</a></li>
          <li><a href="">Home</a></li>
        </ul>
      </nav>
    <MainInfo 
              fullName = {personalData.fullName}
              age = {new Date().getFullYear() - personalData.birthYear}
              desiredPosition= {personalData.desiredPosition}/>
    <Education 
              university={personalData.university}
              graduationYear={personalData.graduationYear}/>
    <Experience 
              lastWorkyears={personalData.lastWorkyears}
              experience={getJobExp(personalData.lastWorkyears)}
              skills={personalData.skills}/>
    <Hobbies
              hobbies={personalData.hobbies}/>
    <Button/>
    </div>
  );
  return data;
}

export default App;
