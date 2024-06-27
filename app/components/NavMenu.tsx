import { Stack } from '@mui/material';
import NavMenuItem from './NavMenuItem';

export default function NavMenu() {
	return (
		<Stack
      direction="row"
      justifyContent="space-evenly"
      width='100%'
      maxWidth='400px'
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