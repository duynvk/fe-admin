import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "../components/Icon";
import PageTitle from "../components/Typography/PageTitle";
import { HomeIcon, AddIcon, PublishIcon, StoreIcon } from "../icons";
import {
  Card,
  CardBody,
  Label,
  Input,
  Textarea,
  Button,
  Select,
} from "@windmill/react-ui";

const FormTitle = ({ children }) => {
  return (
    <h2 className="mb-3 text-sm font-semibold text-gray-600 dark:text-gray-300">
      {children}
    </h2>
  );
};

const AddProduct = () => {
  return (
    <div>
      <PageTitle>Add New Product</PageTitle>

      {/* Breadcum */}
      <div className="flex text-gray-800 dark:text-gray-300">
        <div className="flex items-center text-purple-600">
          <Icon className="w-5 h-5" aria-hidden="true" icon={HomeIcon} />
          <NavLink exact to="/app/dashboard" className="mx-2">
            Dashboard
          </NavLink>
        </div>
        {">"}
        <p className="mx-2">Add new Product</p>
      </div>

      <div className="w-full mt-8 grid gap-4 grid-col md:grid-cols-3 ">
        <Card className="row-span-2 md:col-span-2">
          <CardBody>
            <FormTitle>Hình ảnh sản phẩm</FormTitle>
            <input
              type="file"
              className="mb-4 text-gray-800 dark:text-gray-300"
            />

            <FormTitle>Tên sản phẩm</FormTitle>
            <Label>
              <Input className="block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5 focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700 block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5 focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700 mb-4" placeholder="Nhập tên sản phẩm vào đây" />
            </Label>

            <FormTitle>Giá sản phẩm</FormTitle>
            <Label>
              <Input className="block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5 focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700 block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5 focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700 mb-4" placeholder="Nhập giá sản phẩm vào đây" />
            </Label>

            <FormTitle>Mô tả ngắn</FormTitle>
            <Label>
              <Textarea
                className="block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5 focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700 block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5 focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700 mb-4"
                rows="3"
                placeholder="Nhập mô tả sản phẩm ngắn vào đây"
              />
            </Label>

            <FormTitle>Số lượng sản phẩm</FormTitle>
            <Label>
              <Input
                className="block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5 focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700 mb-4"
                placeholder="Nhập số lượng sản phẩm vào đây"
              />
            </Label>

            <FormTitle>Mô tả đầy đủ</FormTitle>
            <Label>
              <Textarea
                className="block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5 focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700 mb-4"
                rows="5"
                placeholder="Nhập mô tả sản phẩm đầy đủ vào đây"
              />
            </Label>

            <div className="w-full">
              <Button size="large" iconLeft={AddIcon}>
                Thêm sản phẩm
              </Button>
            </div>
          </CardBody>
        </Card>

        <Card className="h-48">
          <CardBody>
            <div className="flex mb-8">
              <Button layout="primary" className="mr-3" iconLeft={PublishIcon}>
                Xuất bản
              </Button>
              <Button layout="link" iconLeft={StoreIcon}>
                Lưu bản nháp
              </Button>
            </div>
            <Label className="mt-4">
              <FormTitle>Chọn Danh Mục Sản Phẩm</FormTitle>
              <Select className="mt-1">
                <option>Vợt Cầu Lông</option>
                <option>Giày Cầu Lông</option>
                <option>Balo Cầu Lông</option>
                <option>Bao Cầu Lông</option>
                <option>Phụ Kiện Cầu Lông</option>
              </Select>
            </Label>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default AddProduct;
