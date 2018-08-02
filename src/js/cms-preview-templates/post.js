import React from "react";
import format from "date-fns/format";

export default class PostPreview extends React.Component {
  render() {
    const {entry, widgetFor} = this.props;

    return <div className="w-100 center ph3 pv4">
      <h1 className="f2 lh-title b mt0 mb3">{ entry.getIn(["data", "title"])}</h1>
      <div className="w-100 flex justify-between grey-3">
        <div style={{
          width: "80px",
          height: "80px"
        }}></div>
        <p className="mt0">{ format(entry.getIn(["data", "date"]), "ddd, MMM D, YYYY") }</p>
        <p className="mt0">Read in x minutes</p>
      </div>
      <div className="w-100">
        { widgetFor("body") }
      </div>
    </div>;
  }
}
