import { useState } from "react";
import { supabase } from "../../../tools/supabaseClient";
import { Form, Input, Button, message } from "antd";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

// eslint-disable-next-line react/prop-types
const Login = ({ onLoginSuccess }) => {
  const [error, setError] = useState("");

  const onFinish = async ({ email, password }) => {
    try {
      const { data, error: loginError } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });

      if (loginError) {
        setError("Email yoki parol noto‘g‘ri.");
        return;
      }

      const user = data.user;

      const { data: metadata, error: metadataError } = await supabase
        .from("users")
        .select("role")
        .eq("id", user.id)
        .single();

      if (metadataError || metadata?.role !== "admin") {
        setError("Ruxsat etilmagan foydalanuvchi.");
        await supabase.auth.signOut();
        return;
      }

      onLoginSuccess();
    } catch (err) {
      message.error("Noma’lum xato yuz berdi. Qaytadan urinib ko‘ring.", err);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-[400px] text-center shadow-lg px-[22px] py-[34px]">
        <h3 className="pb-[25px] text-[24px] font-semibold">Login</h3>
        <Form onFinish={onFinish}>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input
              prefix={<MdOutlineMailOutline />}
              placeholder="Email"
              className="h-[50px] text-[18px]"
              aria-label="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<RiLockPasswordLine />}
              type="password"
              placeholder="Password"
              className="h-[50px] text-[18px]"
              aria-label="Password"
            />
          </Form.Item>
          {error && <p className="text-red-500 pb-4">{error}</p>}
          <Button
            type="primary"
            htmlType="submit"
            className="text-[18px] py-5 px-7"
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
