import { Skeleton, Space } from "antd";
import React from "react";

export const UserSkeleton = () => {
  return (
    <Space
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        width: "33%",
      }}
    >
      <Skeleton.Avatar size={200} shape={"circle"} active={true} />

      <Skeleton.Input size={20} active={true} />
      <Skeleton.Button size={20} active={true} />
      <Skeleton.Input size={20} active={true} />
      <Skeleton.Button size={20} active={true} />
      <Skeleton.Input size={20} active={true} />
    </Space>
  );
};
