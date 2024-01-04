/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import React from "react";

export default function TripGuide(props) {
  let newDescription = "";
  if (props.description.length > 100) {
    newDescription = props.description.slice(0, 100);
  } else {
    newDescription = props.description;
  }
  return (
    <div
      className="block-travel"
      css={css`
        display: flex;
        flex-direction: row;
        width: 80vw;
        height: 250px;
        box-sizing: border-box;
        margin: 30px;
      `}
    >
      <section
        className="main-picture"
        css={css`
          display: flex;
          flex: 3;
          justify-content: center;
          align-items: center;
        `}
      >
        <img
          src={props.extraPhoto}
          css={css`
            display: inline;
            width: 90%;
            height: 200px;
          `}
        ></img>
      </section>
      <section
        className="details"
        css={css`
          display: flex;
          flex: 7;
          flex-direction: column;
        `}
      >
        <h3
          css={css`
            margin: 0px;
          `}
        >
          {props.title}
        </h3>
        <p
          css={css`
            margin: 0px;
          `}
        >
          {newDescription}
        </p>
        <a href={props.url} target="_blank">
          อ่านต่อ
        </a>
        <div
          css={css`
            display: flex;
            gap: 10px;
          `}
        >
          <span>หมวด</span>
          {props.tag.map((item, index, array) => {
            return index == array.length - 1 ? (
              <span key={index}>และ {item}</span>
            ) : (
              <span key={index}>{item}</span>
            );
          })}
        </div>
        <div
          css={css`
            display: flex;
            gap: 20px;
          `}
        >
          {props.photos.map((item, index) => {
            return (
              <img
                key={index}
                src={item}
                css={css`
                  display: inline;
                  width: 50%;
                  height: 50%;
                  box-sizing: border-box;
                `}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
