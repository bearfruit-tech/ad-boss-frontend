import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@mantine/core";
import Header from "../components/header/header";
import Onboarding from "../components/onboarding/onboarding";

export default function Home() {
  return (
    <>
      <Header />
      <Onboarding />
    </>
  );
}
