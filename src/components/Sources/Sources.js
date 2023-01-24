import React from 'react';
import { Line } from 'rc-progress';

const Sources = () => {
    return (
        <div className="SContainer p-5">
            <div className="top flex justify-between mb-10">
                <div className="title font-bold text-lg">Traffic Sources</div>
                <div className="lastSeen">Last 7 days</div>
            </div>
            <div className="bottom mb-7">
                <div className="up flex justify-between">
                    <div className="elem1 font-semibold">Direct</div>
                    <div className="elem2 font-semibold">1,43,882</div>
                </div>
                <div className="down">
                    <Line percent={80} strokeWidth={4} strokeColor="blue" />
                </div>
            </div>
            <div className="bottom mb-7">
                <div className="up flex justify-between">
                    <div className="elem1 font-semibold">Referal</div>
                    <div className="elem2 font-semibold">87,974</div>
                </div>
                <div className="down">
                    <Line percent={65} strokeWidth={4} strokeColor="blue" />
                </div>
            </div>
            <div className="bottom mb-7">
                <div className="up flex justify-between">
                    <div className="elem1 font-semibold">Social Media</div>
                    <div className="elem2 font-semibold">45,221</div>
                </div>
                <div className="down">
                    <Line percent={45} strokeWidth={4} strokeColor="blue" />
                </div>
            </div>
            <div className="bottom mb-7">
                <div className="up flex justify-between">
                    <div className="elem1 font-semibold">Twitter</div>
                    <div className="elem2 font-semibold">21,893</div>
                </div>
                <div className="down">
                    <Line percent={30} strokeWidth={4} strokeColor="blue" />
                </div>
            </div>
        </div>
    )
}

export default Sources