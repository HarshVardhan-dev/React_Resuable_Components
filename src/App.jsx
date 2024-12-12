import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PlaylistCard from "./components/PlayListCard/PlayListCard";

function App() {
  const [count, setCount] = useState(0);
  const handlePlay = () => console.log("Playing Playlist...");

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
      </div>
    </>
  );
}

export default App;
