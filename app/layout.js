import "../styles/globals.css";
			export const metadata = {
				title: "ECLIPSE",
				icons: {
					icon: "/logo-img.png",
				}
			};
			export default function RootLayout({ children }) {
				return (
					<html>
						<body>{children}</body>
					</html>
);
		}
