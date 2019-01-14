import React from "react";
import ReactDOM from "react-dom";
import {
  version,
  Button,
  DatePicker,
  Card,
  Col,
  Row,
  Divider,
  Avatar,
  Table,
  Tooltip
} from "antd";
import "antd/dist/antd.css";
import "./index.css";

import { Layout, Menu, Breadcrumb, Icon } from "antd";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const columns = [
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: status => {
      if (status == 1) {
        return (
          <Icon
            type="check-circle"
            theme="twoTone"
            twoToneColor="#52c41a"
            style={{ fontSize: 11 }}
          />
        );
      } else {
        return (
          <Icon
            type="stop"
            theme="twoTone"
            twoToneColor="#aa0000"
            style={{ fontSize: 11 }}
          />
        );
      }
    },
    align: "center"
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "Addr. 2",
    dataIndex: "address2",
    key: "address2"
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city"
  },
  {
    title: "State",
    dataIndex: "state",
    key: "state"
  },
  {
    title: "Zip",
    dataIndex: "zip",
    key: "zip"
  },
  {
    title: "Mailed",
    dataIndex: "mailDate",
    key: "mailDate"
  },
  {
    title: "Arrived",
    dataIndex: "arrivalDate",
    key: "arrivalDate"
  },
  {
    title: <Icon type="qrcode" />,
    dataIndex: "qrscan",
    key: "qrscan",
    render: qrscan => {
      if (qrscan == 1) {
        return (
          <Tooltip placement="top" title="1/24/2019">
            <Icon type="check" />
          </Tooltip>
        );
      }
    }
  }
];

const data = [
  {
    status: 1,
    key: "1",
    name: "John Brown",
    address: "New York No. 1 Lake Park",
    address2: "#513",
    city: "Brooklyn",
    state: "NY",
    zip: "11231",

    mailDate: "1/15/2019",
    arrivalDate: "1/21/2019",
    qrscan: 1
  },
  {
    status: 0,
    key: "2",
    name: "Sam Smith",
    address: "123 Upper Road",
    address2: "",
    city: "Brooklyn",
    state: "NY",
    zip: "11231",
    mailDate: "-",
    arrivalDate: "-"
  }
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Layout>
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

          <Content style={{ padding: "0 50px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>
                <a href="#">Home</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Drops</Breadcrumb.Item>
              <Breadcrumb.Item>February Drop 2019</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{ padding: "10px 20px", margin: "0", background: "#fff" }}
            >
              <div>
                <Row type="flex" align="middle">
                  <Col span={12}>
                    <h1>February Drop 2019</h1>
                  </Col>
                  <Col
                    span={12}
                    className={"lime-6"}
                    style={{ textAlign: "right" }}
                  >
                    Mailed 12/25/2018
                  </Col>
                </Row>
              </div>

              <Divider style={{ marginTop: "10px", marginBottom: "0px" }} />
            </Content>
            <Layout style={{ padding: "4px 0", background: "#fff" }}>
              <Sider width={200} style={{ background: "#fff" }}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={["3"]}
                  defaultOpenKeys={["sub1"]}
                  style={{ height: "100%" }}
                >
                  <Menu.Item key="1">Reports</Menu.Item>
                  <Menu.Item key="2">Transaction Match</Menu.Item>
                  <Menu.Item key="3">Recipients</Menu.Item>
                  <Menu.Item key="4">Creative</Menu.Item>
                </Menu>
              </Sider>
              <Content style={{ padding: "0 24px", minHeight: 280 }}>
                <Table
                  columns={columns}
                  dataSource={data}
                  size="middle"
                  id="addresses"
                />
                <Divider />

                <div>
                  <Row gutter={16}>
                    <Col span={6}>
                      <Card
                        title="STAT"
                        bordered={true}
                        style={{ textAlign: "center" }}
                        headStyle={{
                          textAlign: "center",
                          textTransform: "uppercase",
                          padding: "0",
                          fontSize: "16px"
                        }}
                        size="small"
                      >
                        <h1>45,500</h1>
                      </Card>
                    </Col>
                    <Col span={6}>
                      <Card
                        title="STAT"
                        bordered={true}
                        style={{ textAlign: "center" }}
                        headStyle={{
                          textAlign: "center",
                          textTransform: "uppercase",
                          padding: "0",
                          fontSize: "16px"
                        }}
                        size="small"
                      >
                        <h1>45,500</h1>
                      </Card>
                    </Col>
                    <Col span={6}>
                      <Card
                        title="STAT"
                        bordered={true}
                        style={{ textAlign: "center" }}
                        headStyle={{
                          textAlign: "center",
                          textTransform: "uppercase",
                          padding: "0",
                          fontSize: "16px"
                        }}
                        size="small"
                      >
                        <h1>45,500</h1>
                      </Card>
                    </Col>
                    <Col span={6}>
                      <Card
                        title="STAT"
                        bordered={true}
                        style={{ textAlign: "center" }}
                        headStyle={{
                          textAlign: "center",
                          textTransform: "uppercase",
                          padding: "0",
                          fontSize: "16px"
                        }}
                        size="small"
                      >
                        <h1>45,500</h1>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </Content>
            </Layout>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
