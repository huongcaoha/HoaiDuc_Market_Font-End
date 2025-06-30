
import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import FacebookLogin from '@greatsumini/react-facebook-login';
import { useNavigate } from 'react-router-dom';
// import { jwtDecode } from "jwt-decode";
import { Cookies } from 'react-cookie';
import { Form, Input, Button, Divider, message, Image } from "antd";
import { GoogleOutlined, FacebookFilled, LockOutlined, MailOutlined, FacebookOutlined } from "@ant-design/icons";
import { loginUser } from '../../service/authService';

const Login = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const responseGoogle = (credentialResponse) => {
    // Giải mã JWT lấy profile (nếu muốn)
    // const decoded = jwtDecode(credentialResponse.credential);
    // localStorage.setItem("username", JSON.stringify(decoded.name))
    // localStorage.setItem("avatarUser", JSON.stringify(decoded.picture))


    // Gửi về backend để xác thực và đăng nhập
    fetch('http://localhost:8080/api.hoaiducmarket.com/v1/auth/login/oauth2', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token: credentialResponse.credential,
        provider: 'google'
      }),
    })
      .then(async res => {
        // Đảm bảo backend trả về JSON, nếu không thì dùng .text() để debug lỗi
        if (!res.ok) {
          const text = await res.text();
          throw new Error(text || 'Login failed');
        }
        return res.json();
      })
      .then(data => {
        cookies.set("data", JSON.stringify(data.accessToken), { path: "/" });
        localStorage.setItem("username", JSON.stringify(data.fullName))
        localStorage.setItem("avatarUser", JSON.stringify(data.image))
        // Chuyển hướng sang trang home
        navigate('/');
      })
      .catch(err => {
        console.error('Google login error:', err);
        alert('Google login failed!');
      });
  };

  const responseFacebook = (response) => {
    fetch('http://localhost:8080/api.hoaiducmarket.com/v1/auth/login/oauth2', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token: response.accessToken,
        provider: 'facebook'
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);

        cookies.set("data", data.accessToken, { path: "/" });
        localStorage.setItem("username", JSON.stringify(data.fullName))
        localStorage.setItem("avatarUser", JSON.stringify(data.image))
        navigate("/")
      })
      .catch(err => console.error(err));
  };

  const onSubmit = async (values) => {
    const userLogin = {
      email: values.email,
      password: values.password
    }
    const response = await loginUser(userLogin);
    if (response != null) {
      cookies.set("data", response.accessToken, { path: "/" });
      localStorage.setItem("username", JSON.stringify(response.fullName))
      localStorage.setItem("avatarUser", JSON.stringify(response.image))
      navigate("/")
    } else {
      message.error("Email hoặc mật khẩu không đúng !");
    }

  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-2">Chào mừng trở lại!</h2>
        <p className="text-center text-gray-500 mb-8">Đăng nhập để tiếp tục</p>
        <Form
          name="login"
          onFinish={onSubmit}
          layout="vertical"
          requiredMark={false}
        >
          <Form.Item
            name="email"
            label={<span className="font-semibold">Email</span>}
            rules={[
              { required: true, message: "Vui lòng nhập email!" },
              { type: "email", message: "Email không hợp lệ!" }
            ]}
            value
          >
            <Input
              size="large"
              placeholder="Nhập email"
              prefix={<MailOutlined className="text-blue-400" />}
              className="rounded-lg"
            />
          </Form.Item>
          <Form.Item
            name="password"
            label={<span className="font-semibold">Mật khẩu</span>}
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input.Password
              size="large"
              placeholder="Nhập mật khẩu"
              prefix={<LockOutlined className="text-blue-400" />}
              className="rounded-lg"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="w-full bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
            >
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
        <Divider className="my-6">Hoặc đăng nhập bằng</Divider>
        <div className="flex flex-col gap-4">
          {/* <Button
            icon={<GoogleOutlined />}
            size="large"
            className="flex items-center justify-center w-full border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 rounded-lg font-medium"
          >
            Đăng nhập với Google
          </Button> */}
          {/* <Button
            icon={<FacebookFilled />}
            size="large"
            className="flex items-center justify-center w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium"
            onClick={handleFacebookLogin}
          >
            Đăng nhập với Facebook
          </Button> */}


          <GoogleOAuthProvider clientId="269560015950-eqcq6i63unq751mm762kuujp1agbu680.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={responseGoogle}
              onError={() => {
                message.error('Google login failed!')

              }}
              useOneTap
            />
          </GoogleOAuthProvider>
          <Button className='flex justify-center items-center '>
            <img className='rounded-full' width={20} height={20} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEVKbqj///5BaKU+ZqSisc46ZKO2wdfV2+fDzd44YqJHbKfq7fJEaqZTdazT2eY4Y6KmtM++yNvl6fBxirfz9Pfx8/aHm8B7krsuXJ+xvdTM1OKPocSGmr9kgLFWd6xwibeZqcnd4uxUTm6WAAAC70lEQVR4nO3db0/qMByGYda64cpAEBEQAfn+X/KYnGM0x6X74+aeX3PfiS9JemXabuuGs+Us7VL3ERERERERERERERH9UsE55/N/ee+dd64KYephDVJw/uGw3J/Wx81qtZq//6xeNsXxeHd63Z6X5aHMTTuDLy+nzS2L9DifmSW+87bFIqb727WaeqT9Cg+X4qmZZ1YYyutLK957W4PCkJ/nbX0mj2Hli/Y+i8J82+7v76OLsbk0lOtOviyztgFfrjoCjQmDe+wKzEyt+MG1WOH/z9Lpaci7H8EsqwwJy9ar/NecHaG/6wPM8qnH3bpw7gV8KqceeOvKXeJC33WlNyec9QNmOytCv0ldGHoCzQj9sa/w0Ygw73bF9KW5DWH13BeYzW2s+Hmv8zVLwrI3MFuZEIZtf6GNY9h2Jl18b7d2U4++TWWLm4f3z5e8rMkEsMVaUbjc0HXgt0LjOem+NMybtbgyfDMxm0RqWu8XNk5bIrm3hkNoYzaJ1HTxO/X4fl7DToyV66NIDcJb8sJ76zNpo3Djpx7gj2sQFskL78wvFggRGgghQv0QItQPIUL9ECLUDyFC/dIShvx7h7hwfaj5zGdiu1LhOq8p/szeru4jn521iK7fM6SxxH6JRxCekhfutd6ZGUEo9mYXwh6lP5eKvRU0glDsraARhGLvzIwgFNsDH16o9jYCwu6pPYsyvFDtWZThhWrPCA8vVHvOe3jhS/JCtadthhcetS6AxxAmfwzXyQvFbtOMIHzWusQfQfiK8JcbXih2m2YEodhtmlk439cU37dY1H3ko0JsKh1+70kOWFta+4d1IUSoH0KE+iFEqB9ChPohRKgfQoT6IUSoH0KE+iFEqB9ChPohRKgfQoT6IUSoH0KE+iFEqB9ChPohRKgfQoT6IUSoH0KE+iFEqB9ChPohRKgfQoT6IUSon99EhTb+83a0an+Lfa38VexbhPpURf81QAJAIiIiIiIiIiIiIqJfTe3764du+QdRtziQq1sCJwAAAABJRU5ErkJggg=="></img>
            <FacebookLogin
              appId="1263761462121053"
              onSuccess={responseFacebook}
              onFail={(error) => message.error('Facebook Login Failed!', error)}
              onProfileSuccess={(profile) => {
                localStorage.setItem("username", JSON.stringify(profile.name))
                localStorage.setItem("avatarUser", JSON.stringify(profile.picture.data.url))


              }}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;

