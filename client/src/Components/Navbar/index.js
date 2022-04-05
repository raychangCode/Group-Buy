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
					<NavLink to="/Components/Update" activeStyle>
						Update
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
