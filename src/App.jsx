// src/App.js
import React from "react";
import "./App.css";
import FacebookPost from "./components/FacebookPost";
import profilePic from './components/images/my-passport-photo.jpg'

import car1 from './components/images/car1.png'
import car2 from './components/images/car2.png'
import car3 from './components/images/car3.png'
import car4 from './components/images/car4.png'
import car5 from './components/images/car5.png'

import car6 from './components/images/car6.png'
import car7 from './components/images/review1.jpg'
import car8 from './components/images/review2.jpg'
import car9 from './components/images/review3.png'
import car10 from './components/images/homeImage.png'

import user1 from './components/images/user1.png'
import user2 from './components/images/user2.png'
import user3 from './components/images/user3.png'


function App() {
  return (
    <div className="App">
      <FacebookPost
        profilePic={profilePic}
        title="Today had lunch at Pizza Hut"
        date={Date.now()}
        images={[
          `${car1}`,
          `${car2}`,
          `${car3}`,
          `${car4}`,
          `${car5}`,
        ]}
      />
      <FacebookPost
        profilePic={user1}
        title="Today had lunch at Pizza Hut"
        date={Date.now()}
        images={[
          `${car6}`,
          `${car7}`,
          `${car8}`,
          `${car9}`,
          `${car10}`,
        ]}
      />
      <FacebookPost
        profilePic={user2}
        title="Today had lunch at Pizza Hut"
        date={Date.now()}
        images={[
          `${car1}`,
          `${car2}`,
          `${car3}`,
          `${car4}`,
          `${car5}`,
        ]}
      />
      <FacebookPost
        profilePic={user3}
        title="Today had lunch at Pizza Hut"
        date={Date.now()}
        images={[
          `${car6}`,
          `${car7}`,
          `${car8}`,
          `${car9}`,
          `${car10}`,
        ]}
      />
      <FacebookPost
        profilePic={profilePic}
        title="Today had lunch at Pizza Hut"
        date={Date.now()}
        images={[
          `${car1}`,
          `${car2}`,
          `${car3}`,
          `${car4}`,
          `${car5}`,
        ]}
      />
      <FacebookPost
        profilePic={user1}
        title="Today had lunch at Pizza Hut"
        date={Date.now()}
        images={[
          `${car6}`,
          `${car7}`,
          `${car8}`,
          `${car9}`,
          `${car10}`,
        ]}
      />
      <FacebookPost
        profilePic={user2}
        title="Today had lunch at Pizza Hut"
        date={Date.now()}
        images={[
          `${car1}`,
          `${car2}`,
          `${car3}`,
          `${car4}`,
          `${car5}`,
        ]}
      />
      <FacebookPost
        profilePic={user3}
        title="Today had lunch at Pizza Hut"
        date={Date.now()}
        images={[
          `${car6}`,
          `${car7}`,
          `${car8}`,
          `${car9}`,
          `${car10}`,
        ]}
      />
    </div>
  );
}

export default App;
