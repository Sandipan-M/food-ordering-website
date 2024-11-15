import React from 'react'
import {Col, Form, Input, Row, message, Select} from 'antd'
//import axios from 'axios'

const {Option} = Select

const RegisterRestaurant = () => {

    const onSubmitHandler = async(values) =>{
        try {
            const res = await axios.post("/api/v1/user/add-resturant", values)
            if (res.data.success) {
              message.success("Data save Successfully... ")
            } else {
              message.error(res.data.message)
            }
          } catch (error) {
            console.log(error)
            message.error('Something went wrong')
          }
    }

    const handleChange = (e) =>{
        e.preventDefault()
        const formData = new FormData()
        formData.append("photo", e.target.files[0])
    
        axios.post("http://localhost:8080/api/save", formData)
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => console.log(err))
    }
  return (
    <div className='from-container'>
      <h1 className='text-center'>Create your account</h1>
      <h3>Resturant Information</h3><hr />
      <Form layout='vertical' className='m-3' onFinish={onSubmitHandler}>
        <Row gutter={20}>
            <Col xs={20} md={20} lg={8}>
                <Form.Item label="Resturant Name" name="restaurantName" required rules={[{required: true}]}>
                    <Input type='text' placeholder='Enter the resturant name'  />
                </Form.Item>
            </Col>
            <Col xs={20} md={20} lg={8}>
                <Form.Item label="Resturant Address" name="restaurantLocation" required rules={[{required: true}]}>
                    <Input type='text' placeholder='Enter the resturant address'  />
                </Form.Item>
            </Col>
            <Col xs={20} md={20} lg={8}>
                <Form.Item label="Contact Number" name="contactNumber" required rules={[{required: true}]}>
                    <Input type='tel' placeholder='Enter the resturant contact no'  />
                </Form.Item>
            </Col>
        </Row>
        <Row gutter={20}>
            <Col xs={20} md={20} lg={8}>
                <Form.Item label="City" name="city" required rules={[{required: true}]}>
                    <Input type='text' placeholder='Enter the resturant city'  />
                </Form.Item>
            </Col>
            <Col xs={20} md={20} lg={8}>
                <Form.Item label="Pincode" name="pincode" required rules={[{required: true}]}>
                    <Input type='number' placeholder='Enter the resturant pincode'  />
                </Form.Item>
            </Col>
            <Col xs={20} md={20} lg={8}>
                <Form.Item label="Website" name="website" >
                    <Input type='text' placeholder='Enter the resturant website(if any)'  />
                </Form.Item>
            </Col>
        </Row>
        <Row gutter={20}>
            <Col xs={20} md={20} lg={6}>
                <Form.Item label="Opening time" name="startTime" required rules={[{required: true}]}>
                    <Input type='time' placeholder=''  />
                </Form.Item>
            </Col>
            <Col xs={20} md={20} lg={6}>
                <Form.Item label="Ending time" name="endTime" required rules={[{required: true}]}>
                    <Input type='time' placeholder='Enter the resturant address'  />
                </Form.Item>
            </Col>
        </Row>
        <h3>Document Information</h3>
        <p>(All those documents original photocopies must be require)</p><hr />
        <Row gutter={20}>
        <Col xs={20} md={20} lg={8}>
                <Form.Item label="Restaurant Type" name="restaurantType" required rules={[{required: true}]}>
                    <Select placeholder="Select restaurant type">
                        <Option value="fast-food">Fast Food</Option>
                        <Option value="casual-dining">Casual Dining</Option>
                        <Option value="fine-dining">Fine Dining</Option>
                        <Option value="cafe">Cafe</Option>
                        <Option value="Cloud Kitchen">Cloud Kitchen</Option>
                    </Select>
                </Form.Item>
            </Col>
            <Col xs={20} md={20} lg={8}>
                <Form.Item label="Pancard No" name="panCardNo" required rules={[{required: true}]}>
                    <Input type='tel' placeholder='Enter the pancard No '  />
                </Form.Item>
            </Col>
            <Col xs={20} md={20} lg={8}>
                <Form.Item label="Aadhar No" name="aadharNo" required rules={[{required: true}]} >
                    <Input type='tel' placeholder='Enter the aadhar no , e.g. 0000-0000-0000'  />
                </Form.Item>
            </Col>
        </Row>
        <Row gutter={20}>
            <Col xs={20} md={20} lg={8}>
                <Form.Item label="GST No" name="gstNo" required rules={[{required: true}]}>
                    <Input type='tel' placeholder='Enter the GST No, e.g.AAAAA0000A '  />
                </Form.Item>
            </Col>
        </Row>
        <h3>Account Deatailes</h3>
        <p>(Please fill this section carefully)</p><hr />
        <Row gutter={20}>
            <Col xs={20} md={20} lg={8}>
                <Form.Item label="Bank Name" name="bankName" required rules={[{required: true}]}>
                    <Input type='text' placeholder='Enter the bank Name'  />
                </Form.Item>
            </Col>
            <Col xs={20} md={20} lg={8}>
                <Form.Item label="Account No" name="accountNo" required rules={[{required: true}]}>
                    <Input type='number' placeholder='Enter the account no , e.g. xxxx xxxx xxxx xx'  />
                </Form.Item>
            </Col>
            <Col xs={20} md={20} lg={8}>
                <Form.Item label="IFSC Code" name="ifscCode" required rules={[{required: true}]}>
                    <Input type='text' placeholder='Enter the IFSC Code'  />
                </Form.Item>
            </Col>
        </Row>
        <Row gutter={20}>
            <Col xs={20} md={20} lg={8}>
                <Form.Item label="Branch Name" name="branchName" required rules={[{required: true}]}>
                    <Input type='text' placeholder='Enter the Branch Name '  />
                </Form.Item>
            </Col>
        </Row>
        <h2>Upload Documents</h2>
        <Row gutter={20}>
            <Col xs={20} md={20} lg={8}>
                <Form.Item label="Upload your photo" name="photo" required rules={[{required: true}]}>
                    <Input type='file' placeholder='Enter the GST No, e.g.AAAAA0000A ' onChange={(e) => handleChange(e)} />
                </Form.Item>
            </Col>
            <Col xs={20} md={20} lg={8}>
                <Form.Item label="PanCard photo" name="pancardphoto" required rules={[{required: true}]}>
                    <Input type='file' placeholder='Enter the GST No, e.g.AAAAA0000A ' onChange={(e) => handleChange(e)} />
                </Form.Item>
            </Col>
            <Col xs={20} md={20} lg={8}>
                <Form.Item label="Aadhar Card Photo" name="aadharcardphoto" required rules={[{required: true}]}>
                    <Input type='file' placeholder='Enter the GST No, e.g.AAAAA0000A ' onChange={(e) => handleChange(e)} />
                </Form.Item>
            </Col>
        </Row>
        <Row gutter={20}>
            <Col xs={20} md={20} lg={8}>
            <button className='btn btn-primary'>Save and Next</button>
            </Col>
        </Row>
      </Form>
    </div>
  )
}

export default RegisterRestaurant