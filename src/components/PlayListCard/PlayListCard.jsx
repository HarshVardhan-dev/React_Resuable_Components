import styles from "./PlaylistCard.module.css";
// import placeholder from "../../assets/images/placeholder.png";

// eslint-disable-next-line react/prop-types
const PlaylistCard = ({ title, description, image, onPlay }) => {
  return (
    <div className={styles.card} onClick={onPlay}>
      <img src={image} alt="Playlist Cover" className={styles.image} />
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <button className={styles.playButton}>▶</button>
    </div>
  );
};

export default PlaylistCard;
