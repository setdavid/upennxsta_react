import React from "react";
import ResponsiveImage from "../../Features/ResponsiveImage";
import { AiOutlineClockCircle } from "react-icons/ai";

const RecentPostingsComp = (props) => {
    const { id, title, subtitle, date, text, images } = props;

    let paragraphCount = 0;
    const incrParagraphCount = () => {
        const i = paragraphCount;
        paragraphCount += 1;
        return i;
    };

    return (
        <div id={id ? id : ""} className="ruc pb-0">
            <hr />
            <div className="row mar-top-1p5rem">
                <div className="col-12 pb-0">
                    <div className="row">
                        <div className="col-12 pad-bot-1p5rem">
                            <div className="h3">{title}</div>
                            <div className="h6">{subtitle}</div>
                            <div style={{ fontSize: "0.75rem" }} className="p mb-0"><AiOutlineClockCircle />&nbsp;&nbsp;{date}</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            {images ? (<ResponsiveImage url={images[0]} minHeight="350px" backgroundSize="contain" float="right" />) : ""}
                            {text.map(paragraph => (
                                <p key={incrParagraphCount()}>
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecentPostingsComp;