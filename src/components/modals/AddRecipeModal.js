import React from 'react';
import { Modal, Form, Input, Switch } from 'antd';

const formItemLayout = {
  labelCol: {
    span: 5
  },
  wrapperCol: {
    span: 14
  }
};

const AddRecipeModal = ({
  modalOpen,
  handleSubmit,
  handleCloseModal,
  handleChecked,
  handleChange,
  title,
  ingredients,
  directions,
  published,
  ...props
}) => {
  return (
    <Modal
      title="Add New Recipe"
      centered
      visible={modalOpen}
      onOk={handleSubmit}
      onCancel={handleCloseModal}
    >
      <Form layout="horizontal">
        <Form.Item label="Title" {...formItemLayout}>
          <Input
            value={title}
            onChange={handleChange}
            placeholder="Recipe Title"
            name="title"
          />
        </Form.Item>
        <Form.Item label="Ingredients" {...formItemLayout}>
          <Input.TextArea
            value={ingredients}
            onChange={handleChange}
            placeholder="Recipe Ingredients"
            name="ingredients"
          />
        </Form.Item>
        <Form.Item label="Directions" {...formItemLayout}>
          <Input.TextArea
            value={directions}
            onChange={handleChange}
            placeholder="Recipe Directions"
            name="directions"
          />
        </Form.Item>
        <Form.Item label="Published" {...formItemLayout}>
          <Switch checked={published} onChange={handleChange} />
        </Form.Item>
      </Form>
    </Modal>
  )
}

const WrappedForm = Form.create({ name: 'add-new-recipe' })(AddRecipeModal);

export default WrappedForm;
