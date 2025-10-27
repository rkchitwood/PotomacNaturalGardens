import NavBase from './NavBase'

export default function NavBar() {

  return (
    <NavBase 
        linkLabels={[ 
            { link: "/", label: "Home" },
            { link: "/about", label: "About"},
            { link: "/gallery", label: "Gallery"},
            { link: "/contact", label: "Contact"}
        ]}>
    </NavBase>
  );
}