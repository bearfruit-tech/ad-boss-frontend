import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@mantine/core";
import Home from "../components/home/home";
import AuthedHeader from "../components/authed-header/authed-header";

export default function Page() {
  return (
    <>
        <AuthedHeader />
      <Home />
    </>
  );
}
