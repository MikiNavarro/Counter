import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { styled } from "styled-components";
import Counter from "../components/Counter/Counter";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Title>Counter</Title>
      <Counter />
    </Layout>
  );
};

const Title = styled("h1")({});

const Layout = styled("div")({
  color: "#232129",
  paddingTop: 100,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: 10,
  justifyContent: "center",
  alignItems: "center",
});

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
