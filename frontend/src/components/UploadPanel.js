import React, { useState } from "react";
import "../components/UploadPanel.css";

const UploadPanel = ({ onFileUpload, showPanels }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    setSelectedFile(file ? file.path : "No file chosen");

    if (file && file.type === "application/pdf") {
      const formData = new FormData();
      formData.append("file", file);

      fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData
      })
        .then(response => {
          if (response.ok) {
            console.log("File uploaded successfully");
            // Fetch topics from the backend
            fetch("http://localhost:5000/get_topics")
              .then(response => response.json())
              .then(data => {
                // Assume the returned data is either an array of topics
                // or an object with a 'topics' property
                const topics = data.topics || data;
                onFileUpload(file, topics);
              })
              .catch(error => {
                console.error("Error fetching topics:", error);
                onFileUpload(file, []);
              });
          } else {
            console.error("File upload failed");
            onFileUpload(file, []);
          }
        })
        .catch(error => {
          console.error("Error during file upload:", error);
          onFileUpload(file, []);
        });
    } else {
      // For non-PDF files or if no file was selected, call onFileUpload with empty topics
      onFileUpload(file, []);
    }
  };

  return (
    <section className={`upload-section ${showPanels ? "small-upload" : ""}`}>
      {!showPanels && (
        <div className="upload-message-container">
          <h1 className="upload-title">AI-Powered Study Companion</h1>
          <p className="upload-subtitle">
            Upload your notes, slides, or documents and watch l(ai)lani transform them into
            interactive flashcards and insightful research materials—effortlessly
          </p>
        </div>
      )}
      <div className="upload-box">
        <label htmlFor="file-upload" className="upload-btn">Upload File</label>
        <input
          type="file"
          id="file-upload"
          accept=".pdf, .doc, .docx, .txt, .md"
          onChange={handleFileChange}
          hidden
        />
      </div>
    </section>
  );
};

export default UploadPanel;
