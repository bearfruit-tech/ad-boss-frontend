"use client";

import { Button, Container, Group, ActionIcon } from "@mantine/core";
import { IconFingerprint, IconAppWindow, IconArticleFilled } from '@tabler/icons-react';
import Image from "next/image";

const AuthedHeader = () => {
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
          <img
            src="/adboss-logo.png"
            alt="AdBOSS Media Group Logo"
            width={180}
            className="mr-2"
          />
          <Group>
          <ActionIcon autoContrast aria-label="autoContrast action icon" size="lg">
        <IconArticleFilled size={20} />
      </ActionIcon>
          </Group>
        </div>
      </Container>
    </div>
  );
};

export default AuthedHeader;
