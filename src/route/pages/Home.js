import React from 'react'
import Block from '../../component/Block'
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
    const content = [
        {text:"Text", image:"http://stu.rbru.ac.th/~s5415261027/image/1.1.jpg"},
        {text:"Text", image:"https://s359.kapook.com/pagebuilder/87ab33ae-8dca-487d-ac86-779086de65e0.jpg"},
        {text:"Text", image:"https://s359.kapook.com/pagebuilder/4c68c892-5ac9-45d5-9482-e38bc1d60684.jpg"}
    ]
    return (
        <div className=" min-h-screen flex justify-center items-center gap-x-[5%]">
            {content.map(element =>{
                return <Block {...element} key={uuidv4()}/>
            })}
        </div>
    )
}
