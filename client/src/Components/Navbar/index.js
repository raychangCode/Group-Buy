import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/Insert" activeStyle>
			Insert
		</NavLink>
		<NavLink to='/Components/search' activeStyle>
			Search
		</NavLink>
		{/* <NavLink to="/blogs" activeStyle>
			Blogs
		</NavLink>
		<NavLink to="/sign-up" activeStyle>
			Sign Up
		</NavLink> */}
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;