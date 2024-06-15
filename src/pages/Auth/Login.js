import React from 'react'
import Navbar from '../../components/Header/Navbar'
import { Button, Checkbox, Form, Input } from 'antd';
import { useAuth } from '../../context/AuthContext';


export default function Login() {
    const { loginUser } = useAuth()

    const onFinish = values => {
        const { username, password } = values
        loginUser(username, password)
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <div style={{ background: 'url(https://s3-alpha-sig.figma.com/img/ea07/9bac/af062c107b8633ff76c96b82dda3f5fc?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RjAUh2RSqb2LzRGkEX1zpbXSfePROPQCLyV9OmqNAZiPShlSc6im7mCNOkQs7tViN0ge-GOob248sUI9QiFnk~6FA3YeDYwHbt83qwx5nMY7OX562cYJtCSJDp3LEKVODbygCpyFpYgjIY~IwGyd8-X23jPfTehzF4Nj8eAr~IlL6rUsDqBQe6om3OHyTUfPr-o-yQsfZ4Sn42r9mts6DJdXsouV~IljE8cuzqNxXxdqLVYZoyyu4Eh2BTYWCdfoKqANcnk05sKwy4zE~9ufP6ii3VF9ur-10vzwdL6p3XSzxdLxH8Nws98V~npPWdKzOU9BcNFcTVBGFRUa-ob6jQ__)', backgroundSize: 'cover' }}>
                <Navbar />
            </div>
            <h2 className='text-center my-5 fw-bold'>Login Page</h2>

            <div className="text-center ms-md-5 ps-md-5 mx-3">
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input placeholder='abc@example.com' />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password placeholder='123456' />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}
