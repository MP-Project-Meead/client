import React from "react";
import "antd/dist/antd.css";
import "./style.css";
import { Collapse } from "antd";

const FAQs = () => {
  const { Panel } = Collapse;
  function callback(key) {
    console.log(key);
  }
  
  return (
    <Collapse
      defaultActiveKey={["1", "2", "3"]}
      onChange={callback}
      className="ContainerFAQs"
    >
      <Panel header="This is panel header 1" key="1" className="question">
        <p className="Answer">
          Here will be the common questions about the web.Here will be the
          common questions about the web.Here will be the common questions about
          the web.
        </p>
      </Panel>
      <Panel header="This is panel header 1" key="2" className="question">
        <p>Here will be the common questions about the web.</p>
      </Panel>
      <Panel header="This is panel header 1" key="3" className="question">
        <p>Here will be the common questions about the web.</p>
      </Panel>
      <Panel header="This is panel header 1" key="4" className="question">
        <p>Here will be the common questions about the web.</p>
      </Panel>
      <Panel header="This is panel header 1" key="5" className="question">
        <p>Here will be the common questions about the web.</p>
      </Panel>
      <Panel header="This is panel header 1" key="6" className="question">
        <p>Here will be the common questions about the web.</p>
      </Panel>
      <Panel header="This is panel header 1" key="7" className="question">
        <p>
          Here will be the common questions about the web.Here will be the
          common questions about the web.Here will be the common questions about
          the web.
        </p>
      </Panel>
      <Panel header="This is panel header 1" key="8" className="question">
        <p>Here will be the common questions about the web.</p>
      </Panel>
      <Panel header="This is panel header 1" key="9" className="question">
        <p>Here will be the common questions about the web.</p>
      </Panel>
      <Panel header="This is panel header 1" key="10" className="question">
        <p>Here will be the common questions about the web.</p>
      </Panel>
      <Panel header="This is panel header 1" key="11" className="question">
        <p>Here will be the common questions about the web.</p>
      </Panel>
    </Collapse>
  );
};

export default FAQs;
