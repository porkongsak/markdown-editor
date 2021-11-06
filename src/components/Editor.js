import React, { Component } from 'react'

export default class Editor extends Component {
    
    render() {

        let { text, onChange } = this.props;

        return (
            <div className="text-center">
                <h4>Editor</h4>
                <textarea className="container__editor form-control m-2" 
                    type="text"
                    value={text}    //   เข้าถึง props ที่ส่งเข้ามา
                    onChange={onChange} // รับค่า props onChange เข้ามา
                />
            </div>
        )
    }
}
