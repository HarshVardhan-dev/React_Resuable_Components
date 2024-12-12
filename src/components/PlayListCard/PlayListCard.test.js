import { render, screen, fireEvent } from "@testing-library/react";
import PlaylistCard from "./PlaylistCard";

test("renders playlist card with title and description", () => {
  render(<PlaylistCard title="Test Playlist" description="Test Description" />);
  expect(screen.getByText("Test Playlist")).toBeInTheDocument();
  expect(screen.getByText("Test Description")).toBeInTheDocument();
});

test("triggers onPlay callback when clicked", () => {
  const handlePlay = jest.fn();
  render(<PlaylistCard title="Play Me" onPlay={handlePlay} />);
  fireEvent.click(screen.getByRole("button"));
  expect(handlePlay).toHaveBeenCalledTimes(1);
});
