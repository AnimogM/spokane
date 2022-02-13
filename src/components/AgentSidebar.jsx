import React from "react";
import { BsGrid1X2Fill, BsBag, BsGraphDown, BsListTask } from "react-icons/bs";
import { IoMdSettings, IoMdChatboxes } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const AgentSidebar = ({ setMobileTab }) => {
	const location = useLocation();
	const { pathname } = location;
	const splitLocation = pathname.split("/");
	const sidebar = [
		{ title: "Overview", icon: <BsGrid1X2Fill />, link: "agent-profile" },
		{ title: "Products", icon: <BsBag />, link: "agent-products" },
		{ title: "Orders", icon: <BsListTask />, link: "agent-orders" },
		{
			title: "Messages",
			icon: <IoMdChatboxes />,
			link: "agent-messages",
		},
		{
			title: "Statistics",
			icon: <BsGraphDown />,
			link: "agent-statistics",
		},
		{
			title: "Settings",
			icon: <IoMdSettings />,
			link: "agent-settings",
		},
	];
	return (
		<div className="rounded-lg py-8 px-5 bg-pur-50 lg:h-full">
			{sidebar.map((item) => {
				return (
					<button
						className="w-full"
						onClick={() => setMobileTab(false)}
					>
						<Link
							to={`/${item.link}`}
							className={`flex gap-5 text-secondary items-center mb-3 p-3 ${
								splitLocation[1] === item.link
									? "agent-sidebar"
									: ""
							}`}
						>
							<span className="text-base">{item.icon}</span>
							<span>{item.title}</span>
						</Link>
					</button>
				);
			})}
		</div>
	);
};

export default AgentSidebar;
