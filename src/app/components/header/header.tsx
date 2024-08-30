"use client";

import { Button, Container, Group } from "@mantine/core";
import Image from "next/image";

const Header = () => {
  const redirectTologin = () => {
    location.href = "login";
  };

  return (
    <div>
      <Container py="md" px={20} size="lg">
        <div
          className="header"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image
            src="/adboss-logo.png"
            alt="AdBOSS Media Group Logo"
            width={200}
            height={70}
            className="mr-2"
          />
          <Group>
            <Button onClick={() => redirectTologin()} variant="subtle">
              Login
            </Button>
            <Button style={{ backgroundColor: "#e4bb90" }}>Get started</Button>
          </Group>
        </div>
      </Container>
    </div>
  );
};

export default Header;
