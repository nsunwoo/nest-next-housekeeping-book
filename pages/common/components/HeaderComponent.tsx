import React, { Component } from 'react';
import { Button } from 'antd';
import { PageHeader } from '@ant-design/pro-layout';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <PageHeader
          className="site-page-header"
          title="AKKEO"
          subTitle="nest-next practice by hamin"
          extra={[
            <>
              <div className="nav--login">
                <Button key="1">카카오로그인</Button>
              </div>
            </>,
          ]}
        />
      </div>
    );
  }
}

export default HeaderComponent;
