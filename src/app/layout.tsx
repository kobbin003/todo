import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "TODO_APP",
	description: "Learning nextjs by this todao app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} bg-slate-800 h-screen container mx-auto p-4 text-slate-100`}
			>
				{children}
			</body>
		</html>
	);
}
