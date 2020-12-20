import React from "react";
import Icon from "lib/Icon/icon";
import "./icon.demo.scss";

const IconExample: React.FunctionComponent = () => {
  const iconNames = [
    "view_off",
    "view",
    "user",
    "upload",
    "up_to_top",
    "unlock",
    "time",
    "taobao",
    "sub_account",
    "star_filled",
    "star",
    "social_youtube",
    "social_wechat",
    "social_twitter",
    "social_stackflow",
    "social_sina",
    "social_server_fault",
    "social_naver",
    "social_linkedin",
    "social_google",
    "social_github",
    "social_fb",
    "show_more",
    "show_less",
    "share",
    "setting",
    "search",
    "renew",
    "region",
    "refresh",
    "record",
    "play",
    "phonecall_off",
    "phonecall",
    "partner",
    "page_turning_right",
    "page_turning_left",
    "page_last",
    "page_first",
    "order_unread",
    "order",
    "notification_off",
    "notification",
    "message_unread",
    "message",
    "lock",
    "list",
    "link",
    "like_filled",
    "like",
    "international",
    "info_filled",
    "info",
    "image",
    "help_filled",
    "help",
    "go-to-link",
    "forbidden_filled",
    "forbidden",
    "flow",
    "filter",
    "email",
    "edit",
    "download",
    "down_to_bottom",
    "discount",
    "dingtalk",
    "customer_service",
    "credits",
    "copy",
    "close_filled",
    "close",
    "check_filled",
    "check",
    "caution_filled",
    "caution",
    "cart_empty",
    "cart",
    "calculator",
    "benefits",
    "balance",
    "arrow_up",
    "arrow_right",
    "arrow_down",
    "applets",
    "alipay",
    "ET",
    "1688"
  ];

  const viewIcon = iconNames.map(item => {
    return (
      <li key={item}>
        <Icon name={item} />
        <span>{item}</span>
      </li>
    );
  });

  return (
    <div className="ym-icon-wrap">
      <ul>{viewIcon}</ul>
    </div>
  );
};

export default IconExample;
