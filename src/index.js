import React from "react";
import ReactDOM from "react-dom";
import { Button, DatePicker, Col, Row, Avatar, Divider } from "antd";
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
  Checkbox
} from "antd";
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Layout style={{ minHeight: "100vh" }}>
          <Header className="header">
            <div className="logo">Flamingo</div>
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
          </Header>

          <Content
            style={{
              padding: "0 50px",
              maxWidth: "1100px",
              margin: "auto",
              width: "100%"
            }}
          >
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>
                <a href="#">Home</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Create New Drop</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ margin: "0" }}>
              <div>
                <Row gutter={16}>
                  <Col sm={24} md={16} lg={16}>
                    <div style={{ background: "white", margin: "8px 0 8px 0" }}>
                      <div
                        style={{
                          height: 48,
                          borderBottom: "1px solid #f1f1f1",
                          display: "flex",
                          alignItems: "center",
                          padding: 16,
                          color: "black",
                          fontSize: 16,
                          backgroundColor: "white"
                        }}
                      >
                        Brand_2019-01-15{" "}
                        <Icon
                          type="edit"
                          style={{ marginLeft: 8, color: "rgba(0,0,0,0.65)" }}
                        />
                      </div>
                      <div
                        style={{
                          padding: 16,
                          borderBottom: "1px dashed lightgray"
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
                          <span style={{ fontSize: 16, fontWeight: 600 }}>
                            Postcard
                          </span>
                        </div>
                        <div>
                          <Form layout="vertical" onSubmit={this.handleSubmit}>
                            <Row>
                              <Col md={10} sm={24}>
                                <Form.Item
                                  label="Size"
                                  style={{ margin: "18px 0 12px 24px" }}
                                >
                                  <RadioGroup defaultValue="4 X 6">
                                    <RadioButton value="4 X 6">
                                      4 X 6
                                    </RadioButton>
                                    <RadioButton value="5 X 7">
                                      5 X 7
                                    </RadioButton>
                                  </RadioGroup>
                                </Form.Item>
                              </Col>
                              <Col md={10} sm={24}>
                                <Form.Item
                                  label="Finish"
                                  style={{ margin: "18px 0 12px 24px" }}
                                >
                                  <Select
                                    style={{ maxWidth: 120 }}
                                    defaultValue="please select"
                                  >
                                    <Option value="Matte">Matte</Option>
                                    <Option value="Glossy">Glossy</Option>
                                    <Option value="Regular">Regular</Option>
                                  </Select>
                                </Form.Item>
                              </Col>
                            </Row>
                            <Checkbox style={{ marginLeft: 24 }}>
                              Include Offer code
                            </Checkbox>
                          </Form>
                        </div>
                      </div>

                      <div
                        style={{
                          padding: 16,
                          borderBottom: "1px dashed lightgray"
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
                          <span style={{ fontSize: 16, fontWeight: 600 }}>
                            Reciepients
                          </span>
                        </div>
                        <div>
                          <Form layout="vertical" onSubmit={this.handleSubmit}>
                            <Row>
                              <Col span={10}>
                                <Form.Item
                                  style={{ margin: "18px 0 12px 24px" }}
                                >
                                  <Select
                                    style={{ maxWidth: 200 }}
                                    defaultValue="Choose a list"
                                  >
                                    <Option value="upload">
                                      <b>
                                        <Icon type="upload" /> Upload list
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
                              </Col>
                            </Row>
                          </Form>
                        </div>
                      </div>

                      <div
                        style={{
                          padding: 16,
                          borderBottom: "1px dashed lightgray"
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
                          <span style={{ fontSize: 16, fontWeight: 600 }}>
                            Add Creative
                          </span>
                        </div>
                        <div>
                          <Form layout="vertical" onSubmit={this.handleSubmit}>
                            <Row
                              style={{ margin: "18px 0 12px 16px " }}
                              gutter={16}
                            >
                              <Col md={12} sm={24}>
                                <div>
                                  <b>Front</b>
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
                                          type="upload"
                                          style={{ marginRight: 8 }}
                                        />
                                        <a>Upload an image</a>
                                        <div style={{ fontSize: 12 }}>
                                          Size required: 1875 X 1350 px
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Col>

                              <Col md={12} sm={24}>
                                <div>
                                  <b>Back</b>
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
                                          type="upload"
                                          style={{ marginRight: 8 }}
                                        />
                                        <a>Upload an image</a>
                                        <div style={{ fontSize: 12 }}>
                                          Size required: 970 X 1125 px
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </Form>
                        </div>
                      </div>

                      <div
                        style={{
                          padding: 16
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
                          <span style={{ fontSize: 16, fontWeight: 600 }}>
                            Schedule + Postage
                          </span>
                        </div>
                        <div>
                          <Form layout="vertical" onSubmit={this.handleSubmit}>
                            <Row>
                              <Col md={10} sm={24}>
                                <Form.Item
                                  label="Drop Date"
                                  style={{ margin: "18px 0 12px 24px" }}
                                >
                                  <DatePicker />
                                </Form.Item>
                              </Col>
                              <Col md={10} sm={24}>
                                <Form.Item
                                  label="Postage"
                                  style={{ margin: "18px 0 12px 24px" }}
                                >
                                  <Select defaultValue="please select">
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
                    </div>
                  </Col>
                  <Col sm={24} md={8} lg={8}>
                    <div
                      style={{
                        background: "white",
                        margin: "8px 0 8px 0",
                        padding: 16,
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column"
                      }}
                    >
                      <div style={{ width: "40%" }}>
                        <img
                          src="https://i.pinimg.com/236x/2b/34/85/2b3485dcd7c5cf1963e549ada04db68d--pngs-tumblr-overlays-tumblr-png.jpg"
                          width="100%"
                        />
                      </div>
                      <div style={{ width: "100%", fontWeight: "bold" }}>
                        Cost Summary
                      </div>
                      <div style={{ width: "100%", display: "flex" }}>
                        <span>Potential Reciepients:</span>
                        <span style={{ flex: 1 }} />
                        <span>750,000</span>
                      </div>

                      <div style={{ width: "100%", display: "flex" }}>
                        <span>Cost per card incl. postage:</span>
                        <span style={{ flex: 1 }} />
                        <span>$0.51</span>
                      </div>
                      <Divider dashed />
                      <div style={{ width: "100%", display: "flex" }}>
                        <span>Maximum Cost:</span>
                        <span style={{ flex: 1 }} />
                        <span>$382,500</span>
                      </div>

                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          marginTop: 12,
                          alignItems: "center"
                        }}
                      >
                        <span style={{ flex: 1 }} />
                        <a style={{ opacity: 0.6, marginRight: 12 }}>
                          Save Draft
                        </a>
                        <Button
                          style={{
                            background: "#FF6178",
                            border: "1px solid #FF6178"
                          }}
                          type="primary"
                        >
                          Preview Drop
                        </Button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Content>
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
