import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/header.css"
const Header = () => {
  return (
    <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>
      <div className="header">
<div>

      <Button variant={"unstyled"} color={"white"}>
        <Link to="/">Home</Link>
      </Button>
</div>
<div>

      <Button variant={"unstyled"} color={"white"}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>
</div>
<div>

      <Button variant={"unstyled"} color={"white"}>
        <Link to="/coins">Coins</Link>
      </Button>
</div>
    </div>
    </HStack>
  );
};

export default Header;
