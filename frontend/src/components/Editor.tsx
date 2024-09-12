/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import SimpleImage from "@editorjs/simple-image";
import Checklist from "@editorjs/checklist";
import LinkTool from "@editorjs/link";
import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
import Delimiter from "@editorjs/delimiter";
import Warning from "@editorjs/warning";
import Marker from "@editorjs/marker";
import InlineCode from "@editorjs/inline-code";
import List from "@editorjs/list";
import OpenseaTool from "@editorjs/opensea";
import Underline from "@editorjs/underline";
import AttachesTool from "@editorjs/attaches";
import CodeBox from "@bomdi/codebox";
import AudioPlayer from "editorjs-audio-player";
import ImageGallery from "@kiberpro/editorjs-gallery";
import SKMFlipBox from "skm-flipbox";
import "./styles/Editor.scss";
const DEFAULT_INITIAL_DATA = {
  time: new Date().getTime(),
  blocks: [
    {
      type: "header",
      data: {
        text: "This is my awesome editor!",
        level: 1,
      },
    },
  ],
};

const EditorComponent = () => {
  const ejInstance = useRef();

  const initEditor = () => {
    const editor = new EditorJS({
      holder: "editorjs", //Where do you want to place the editor give the id of it
      onReady: () => {
        ejInstance.current = editor; //Setting the useRef
      },
      autofocus: true, //The autofocus option allows you to automatically place the caret (text cursor) into the editor when it is initialized. This means that as soon as the editor is loaded, the text input field within the editor will be active and ready for the user to start typing without requiring an additional click.
      data: DEFAULT_INITIAL_DATA,
      onChange: async () => {
        const content = await editor.save(); // save the content
        const timestamp = Number(content.time);
        const date = new Date(timestamp);
        const dateString = date.toISOString().split('T')[0];
        const timeString = date.toISOString().split('T')[1].split('.')[0];
        console.log(timeString);

        console.log(dateString);
        console.log(date.toString());
      },
      tools: {
        header: Header,
        image: SimpleImage,
        list: List,
        checklist: Checklist,
        quote: Quote,
        warning: Warning,
        marker: Marker,
        delimiter: Delimiter,
        inlineCode: InlineCode,
        linkTool: LinkTool,
        embed: Embed,
        table: Table,
        opensea: OpenseaTool,
        underline: Underline,
        attaches: AttachesTool,
        codebox: CodeBox,
        audioPlayer: AudioPlayer,
        imageGallery: ImageGallery,
        carousel: SKMFlipBox,
      },
    });
  };

  // This will run only once
  useEffect(() => {
    if (ejInstance.current === null) {
      initEditor();
    }

    return () => {
      ejInstance?.current?.destroy();
      ejInstance.current = null;
    };
  }, []);

  return <div id="editorjs"></div>;
};

export default EditorComponent;
