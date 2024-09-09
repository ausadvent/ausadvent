import Clarity from "./Clarity";
import ReactGA from 'react-ga4'

const Metrics = () => (
    <>
        <Clarity />
    </>
)

export default Metrics

const trackGAEvent = (category:any, action: any, label:any) => {
    ReactGA.event({
        category: category,
        action: action,
        label: label
    });
};


export { trackGAEvent };