import { Box, List, Stack, Typography } from "@mui/material";
import Image from "next/image";

import Link from "next/link";
import { useEffect, useState } from "react";
import Divider from "@mui/material/Divider";
import SidebarItem from "./SidebarItem";

const SideBar = () => {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {}, []);

  return (
    <Box>
      <Stack
        sx={{
          py: 1,
          mt: 1,
        }}
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
        component={Link}
        href="/"
      >
        <p>Image</p>
        {/* <Image src="user" width={40} height={40} alt="logo" /> */}
        <Typography
          variant="h6"
          component="h1"
          sx={{
            cursor: "pointer",
          }}
        >
          PH Health Care
        </Typography>
      </Stack>
      {/* <List>
        {drawerItems(userRole as UserRole).map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </List> */}
      <SidebarItem />
      <Divider />
    </Box>
  );
};

export default SideBar;
