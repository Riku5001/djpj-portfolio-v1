import { Stack } from '@mui/material';
import NavMenuItem from './NavMenuItem';

export default function NavMenu() {
	return (
		<Stack
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <NavMenuItem href="#work">
        Work
      </NavMenuItem>
      <NavMenuItem href="#skills">
        Skills
      </NavMenuItem>
      <NavMenuItem href="#contact">
        Contact
      </NavMenuItem>
		</Stack>
	);
}