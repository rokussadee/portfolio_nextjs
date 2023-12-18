import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import { Head } from "./head";

export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative flex flex-col h-screen">
			<Head />
			<main className="container mr-auto ml-auto  md:px-6 flex-grow">
			<Navbar />
				{children}
			</main>
			<footer className="w-full flex items-center justify-center py-3 ">
					<span className="text-default-600">🧑🏼‍💻 with ❤️ by&nbsp;</span>
					<p className="text-primary">Rokus Cornelis Sadee</p>
			</footer>
		</div>
	);
}
