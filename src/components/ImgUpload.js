import React, { useEffect, useState } from "react";
import { AiFillCamera } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { createImgUser } from "../actions/useraction";
import { JoinImg, JoinImgWrapper } from "../style/Join";

function ImgUpload({ isImgUpload }) {
  const dispatch = useDispatch();
  const [imgBase64, setImgBase64] = useState("");
  const [imgFile, setImgFile] = useState(null);

  const handleChangeFile = (e) => {
    let reader = new FileReader();

    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString());
      }
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      setImgFile(e.target.files[0]);
    }
  };

  useEffect(() => {
    if (isImgUpload) {
      const imgFormData = new FormData();
      imgFormData.append("image", imgFile);
      dispatch(createImgUser({ data: imgFormData }));
      console.log(imgFormData);
    }
  }, [imgFile, isImgUpload, dispatch]);
  return (
    <form encType="multipart/form-data">
      <div>
        <JoinImgWrapper>
          <input
            type="file"
            style={{
              width: "100%",
              height: "158px",
              opacity: 0,
            }}
            onChange={handleChangeFile}
          />
          <JoinImg>
            {imgFile ? (
              <img
                src={imgBase64}
                alt={imgBase64}
                style={{ width: "100%", height: "100%" }}
              />
            ) : (
              <>
                {" "}
                <AiFillCamera
                  style={{
                    width: "35px",
                    height: "35px",
                    color: "lightgrey",
                  }}
                />
                <div style={{ color: "lightgrey" }}>프로필 사진 업로드</div>
              </>
            )}
          </JoinImg>
        </JoinImgWrapper>
      </div>
    </form>
  );
}

export default ImgUpload;
