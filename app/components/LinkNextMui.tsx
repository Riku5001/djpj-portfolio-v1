import NextLink from "next/link";
import { Link as MuiLink } from "@mui/material";

export default function LinkNextMui({ href, sx, children }: { href: string, sx?: any, children: any}) {
  return (
    <MuiLink component={NextLink} href={href} variant="button" sx={sx}>
      { children }
    </MuiLink>
  );
}