import React, { useEffect, useState } from "react";
// import logo from "../../logo.svg";
// import '../../App.css';

function Submit({ apiResponse }) {
  const [isSending, setIsSending] = useState(false);
  const [postId, setPostId] = useState("");
  const [postName, setPostName] = useState("");
  const [postImage, setPostImage] = useState("");
  const [postColor, setPostColor] = useState("");
  const [postType, setPostType] = useState("");

  function handleNameChange(e) {
    setPostName(e.target.value);
  }
  function handleImageChange(e) {
    setPostImage(e.target.value);
  }
  function handleColorChange(e) {
    setPostColor(e.target.value);
  }
  function handleTypeChange(e) {
    setPostType(e.target.value);
  }

  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        stain_name: postName,
        stain_type: postType,
        stain_image: postImage,
        stain_color: postColor,
      }),
    };
    fetch("https://localhost:9000/stain/stain", requestOptions)
      .then((response) => response.json())
      .then((data) => setPostId(data.stain_id));
    console.log("added new stain with stain_id of: " + postId);
    setIsSending(false);

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, [postName, postType, postImage, postColor, isSending]);

  function clickSetSending() {
    setIsSending(true);
  }

  console.log(apiResponse);
  //console.log("6: " + apiResponse);
  return (
    <div>
      <header className="submit-header">
        <p>
          Submit a stain for analysis: please don't include crime scene
          evidence!
        </p>
        <br></br>
        <input
          id="name"
          placeholder="name"
          type="text"
          onChange={handleNameChange}
        />
        <input
          id="type"
          placeholder="type"
          type="text"
          onChange={handleTypeChange}
        />
        <input
          id="image"
          placeholder="image"
          type="text"
          onChange={handleImageChange}
        />
        <input
          id="color"
          placeholder="color"
          type="text"
          onChange={handleColorChange}
        />
        <button id="submit-button" onClick={clickSetSending}>
          Submit
        </button>
      </header>
    </div>
  );
}

export default Submit;
