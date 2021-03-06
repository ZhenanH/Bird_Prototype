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
  Icon,
  Form,
  Radio,
  Select,
  Input,
  Popover,
  Progress,
  Dropdown
} from "antd";
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { Header, Content, Footer, Sider } = Layout;

function handleButtonClick(e) {
  message.info("Click on left button.");
  console.log("click left button", e);
}

function handleMenuClick(e) {
  message.info("Click on menu item.");
  console.log("click", e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">
      <Icon type="pushpin" />
      Save Draft
    </Menu.Item>
  </Menu>
);

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
                padding: "0px 30px",
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
              padding: "1% 1% 0 1%",
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
              <Row type="flex" align="middle" gutter={16}>
                <Col span={12}>
                  <h1>Create Drop</h1>
                </Col>
                <Col
                  span={12}
                  style={{
                    textAlign: "right",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end"
                  }}
                >
                  <Row type="flex" align="middle" gutter={16}>
                    <Col md={12} sm={0} xs={0}>
                      <div style={{ width: 200, marginRight: 24 }}>
                        <Progress
                          percent={30}
                          size="small"
                          strokeColor="rgb(74, 158, 159)"
                        />
                      </div>
                    </Col>
                    <Col md={12} sm={24} xs={24}>
                      <Dropdown.Button
                        onClick={handleButtonClick}
                        overlay={menu}
                        onClick={this.showModal}
                      >
                        Preview Drop
                      </Dropdown.Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
            <Row type="flex" style={{ backgroundColor: "white" }}>
              <Divider style={{ marginTop: 12, marginBottom: "0px" }} />
              <Col md={20} sm={24} xs={24}>
                <Row
                  type="flex"
                  style={{
                    backgroundColor: "white"
                  }}
                >
                  <Col
                    md={9}
                    lg={8}
                    sm={24}
                    xs={24}
                    style={{ borderRight: "1px solid #E8E8E8" }}
                  >
                    <div style={{ height: "100%" }}>
                      <div
                        style={{
                          padding: "24px 24px 0px 24px"
                          // borderBottom: "1px dashed lightgray"
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: 12
                          }}
                        >
                          <Icon
                            type="check-circle"
                            style={{
                              color: "#4A9E9F",
                              fontSize: 18,
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
                          <Form
                            layout="vertical"
                            onSubmit={this.handleSubmit}
                            style={{ marginLeft: 28 }}
                          >
                            <Form.Item
                              label="Name"
                              style={{ marginBottom: 12 }}
                            >
                              <Input
                                placeholder="Enter drop name"
                                value="Brand_2019-01-15"
                              />
                            </Form.Item>
                            <Form.Item label="Tags">
                              <Select
                                mode="tags"
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
                          padding: "0px 24px 0px 24px"
                          //borderBottom: "1px dashed lightgray"
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: 12
                          }}
                        >
                          <Icon
                            type="check-circle"
                            style={{
                              color: "lightgray",
                              fontSize: 18,
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
                          <Form
                            layout="vertical"
                            onSubmit={this.handleSubmit}
                            style={{ marginLeft: 28 }}
                          >
                            <Row>
                              <Col span={10}>
                                <Form.Item label="Size">
                                  <Select defaultValue="Select...">
                                    <Option value="4x6">4 x 6</Option>
                                    <Option value="5x7">5 x 7</Option>
                                  </Select>
                                </Form.Item>
                              </Col>
                              <Col span={12} offset={2}>
                                <Form.Item label="Finish">
                                  <Select defaultValue="Select...">
                                    <Option value="Glossy">Glossy</Option>
                                    <Option value="Regular">Satin</Option>
                                    <Option value="Matte">Matte</Option>
                                  </Select>
                                </Form.Item>
                              </Col>
                            </Row>
                          </Form>
                        </div>
                      </div>
                      <div
                        style={{
                          padding: "0px 24px 24px 24px"
                          //opacity: this.state.includeOffer ? 1 : 0.5
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: 12
                          }}
                        >
                          <Icon
                            type="check-circle"
                            style={{
                              color: "lightgray",
                              fontSize: 18,
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
                        <div
                          style={{
                            margin: "0 0 24px 28px",
                            display: "flex",
                            alignItems: "center"
                          }}
                        >
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
                          padding: "0px 24px 0px 24px"
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: 12
                          }}
                        >
                          <Icon
                            type="check-circle"
                            style={{
                              color: "lightgray",
                              fontSize: 18,
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
                          <span style={{ marginLeft: 8 }}>
                            {" "}
                            {this.state.includeOffer
                              ? " Alert for offer code col."
                              : ""}
                          </span>
                        </div>
                        <div>
                          <Form
                            layout="vertical"
                            onSubmit={this.handleSubmit}
                            style={{ marginLeft: 28 }}
                          >
                            <Form.Item>
                              <Select defaultValue="Add a list">
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
                    </div>
                  </Col>

                  <Col md={15} lg={16} sm={24} xs={24}>
                    <div
                      style={{
                        padding: "24px 24px 12px 24px"
                        //borderBottom: "1px dashed lightgray"
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Icon
                          type="check-circle"
                          style={{
                            color: "lightgray",
                            fontSize: 18,
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
                      <div style={{ margin: "12px 0 0 28px" }}>
                        <Row gutter={32}>
                          <Col md={24} lg={12} style={{ marginBottom: 24 }}>
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

                          <Col md={24} lg={12} style={{ marginBottom: 24 }}>
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
                        padding: "0px 24px 0px 24px"
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: 12
                        }}
                      >
                        <Icon
                          type="check-circle"
                          style={{
                            color: "lightgray",
                            fontSize: 18,
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
                        <Form
                          layout="vertical"
                          onSubmit={this.handleSubmit}
                          style={{ marginLeft: 28 }}
                        >
                          <Row gutter={16}>
                            <Col md={12} sm={24}>
                              <Form.Item label="Drop Date">
                                <DatePicker style={{ width: "100%" }} />
                              </Form.Item>
                            </Col>
                            <Col md={12} sm={24}>
                              <Form.Item label="Postage">
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
                        padding: "0px 24px 0px 24px"
                      }}
                    >
                      <div
                        style={{
                          display: "none",
                          alignItems: "center",
                          marginBottom: 24
                        }}
                      >
                        <Icon
                          type="check-circle"
                          style={{
                            color: "lightgray",
                            fontSize: 18,
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

              <Col lg={4} md={24} sm={24} xs={24}>
                <div
                  class="guide"
                  style={{
                    minHeight: "400px",

                    padding: "16px 16px 24px 16px",
                    height: "100%",
                    borderLeft: "1px solid #f3f3f3"
                  }}
                >
                  <div
                    style={{ fontSize: 16, color: "black", fontWeight: "600" }}
                  >
                    Intel
                  </div>
                </div>
              </Col>
            </Row>

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
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Flamingo ©2019 Created by Pebblepost
          </Footer>
        </Layout>
      </div>
    );
  }
}

<Button
  style={{
    background: "#FF6178",
    border: "1px solid #FF6178"
  }}
  type="primary"
  //onClick={this.showModal}
  size="large"
>
  Prepare Drop
</Button>;

ReactDOM.render(<App />, document.getElementById("root"));
