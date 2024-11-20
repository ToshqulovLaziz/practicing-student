import { Modal, Button, Form, Input, DatePicker, Select, Col, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setModalLeader } from "../../../redux/modalSlice";
import { setValuesLeader } from "../../../redux/valuesSlice";
import { supabase } from "../../../tools/supabaseClient";

const { Option } = Select;

const ModalLeader = () => {
  const dispatch = useDispatch();
  const { modalLeader } = useSelector(
    (state) => state.modal || { modalLeader: false }
  );
  const prefixSelector = "+998";
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    const formattedValues = {
      ...values,
      date: values.date?.format("YYYY-MM-DD"),
    };

    try {
      const { data, error } = await supabase.from("create_leader_info").insert([
        {
          first_name: formattedValues.firstName,
          last_name: formattedValues.lastName,
          fathers_name: formattedValues.fathersName,
          date_of_birth: formattedValues.date,
          gender: formattedValues.gender,
          specialty: formattedValues.specialty,
          level: formattedValues.level,
          location: formattedValues.location,
          phone: formattedValues.phone,
          attached_group: formattedValues.attachedGroup,
          login: formattedValues.login,
          password: formattedValues.password,
        },
      ]);

      if (error) throw error;
      console.log("Data inserted:", data);
      form.resetFields();
      dispatch(setValuesLeader(data));
      dispatch(setModalLeader()); 
    } catch (error) {
      console.error("Error inserting data:", error.message);
      alert("An error occurred: " + error.message);
    }
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
          <Form
            className="pt-[30px]"
            onFinish={(values) => onFinish(values)}
            form={form}
          >
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
                      message: "Please complete the Father's name!",
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
                      message: "Please complete the Gender!",
                    },
                  ]}
                >
                  <Select
                    className="w-full custom-select my-[3px]"
                    placeholder="Gender"
                  >
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
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
