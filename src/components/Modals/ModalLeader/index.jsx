import { Modal, Button, Form, Input, DatePicker, Select, Col, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setModalLeader } from "../../../redux/modalSlice";
import { setValuesLeader } from "../../../redux/valuesSlice";

const { Option } = Select;

const ModalLeader = () => {
  const dispatch = useDispatch();
  const { modalLeader } = useSelector(
    (state) => state.modal || { modalLeader: false }
  );
  const prefixSelector = "+998";
  const onFinish = (values) => {
    const formattedValues = {
      ...values,
      date: values.date?.toISOString(),
    };
    dispatch(setValuesLeader(formattedValues));
    dispatch(setModalLeader());
  };
  return (
    <>
      <Modal
        open={modalLeader}
        onCancel={() => dispatch(setModalLeader())}
        footer={false}
        width={1000}
      >
        <div className="w-[90%] mx-auto">
          <Form className="pt-[30px]" onFinish={(values) => onFinish(values)}>
            <Row gutter={40}>
              <Col span={12}>
                <Form.Item
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "Please complete the First name!",
                    },
                  ]}
                >
                  <Input className="text-[18px]" placeholder="First Name" />
                </Form.Item>
                <Form.Item
                  name="lastName"
                  rules={[
                    {
                      required: true,
                      message: "Please complete the Last name!",
                    },
                  ]}
                >
                  <Input className="text-[18px]" placeholder="Last Name" />
                </Form.Item>
                <Form.Item
                  name="fathersName"
                  rules={[
                    {
                      required: true,
                      message: "Please complete the Last name!",
                    },
                  ]}
                >
                  <Input className="text-[18px]" placeholder="Father's name" />
                </Form.Item>
                <Form.Item
                  name="date"
                  rules={[
                    {
                      required: true,
                      message: "Please complete the Date of birth!",
                    },
                  ]}
                >
                  <DatePicker
                    className="w-full custom-datepicker py-2"
                    placeholder="Date of birth"
                  />
                </Form.Item>
                <Form.Item
                  name="gender"
                  rules={[
                    {
                      required: true,
                      message: "Please complete the Last name!",
                    },
                  ]}
                >
                  <Select
                    className="custom-select my-[3px]"
                    placeholder="Gender"
                  >
                    <Option value="male">Male</Option>
                    <Option value="female">female</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name="specialty"
                  rules={[
                    {
                      required: true,
                      message: "Please complete the Specialty!",
                    },
                  ]}
                >
                  <Input className="text-[18px]" placeholder="Specialty" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="level"
                  rules={[
                    {
                      required: true,
                      message: "Please complete the Level!",
                    },
                  ]}
                >
                  <Input className="text-[18px]" placeholder="Level" />
                </Form.Item>
                <Form.Item
                  name="location"
                  rules={[
                    {
                      required: true,
                      message: "Please complete the Location!",
                    },
                  ]}
                >
                  <Input className="text-[18px]" placeholder="Location" />
                </Form.Item>
                <Form.Item
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Please complete the phone number!",
                    },
                  ]}
                >
                  <Input
                    addonBefore={prefixSelector}
                    placeholder="Phone number"
                    className="text-[18px] py-1"
                  />
                </Form.Item>
                <Form.Item
                  name="attachedGroup"
                  rules={[
                    {
                      required: true,
                      message: "Please complete the Attached Group!",
                    },
                  ]}
                >
                  <Input className="text-[18px]" placeholder="Attached Group" />
                </Form.Item>
                <Form.Item
                  name="login"
                  rules={[
                    {
                      required: true,
                      message: "Please complete the Login!",
                    },
                  ]}
                >
                  <Input className="text-[18px]" placeholder="Login" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please complete the Password!",
                    },
                  ]}
                >
                  <Input className="text-[18px]" placeholder="Password" />
                </Form.Item>
              </Col>
            </Row>
            <Button
              type="primary"
              className="block px-[40px] h-[40px] font-medium tracking-[1.3px] mx-auto text-[18px]"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default ModalLeader;
