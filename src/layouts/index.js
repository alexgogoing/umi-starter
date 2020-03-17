import React from 'react';
import style from './style.less';

export default class Layouts extends React.Component{
  constructor(props) {
    super(props);
    this.state = {}
  }

  render(){

    let {children} = this.props;

    if(window.location.pathname === '/test'){
      return children;
    }

    return <div className={style.layout}>
      Welcome to UMI!
      {children}
    </div>
  }
};
