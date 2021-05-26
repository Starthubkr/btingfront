import { Editor } from "react-draft-wysiwyg";
import React from "react";
import { AiOutlineUp } from "react-icons/ai";
import {
  MentorInfoSec,
  MentorInfoSecSub,
  MentorInputWrapper,
} from "../style/MentorCreate";
import { useCallback } from "react";

function MentorContent({
  mentorCon,
  mentorConUD,
  editor,
  onEditorStateChange,
}) {
  const onMentorCon = useCallback(() => {
    if (mentorCon.current.classList.contains("offMentorCon")) {
      mentorCon.current.classList.remove("offMentorCon");
      mentorCon.current.classList.add("onMentorCon");
      mentorConUD.current.classList.remove("upMentorCon");
    } else {
      mentorCon.current.classList.remove("mentorCon");
      mentorCon.current.classList.remove("onMentorCon");
      mentorCon.current.classList.add("offMentorCon");
      mentorConUD.current.classList.add("upMentorCon");
    }
  }, [mentorCon, mentorConUD]);
  return (
    <div className="mentorCon" ref={mentorCon}>
      <MentorInputWrapper>
        <MentorInfoSec>3. 멘토링 내용</MentorInfoSec>
        <MentorInfoSecSub ref={mentorConUD}>
          <AiOutlineUp onClick={onMentorCon} />
        </MentorInfoSecSub>
      </MentorInputWrapper>
      <div>
        <Editor
          wrapperClassName="wrapper-class"
          editorClassName="editor"
          toolbarClassName="toolbar-class"
          toolbar={{
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: false },
          }}
          placeholder="내용을 입력해주세요."
          localization={{ locale: "ko" }}
          editorState={editor}
          onEditorStateChange={onEditorStateChange}
        />
      </div>
    </div>
  );
}

export default MentorContent;
