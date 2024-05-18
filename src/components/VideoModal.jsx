import React from "react";
import Modal from "react-modal";
import video from "../assets/video/kazzouzi_mograph.mp4";
import "../App.css";

const VideoModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Video Modal"
      className="custom-modal"
    >
      <div
        className="modal-content"
        style={{
          width: "800px",
          position: "absolute",
          top: "55%",
          left: "50%",
          transform: "translateX(-50%) translateY(-50%)",
          boxShadow: "0 0 15px rgba(0, 0, 0, 0.75)",
        }}
      >
        <button onClick={onClose} className="video-overlay-close">
          &times;
        </button>
        <iframe
          width="360"
          height="300"
          src={video}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </Modal>
  );
};
export default VideoModal;
