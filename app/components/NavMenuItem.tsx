import LinkNextMui from "./LinkNextMui";

export default function NavMenuItem({ href, children }: { href: string, children: any }) {
  return (
    <LinkNextMui href={href} sx={[
      {
        listStyle: "none",
        textDecoration: "none",
        padding: '5px 15px',
        border: '1px solid',
        borderColor: 'secondary.main',
        borderRadius: '10px',
        color: 'secondary.contrastText'
      },
      {
        '&:hover': {
          border: "1px solid",
          borderColor: 'secondary.dark'
        }
      }
    ]}>
      { children }
    </LinkNextMui>
  );
}