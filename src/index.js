import React from "react";
import ReactDOM from "react-dom";
import {
  Button,
  DatePicker,
  Col,
  Row,
  Avatar,
  Divider,
  Modal,
  Switch
} from "antd";
import "antd/dist/antd.css";
import "./index.css";

import {
  Layout,
  Menu,
  Breadcrumb,
  Icon,
  Form,
  Radio,
  Select,
  Checkbox,
  Input,
  Popover,
  Progress
} from "antd";
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component {
  state = {
    includeOffer: false,
    visible: false
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  onChange = checked => {
    this.setState({ includeOffer: checked });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  render() {
    return (
      <div className="App">
        <Layout style={{ minHeight: "100vh" }}>
          <Header className="header" style={{ padding: 0 }}>
            <div
              style={{
                padding: "0px 20px",
                maxWidth: "1400px",
                margin: "auto",
                width: "100%"
              }}
            >
              <div className="logo" />
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={["2"]}
                style={{ lineHeight: "64px" }}
              >
                <div style={{ float: "right" }}>
                  <Avatar icon="user" />
                </div>
              </Menu>
            </div>
          </Header>

          <Content
            style={{
              padding: "30px 30px",
              maxWidth: "1400px",
              margin: "auto",
              width: "100%"
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                padding: "10px 20px",
                paddingBottom: 0
              }}
            >
              <Row type="flex" align="middle">
                <Col span={19}>
                  <h1>Create Drop</h1>
                </Col>
                <Col span={5} style={{ textAlign: "right" }}>
                  <Progress
                    percent={30}
                    size="small"
                    strokeColor="rgb(74, 158, 159)"
                  />
                </Col>
              </Row>
            </div>
            <Row type="flex" style={{ backgroundColor: "white" }}>
              <Divider style={{ marginTop: "10px", marginBottom: "0px" }} />
              <Col md={20} sm={24}>
                <Row
                  style={{
                    backgroundColor: "white"
                  }}
                >
                  <Col
                    md={9}
                    lg={8}
                    sm={24}
                    style={{ borderRight: "1px solid #E8E8E8" }}
                  >
                    <div
                      style={{
                        padding: "16px 16px 0px 16px"
                        // borderBottom: "1px dashed lightgray"
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Icon
                          type="check-circle"
                          style={{
                            color: "#4A9E9F",
                            fontSize: 14,
                            marginRight: 8
                          }}
                        />
                        <span
                          style={{
                            fontSize: 16,
                            fontWeight: 600,
                            color: "#000000"
                          }}
                        >
                          Drop Description{" "}
                        </span>
                      </div>
                      <div>
                        <Form layout="vertical" onSubmit={this.handleSubmit}>
                          <Form.Item
                            label="Name"
                            style={{ margin: "18px 0 12px 24px" }}
                          >
                            <Input
                              placeholder="Enter drop name"
                              value="Brand_2019-01-15"
                              style={{ width: "90%" }}
                            />
                          </Form.Item>
                          <Form.Item
                            label="Tags"
                            style={{ margin: "6px 0 12px 24px" }}
                          >
                            <Select
                              mode="tags"
                              style={{ width: "90%" }}
                              placeholder="Type in tags"
                              dropdownStyle={{ display: "none" }}
                              value={["holiday"]}
                            />
                          </Form.Item>
                        </Form>
                      </div>
                    </div>

                    <div
                      style={{
                        padding: "6px 16px 0px 16px"
                        //borderBottom: "1px dashed lightgray"
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Icon
                          type="check-circle"
                          style={{
                            color: "lightgray",
                            fontSize: 14,
                            marginRight: 8
                          }}
                        />
                        <span
                          style={{
                            fontSize: 16,
                            color: "#000000",
                            fontWeight: 600
                            //color: "#4A9E9F"
                          }}
                        >
                          Postcard{" "}
                        </span>
                      </div>
                      <div>
                        <Form layout="vertical" onSubmit={this.handleSubmit}>
                          <Row>
                            <Col span={12}>
                              <Form.Item
                                label="Size"
                                style={{ margin: "18px 0 12px 24px" }}
                              >
                                <RadioGroup defaultValue="4 X 6">
                                  <RadioButton value="4 X 6">4 X 6</RadioButton>
                                  <RadioButton value="5 X 7">5 X 7</RadioButton>
                                </RadioGroup>
                              </Form.Item>
                            </Col>
                            <Col span={11}>
                              <Form.Item
                                label="Finish"
                                style={{ margin: "18px 0 12px 8px" }}
                              >
                                <Select defaultValue="please select">
                                  <Option value="Matte">Matte</Option>
                                  <Option value="Glossy">Glossy</Option>
                                  <Option value="Regular">Regular</Option>
                                </Select>
                              </Form.Item>
                            </Col>
                          </Row>
                        </Form>
                      </div>
                    </div>
                    <div
                      style={{
                        padding: "16px 16px 16px 16px"
                        //opacity: this.state.includeOffer ? 1 : 0.5
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Icon
                          type="check-circle"
                          style={{
                            color: "lightgray",
                            fontSize: 16,
                            marginRight: 8
                          }}
                        />
                        <div
                          style={{
                            fontSize: 16,
                            fontWeight: 600,
                            //color: "#4A9E9F"
                            display: "flex",
                            alignItems: "center",
                            color: "#000000"
                          }}
                        >
                          Custom Offer Code{" "}
                        </div>
                      </div>
                      <div style={{ padding: "10px 24px" }}>
                        <Switch
                          checkedChildren=" Yes"
                          unCheckedChildren=" No"
                          onChange={this.onChange}
                          style={{ minWidth: 60 }}
                        />

                        <Button
                          icon="barcode"
                          size="small"
                          style={{ marginLeft: 12 }}
                          disabled={this.state.includeOffer ? false : true}
                        >
                          Set placeholder
                        </Button>
                      </div>
                    </div>
                    <div
                      style={{
                        padding: "6px 16px 0px 16px"
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Icon
                          type="check-circle"
                          style={{
                            color: "lightgray",
                            fontSize: 14,
                            marginRight: 8
                          }}
                        />
                        <span
                          style={{
                            fontSize: 16,
                            fontWeight: 600,
                            color: "#000000"
                          }}
                        >
                          Mailing List{" "}
                        </span>
                        <span>
                          {" "}
                          {this.state.includeOffer
                            ? " Alert for offer code col."
                            : ""}
                        </span>
                      </div>
                      <div>
                        <Form layout="vertical" onSubmit={this.handleSubmit}>
                          <Form.Item style={{ margin: "18px 0 12px 24px" }}>
                            <Select
                              style={{ width: "90%" }}
                              defaultValue="Add a list"
                            >
                              <Option value="upload">
                                <b>
                                  <Icon type="upload" /> Upload New List
                                </b>
                              </Option>
                              <Option value="Customer list 1">
                                Customer list 1
                              </Option>
                              <Option value="Customer list 2">
                                Customer list 2
                              </Option>
                              <Option value="Customer list 3">
                                Customer list 3
                              </Option>
                            </Select>
                          </Form.Item>
                        </Form>
                      </div>
                    </div>
                  </Col>

                  <Col md={15} sm={24}>
                    <div
                      style={{
                        padding: "16px 16px 16px 16px"
                        //borderBottom: "1px dashed lightgray"
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Icon
                          type="check-circle"
                          style={{
                            color: "lightgray",
                            fontSize: 14,
                            marginRight: 8
                          }}
                        />
                        <span
                          style={{
                            fontSize: 16,
                            fontWeight: 600,
                            color: "#000000"
                          }}
                        >
                          Add Creative{" "}
                          <Popover
                            content={
                              <div style={{ fontSize: 12 }}>
                                <div>Front: 2175px x 1575px</div>
                                <div>Back: 1125px x 1300px</div>
                                <div>
                                  <a>Download Template</a>
                                </div>
                              </div>
                            }
                            title="Image specs"
                          >
                            <Icon
                              type="info-circle"
                              style={{ marginLeft: 8 }}
                            />
                          </Popover>
                        </span>
                        <span style={{ flex: 1 }} />
                        <Button disabled size="small">
                          Preview
                        </Button>
                      </div>
                      <div>
                        <Row
                          style={{ margin: "18px 0 12px 16px " }}
                          gutter={32}
                        >
                          <Col md={24} lg={12}>
                            <div>
                              <div style={{ display: "flex", marginBottom: 4 }}>
                                <b>Front</b> <span style={{ flex: 1 }} />
                              </div>
                              <div
                                style={{
                                  paddingBottom: "72%",
                                  width: "100%",
                                  border: "1px dashed lightgray",
                                  position: "relative"
                                }}
                              >
                                <div
                                  style={{
                                    position: "absolute",
                                    display: "flex",
                                    alignItems: "center",
                                    left: 0,
                                    right: 0,
                                    top: 0,
                                    bottom: 0,
                                    justifyContent: "center"
                                  }}
                                >
                                  <div>
                                    <Icon
                                      type="plus"
                                      style={{ fontSize: 48 }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>

                          <Col md={24} lg={12}>
                            <div>
                              <div style={{ display: "flex", marginBottom: 4 }}>
                                <b>Back</b> <span style={{ flex: 1 }} />
                              </div>
                              <div
                                style={{
                                  paddingTop: "72%",
                                  width: "100%",
                                  border: "1px solid #E8E8E8",
                                  position: "relative"
                                }}
                              >
                                <div
                                  style={{
                                    position: "absolute",
                                    width: "51.73%",
                                    height: "82.96%",
                                    display: "flex",
                                    alignItems: "center",
                                    left: 0,
                                    right: 0,
                                    top: 0,
                                    bottom: 0,
                                    justifyContent: "center",
                                    border: "1px dashed lightgray",
                                    borderTop: 0,
                                    borderLeft: 0
                                  }}
                                >
                                  <div>
                                    <Icon
                                      type="plus"
                                      style={{ fontSize: 36 }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>

                    <div
                      style={{
                        padding: "0px 16px 0px 16px"
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Icon
                          type="check-circle"
                          style={{
                            color: "lightgray",
                            fontSize: 14,
                            marginRight: 8
                          }}
                        />
                        <span
                          style={{
                            fontSize: 16,
                            fontWeight: 600,
                            color: "#000000"
                          }}
                        >
                          Schedule
                        </span>
                      </div>
                      <div>
                        <Form layout="vertical" onSubmit={this.handleSubmit}>
                          <Row>
                            <Col md={12} sm={24}>
                              <Form.Item
                                label="Drop Date"
                                style={{ margin: "18px 0 12px 24px" }}
                              >
                                <DatePicker style={{ width: "100%" }} />
                              </Form.Item>
                            </Col>
                            <Col md={12} sm={24}>
                              <Form.Item
                                label="Postage"
                                style={{ margin: "18px 0 12px 24px" }}
                              >
                                <Select defaultValue="Select...">
                                  <Option value="Standard">Standard</Option>
                                  <Option value="First Class">
                                    First Class
                                  </Option>
                                </Select>
                              </Form.Item>
                            </Col>
                          </Row>
                        </Form>
                      </div>
                    </div>
                    <div
                      style={{
                        padding: "8px 16px 16px 16px"
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Icon
                          type="check-circle"
                          style={{
                            color: "lightgray",
                            fontSize: 14,
                            marginRight: 8
                          }}
                        />
                        <span
                          style={{
                            fontSize: 16,
                            fontWeight: 600,
                            color: "#000000"
                          }}
                        >
                          Proofs & Approvals
                        </span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>

              <Col md={4} sm={24}>
                <div
                  class="guide"
                  style={{
                    minHeight: "400px",

                    padding: "16px 16px 24px 16px",
                    height: "100%",
                    borderLeft: "1px solid #f3f3f3"
                  }}
                >
                  <b style={{ fontSize: 16 }}>Guide</b>
                </div>
              </Col>
            </Row>
            <div style={{ backgroundColor: "#ffffff" }}>
              <Divider style={{ margin: 0 }} />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: 8,
                color: "black",
                fontSize: 16,
                display: "flex",
                justifyContent: "center",
                background: "white"
              }}
            >
              <div
                style={{
                  margin: 4,
                  display: "flex",
                  width: "100%",
                  alignItems: "center"
                }}
              >
                <a style={{ opacity: 0.4, fontSize: 12 }}>Save Draft</a>
                <span style={{ flex: 1 }} />
                <Button
                  style={{
                    background: "#FF6178",
                    border: "1px solid #FF6178"
                  }}
                  type="primary"
                  onClick={this.showModal}
                  size="large"
                >
                  Prepare Drop
                </Button>
              </div>
              <Modal
                title="Basic Modal"
                footer={null}
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                maskStyle={{
                  background:
                    "linear-gradient(to bottom left, #f10f4d 0%, #fa7044 100%)"
                }}
              >
                <div>
                  <div style={{ backgroundColor: "lightgray" }} />
                  <div style={{ backgroundColor: "white" }} />
                </div>
              </Modal>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Flamingo ©2019 Created by Pebblepost
          </Footer>
        </Layout>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
