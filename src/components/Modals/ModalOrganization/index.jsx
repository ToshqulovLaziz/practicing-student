import { Modal, Button, Form, Input } from "antd";
import { setModalOragnization } from "../../../redux/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { setValuesOragnization } from "../../../redux/valuesSlice";
import { supabase } from "../../../tools/supabaseClient";

const ModalOrganization = () => {
  const dispatch = useDispatch();
  const { modalOragnization } = useSelector(
    (state) => state.modal || { modalLeader: false }
  );
  const prefixSelector = "+998";
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    const formattedValues = {
      ...values,
    };

    try {
      const { data, error } = await supabase
        .from("create_organization_info")
        .insert([
          {
            oragnization_name: formattedValues.oragnization_name,
            full_address: formattedValues.full_address,
            organization_phone: formattedValues.organization_phone,
          },
        ]);
      if (error) throw error;
      form.resetFields();
      dispatch(setValuesOragnization(data));
      dispatch(setModalOragnization());
    } catch (error) {
      console.error("Error inserting data:", error.message);
      alert("An error occurred: " + error.message);
    }
  };
  return (
    <Modal
      open={modalOragnization}
      onCancel={() => dispatch(setModalOragnization())}
      footer={false}
      width={600}
    >
      <div className="w-[90%] mx-auto">
        <Form
          className="pt-[30px]"
          onFinish={(values) => onFinish(values)}
          form={form}
        >
          <Form.Item
            name="oragnization_name"
            rules={[
              {
                required: true,
                message: "Please complete the Oragnization Name!",
              },
            ]}
          >
            <Input className="text-[18px]" placeholder="Oragnization Name" />
          </Form.Item>
          <Form.Item
            name="full_address"
            rules={[
              {
                required: true,
                message: "Please complete the Full Address!",
              },
            ]}
          >
            <Input className="text-[18px]" placeholder="Full Address" />
          </Form.Item>
          <Form.Item
            name="organization_phone"
            rules={[
              {
                required: true,
                message: "Please complete the Organization Phone!",
              },
            ]}
          >
            <Input
              className="text-[18px]"
              placeholder="Organization Phone"
              addonBefore={prefixSelector}
            />
          </Form.Item>
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
  );
};

export default ModalOrganization;
