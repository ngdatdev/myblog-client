import Header from "./Header";

function LandingLayout({ children }: { children: React.ReactNode }) {
    return <>
        <Header />
        {children}
    </>;
}

export default LandingLayout