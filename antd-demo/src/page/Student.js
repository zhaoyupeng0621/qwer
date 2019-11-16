import React, { Component } from 'react';
import {Table} from 'antd';
import './Student.css';
import Mock from './../Mock/mock'
import axios from 'axios'

  
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '生日',
      dataIndex: 'birthday',
      key: 'birthday',
    },
    {
      title: '头像',
      dataIndex: 'image',
      key: 'image',
    },
  ];
class Student extends Component {
  constructor(){
    super();
    this.state={
      dataSource:[]
    }
  }
    componentWillMount(){
        axios.get('http://www.weichuang.com/student').then((res)=>{
            this.setState({
              dataSource:res.data.list
            })
        })
    }
    render() {
        return (
            <div className="student-list">
                学生列表
                <Table dataSource={this.state.dataSource} columns={columns} />;
            </div>
        );
    }
}

export default Student;