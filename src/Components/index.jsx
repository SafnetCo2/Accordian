import React, { useState } from "react";


function handlesingleselection(getCurentId, setSelected, selected) {
  setSelected(getCurentId === selected ? null : getCurentId);
}

function Accordian({ data }) {
    const [selected, setSelected] = useState(null);
    const [enableMultiselection, setEnableMultselected] = useState(false);
    const [multipleselect, setMultselectedenabled] = useState([])
  
  return (
      <div className="wrapper">
          <button onClick={enableMultiselection(!setEnableMultselected)}>multiselection</button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div onClick={() => handlesingleselection(dataItem.id, setSelected, selected)} className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}

export default Accordian;
