import React, { Component } from 'react'
import Editor from './Editor'
import ReactMarkdown from 'react-markdown'

const placeholder = `
# This is my Markdown Editor
## You can write in markdown here

An HTML container is \`<div></div>\` 

if you want you can see if click [here](http://youtube.com).

fackbooke  click [here](https://www.facebook.com/porpikury.olo/).



\`\`\`
class MarkdownEditor extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: placeholder
        }


    }
}
\`\`\`

- List Test 1
- List Test 2
- List Test 3

~~~
This is a block code
Only for test
~~~



- Music  [here](https://www.youtube.com/watch?v=5OtqLbG6T04)

![nice cat](https://i.imgur.com/45vZ9A3.jpg)

**A nice cat image :D**

> 'Work gives you meaning and purpose and life is empty without it.'

- Stephen Hawking

` ;

export default class MarkdownEditor extends Component {

    constructor(props){
        super(props);

        this.state ={ 
            text:placeholder
        }
    }

    handleChang =  e =>{
        this.setState({
            // นำค่าจาก text มาsetState
            text: e.target.value 
        })
    }

    render() {

        let { text } = this.state;

        return (
            <div>
                <h1 className="text-center m-4 markdown-title">React Markdown Editor</h1>
                <div className="container">
                    <Editor text={text}  onChange={this.handleChang}/>
                    <div>
                        <h4 className="text-center">Preview</h4>
                        <div className="container__preview form-control m-2">
                        {/* children เป็นของ  ReactMarkdown  เพื่อส่งข้อมูล */}
                            <ReactMarkdown children={text} />  
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
