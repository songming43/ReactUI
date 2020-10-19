import React from "react";
import Button, { ButtonSize } from "./button";

const ButtonExample: React.FunctionComponent = () => {
  const fn = e => {
    console.log(e, '1212');

  }
  return (
    <div>
      <Button>普通按钮</Button>
      <Button level="primary">提醒按钮</Button>
      <Button level="danger">提醒按钮</Button>
      <Button level="link" href="baidu.com">
        链接按钮
      </Button>
      <Button level="primary" disabled>
        链接按钮
      </Button>

      <div>
        <br />
        <Button level="primary" block onClick={fn}>
          block 按钮
        </Button>
      </div>
      <br />
      <Button level="primary" size="lg">
        large按钮
      </Button>
      <Button level="primary" size="sm">
        sm按钮
      </Button>
      <Button level="primary" size="xs">
        xs按钮
      </Button>
      <Button level="primary" size={ButtonSize.Large}>
        xs按钮
      </Button>
    </div>
  );
};

export default ButtonExample;
