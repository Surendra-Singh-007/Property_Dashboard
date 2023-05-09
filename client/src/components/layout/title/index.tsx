import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";

import { logo, castle } from 'assets';

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={logo} alt="Castle" width="48px" height="48px" />
        ) : (
          <img src={castle} alt="Refine logo" width="140px" />
        )}
      </Link>
    </Button>
  );
};
