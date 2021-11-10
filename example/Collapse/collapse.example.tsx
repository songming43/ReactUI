import React from "react";
import Collapse from "lib/Collapse/collapse";
import CollapseItem from "lib/Collapse/collapseItem";

const CollapseExample = () => {
  return (
    <div style={{width: '500px'}}>
      <Collapse>
        <CollapseItem title="内容1">1111</CollapseItem>
        <CollapseItem title="内容2">产生于 HYPERS 前端团队，同时也是面向企业级后台产品产生于 HYPERS 前端团队，同时也是面向企业级后台产品产生于 HYPERS 前端团队，同时也是面向企业级后台产品</CollapseItem>
        <CollapseItem title="内容3">33333</CollapseItem>
      </Collapse>

      <br/>

      <h2>只打开一个</h2>

      <Collapse single>
        <CollapseItem title="内容1">1111</CollapseItem>
        <CollapseItem title="内容2">2222</CollapseItem>
        <CollapseItem title="内容3">33333</CollapseItem>
      </Collapse>
    </div>
  );
};

export default CollapseExample;
