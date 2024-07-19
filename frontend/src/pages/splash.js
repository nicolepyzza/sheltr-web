import Logo from "../components/logo";
import { useState, useEffect } from "react";
import { leapfrog } from 'ldrs';
leapfrog.register();

export default function Splash() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
        setLoading(false);
        }, 1500);
    }, []);

    const loader = (<l-leapfrog size="70" speed="2.5" color="#CFC6C3"></l-leapfrog>);

    const content = (
        <div>
            <Logo />
        </div>
    )
    return <div>{ loading ? loader : content }</div>
    
}