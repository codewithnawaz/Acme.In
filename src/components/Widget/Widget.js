import React from 'react'
import './Widget.scss';

const Widget = ({type}) => {
    let data;
  switch(type){
    case"Today's Sale":
    data={
      title:"Today's Sale",
      value:"$ 12,426",
      perc:"36"
    };
    break;
    case"Total Sales":
    data={
      title:"Total Sales",
      value:"$ 2,38,485",
      perc:"36"
    };
    break;
    case"Total Orders":
    data={
      title:"Total Orders",
      value:"84,382",
      perc:"36"
    };
    break;
    case"Total Customers":
    data={
      title:"Total Customers",
      value:"33,493",
      perc:"36"
    };
    break;
    default:
      return data;
  }

    return (
        <div className="WidgetContainer w-72 rounded-lg">
            <div className="top">
                <div className="title text-lg text-zinc-400 font-semibold">{data.title}</div>
            </div>
            <div className="bottom">
                <div className="amount text-xl text-black font-bold">{data.value}</div>
                <div className="perc flex text-lg font-semibold text-green-600">+{data.perc}%
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Widget