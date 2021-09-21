import React from "react";
import { Checkbox, Group } from "lib/Checkbox";

const CheckboxDemo = () => {
  const data = ["苹果", "香蕉", "句子"];
  const data1 = [
    { label: "2322", value: "啃死" },
    { label: "2322", value: "啃死1" },
    { label: "2322", value: "啃死2" }
  ];
  const handleTestChange = (e: any) => {
    console.log(e.target.checked, e.target.value, e.target);
  };
  return (
    <>
      <br />
      <Checkbox onChange={handleTestChange} value={"我是,,,"}></Checkbox>
      <Checkbox onChange={handleTestChange}>苹果</Checkbox>
      <Checkbox />
      <br />
      <Checkbox defaultChecked checked={false}>
        梨子
      </Checkbox>
      <br />
      <Checkbox onChange={handleTestChange}>香蕉</Checkbox>
      <br />
      <Checkbox disabled>栗子</Checkbox>
      <br />
      <Checkbox defaultChecked disabled></Checkbox>
      <br />
      <Checkbox onChange={handleTestChange}>多选框111</Checkbox>
      <br />
      <Group dataSource={data}></Group>
      <Group dataSource={data1}></Group>
    </>
  );
};

export default CheckboxDemo;