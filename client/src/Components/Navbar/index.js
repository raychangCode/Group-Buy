import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

function logout() {
	window.localStorage.clear();
	window.location.reload();
}

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
					<NavLink to="/Components/UserAnalysis" activeStyle>
						User Analysis
					</NavLink>
					<div className="Logout">
						<div>
							<button onClick={logout}>Logout</button>
						</div>
					</div>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
