'use client'

import { useEffect } from "react";
import Clarity from "./Clarity";
import ReactGA from 'react-ga4'

const Metrics = () => {
    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: "/" });
    }, [])

    return (
        <>
            <Clarity />
        </>
    )
}

export default Metrics

const trackGAEvent = (category:any, action: any, label:any) => {
    ReactGA.event({
        category: category,
        action: action,
        label: label
    });
};


export { trackGAEvent };
