import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
					<NavLink to="/" activeStyle>
						Home
					</NavLink>
					<NavLink to="/Insert" activeStyle>
						Post
					</NavLink>
					<NavLink to='/Components/search' activeStyle>
						Search
					</NavLink>
					<NavLink to="/Components/Info" activeStyle>
						Personal Info
					</NavLink>
					<NavLink to="/Components/Update" activeStyle>
						Edit
					</NavLink>
					<NavLink to="/Components/Analysis" activeStyle>
						Analysis
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
