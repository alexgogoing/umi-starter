import React from 'react';
import style from './style.less';


export default class extends React.Component{
  constructor(props) {
    super(props);
    this.state = {}
  }

  render(){
    return <div className={style.test}>
      test
    </div>
  }
}
