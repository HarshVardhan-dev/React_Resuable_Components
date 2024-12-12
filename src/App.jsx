import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PlaylistCard from "./components/PlayListCard/PlayListCard";
import TrelloBoard from "./components/TrelloBoard/TrelloBoard";
import LazyImageLoader from "./components/LazyImageLoader/LazyImageLoader";
import DateRangePicker from "./components/AirbnbDatePicker/DateRangePicker";
import SwipeableCards from "./components/TinderCards/SwipeableCards";

function App() {
  const sampleImages = [
    "https://picsum.photos/300/200?random=1",
    "https://picsum.photos/300/200?random=2",
    "https://picsum.photos/300/200?random=3",
    "https://picsum.photos/300/200?random=4",
  ];

  const handleDateChange = (range) => {
    console.log("Selected Range:", range);
  };
  return (
    <>
      <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
        <h1>Reusable Component Showcase</h1>

        {/* Spotify-Like Playlist Card */}
        <section>
          <h2>1. Spotify-Like Playlist Card</h2>
          <div
            style={{ display: "flex", gap: "20px", justifyContent: "center" }}
          >
            <PlaylistCard
              title="Chill Vibes"
              description="Relax and enjoy the music."
              image="https://picsum.photos/200"
              onPlay={() => console.log("Playing Chill Vibes")}
            />
            <PlaylistCard
              title="Workout Hits"
              description="Boost your energy!"
              image="https://picsum.photos/200"
              onPlay={() => console.log("Playing Workout Hits")}
            />
          </div>
        </section>

        {/* Trello-Like Drag and Drop Board */}
        <section>
          <h2>2. Trello-Like Drag and Drop Board</h2>
          <TrelloBoard />
        </section>

        <section>
          <h2>3. LinkedIn-Like Lazy Image Loader</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "20px",
            }}
          >
            {sampleImages.map((src, index) => (
              <LazyImageLoader
                key={index}
                imageSrc={src}
                altText={`Sample Image ${index + 1}`}
              />
            ))}
          </div>
        </section>
        <section>
          <h2>4. Airbnb-Like Date Range Picker</h2>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <DateRangePicker onChange={handleDateChange} />
          </div>
        </section>
        <section>
          <h2>5. Tinder-Like Swipeable Cards</h2>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <SwipeableCards />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
